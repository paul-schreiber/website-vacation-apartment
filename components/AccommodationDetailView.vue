<template>
  <div class="detail-container">
    <div>
      <header>
        <h2>Ferienwohnung {{ accom.name }}</h2>
        <div class="tile-icon">
          <img height="30" :src="iconPath" :alt="accom.icon" />
        </div>
      </header>
      <div class="content" v-if="bookingStatus === 'planning'">
        <section class="content-section">
          <Tabs :tabs="tabs">
            <template v-slot:[tabs[0]]>
              <ul>
                <li v-if="accom.rooms.livingroom">
                  {{ accom.rooms.livingroom }}x Wohnzimmer
                </li>
                <li v-if="accom.rooms.bedroomOneBed">
                  {{ accom.rooms.bedroomOneBed }}x Schlafzimmer (1 Bett)
                </li>
                <li v-if="accom.rooms.bedroomTwoBed">
                  {{ accom.rooms.bedroomTwoBed }}x Schlafzimmer (2 Betten)
                </li>
                <li v-if="accom.rooms.bedroomThreeBed">
                  {{ accom.rooms.bedroomThreeBed }}x Schlafzimmer (3 Betten)
                </li>
                <li v-if="accom.rooms.bedroomFourBed">
                  {{ accom.rooms.bedroomFourBed }}x Schlafzimmer (4 Betten)
                </li>
                <li v-if="accom.rooms.bathroom">
                  {{ accom.rooms.bathroom }}x Bad
                </li>
                <li v-if="accom.rooms.kitchen">
                  {{ accom.rooms.kitchen }}x Küche
                </li>
              </ul>
            </template>
            <template v-slot:[tabs[1]]>
              <IconList :items="accom.equipment" />
            </template>
            <template v-slot:[tabs[2]]>
              <Galery folderPath='assets/img/galery/' fileNamePattern='galery-' fileEnding='jpg' :imageCount="imageCount" />
            </template>
          </Tabs>
        </section>
        <section class="content-section">
          <h3>Reisedaten:</h3>
          <form class="travel-info-form">
            <div class="date-picker">
              <span class="input-caption">Datum</span>
              <DatePicker v-model="dateRange" is-range>
                <template v-slot="{ inputValue, togglePopover }">
                  <div class="date-input">
                    <button @click="togglePopover()" class="icon-button">
                      <fa-icon class="mr-s" icon="calendar" />
                    </button>
                    <input
                      @click="togglePopover()"
                      :value="`${inputValue.start} - ${inputValue.end}`"
                      readonly
                    />
                  </div> </template
              ></DatePicker>
            </div>
            <CountPicker
              :value.sync="personCount"
              min="0"
              :max="maxBeds"
              caption="Personen"
              @updateCount="updateCount"
            />
          </form>
        </section>
        <section class="content-section" v-if="personCount > 0">
          <h3>Preis:</h3>
          <div class="billing-line">
            <span>
              {{ getCosts.pricePerNight }} € x {{ this.overnightStays }}
              <span v-if="this.overnightStays > 1">Nächte</span>
              <span v-if="this.overnightStays <= 1">Nacht</span>
            </span>
            <span>{{ getCosts.priceAllNights }} €</span>
          </div>
          <div class="billing-line">
            <span>Servicegebühr</span>
            <span>{{ getCosts.cleaningFee }} €</span>
          </div>
          <div class="billing-divider"></div>
          <div class="billing-line bold">
            <span>Gesamt</span>
            <span>{{ getCosts.finalPrice }} €</span>
          </div>
        </section>
        <section class="content-section action-button" v-if="personCount > 0">
          <ActionButton caption="Weiter" :onClick="activateBookingStatus" />
        </section>
      </div>
      <div v-else-if="bookingStatus === 'booking'">
        <BookingView
          :navToPlanning="activatePlanningStatus"
          :sendMail="sendMail"
        />
      </div>
      <div v-else-if="bookingStatus === 'loading'"></div>
      <div v-else-if="bookingStatus === 'sent'">
        The message was sent! <fa-icon class="mr-s" icon="paper-plane" />
      </div>
    </div>
  </div>
</template>

<script>
import emailjs from "@emailjs/browser";
import DatePicker from "v-calendar/lib/components/date-picker.umd";
import smoothHeight from "vue-smooth-height";
import apiKeys from "@/api-keys";

export default {
  components: {
    DatePicker,
  },
  props: ["accom", "closeAction"],
  mixins: [smoothHeight],
  mounted() {
    this.bookingStatus = "planning";

    this.$smoothElement({
      el: ".detail-container",
      hideOverflow: true,
      transition: "height 0.5s ease-in-out .1s",
    });
  },
  data() {
    return {
      imageCount: require.context('@/assets/img/galery', false, /\.(jpg)$/).keys().length,
      bookingStatus: "planning",
      dateRange: {
        start: new Date(),
        end: new Date(new Date().setDate(new Date().getDate() + 1)),
      },
      personCount: 0,
    };
  },
  computed: {
    iconPath() {
      if (!this.accom.icon) {
        return;
      }
      return require(`@/assets/img/${this.accom.icon}.png`);
    },
    maxBeds() {
      return (
        this.accom.rooms.bedroomOneBed + this.accom.rooms.bedroomTwoBed * 2 + this.accom.rooms.bedroomThreeBed * 3 + this.accom.rooms.bedroomFourBed * 4
      );
    },
    tabs() {
      return ["Zimmer", "Ausstattung", "Galerie"];
    },
    overnightStays() {
      let end = Date.parse(this.dateRange.end);
      let start = Date.parse(this.dateRange.start);
      return (end - start) / 86400000;
    },
    getDiscount() {
      const discount = this.accom.priceCatalogue.discounts.reduce(
        (prev, curr) => {
          return prev.days < curr.days && curr.days <= this.overnightStays
            ? curr
            : prev;
        },
        { days: 0, percentage: 0 }
      );
      return discount.percentage;
    },
    getCosts() {
      const priceCatalogue = this.isSummer()
        ? this.accom.priceCatalogue.summer
        : this.priceCatalogue.winter;
      const pricePerNight =
        priceCatalogue.basePrice +
        this.personCount * priceCatalogue.pricePerPerson;
      let discountedPricePerNight = Math.round(
        (pricePerNight * (100 - this.getDiscount)) / 100
      );
      const priceAllNights = discountedPricePerNight * this.overnightStays;
      let finalPrice = priceAllNights + this.accom.priceCatalogue.cleaningFee;

      return {
        pricePerNight: discountedPricePerNight,
        priceAllNights,
        cleaningFee: this.accom.priceCatalogue.cleaningFee,
        finalPrice: finalPrice,
      };
    },
  },
  methods: {
    updateCount(newCount) {
      this.personCount = newCount;
    },
    isSummer() {
      return true;
    },
    activatePlanningStatus() {
      this.bookingStatus = "planning";
    },
    activateBookingStatus() {
      this.bookingStatus = "booking";
    },
    sendMail(userName, email, additionalNotes = "") {
      this.bookingStatus = "sent";
      setTimeout(this.closeAction, 4000);

      const now = new Date();

      const templateParams = {
        user: {
          name: userName,
          mail: email,
        },
        date: {
          date: now.toLocaleDateString('de-DE'),
          time: now.toLocaleTimeString('de-DE'),
        },
        booking: {
          additionalNotes: additionalNotes,
          accom: this.accom.name,
          personCount: this.personCount,
          dateRange: `${this.dateRange.start.toLocaleDateString('de-DE')}-${this.dateRange.end.toLocaleDateString('de-DE')}`,
          dayCount: this.overnightStays,
          totalPrice: this.getCosts.finalPrice,
          pricePerNight: this.getCosts.pricePerNight,
        },
      };

      emailjs
        .send(
          apiKeys.emailJS.serviceId,
          apiKeys.emailJS.templateId,
          templateParams,
          apiKeys.emailJS.publicKey
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    },
  },
};
</script>

<style lang="scss" scoped>
h2,
h3 {
  margin-top: 0px;
  margin-bottom: $margin-medium;
}

.input-caption {
  font-size: $fs-tiny;
  font-weight: bold;
}

.detail-container {
  overflow: hidden;
  header {
    display: flex;
    justify-content: space-between;
  }

  .content-section {
    &:not(:first-child) {
      margin-top: $margin-big;
    }

    ul {
      padding: 0px;
      li {
        list-style: none;
        font-weight: $fw-light;
      }
    }

    .billing-line {
      display: flex;
      justify-content: space-between;
      margin-bottom: $margin-tiny;

      &.bold {
        font-weight: 600;
      }
    }

    .billing-divider {
      margin-top: $margin-small;
      margin-bottom: $margin-small;
      border-bottom: 1px solid lightgray;
    }
  }

  .travel-info-form {
    display: flex;
  }

  .date-picker {
    margin-right: $margin-medium;
    margin-bottom: $margin-medium;

    .date-input {
      width: fit-content;
      padding: 0px;
      border-radius: 10px;
      border: solid 1px #eaeaea;
      background-color: white;
      padding: $margin-small;
      cursor: pointer;

      &:focus-within {
        box-shadow: inset 0 0 0 3px $primary-color-transparent;
      }

      input,
      .icon-button {
        margin: 0;
        font-size: $fs-normal;
        border: none;
        background-color: white;
        cursor: pointer;

        &:focus {
          outline: none;
        }
      }
    }
  }

  .action-button {
    display: flex;
    justify-content: end;
  }
}
</style>