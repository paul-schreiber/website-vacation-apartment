<template>
  <div class="detail-container">
    <header>
      <h2>Ferienwohnung {{ accom.name }}</h2>
      <div class="tile-icon">
        <img height="30" :src="iconPath" :alt="accom.icon" />
      </div>
    </header>
    <div class="content">
      <section class="content-section">
        <Tabs :tabs="tabs">
          <template v-slot:[tabs[0]]>
            <ul>
              <li v-if="accom.rooms.livingroom">
                {{ accom.rooms.livingroom }}x Wohnzimmer
              </li>
              <li v-if="accom.rooms.bathroom">
                {{ accom.rooms.bathroom }}x Bad
              </li>
              <li v-if="accom.rooms.bedroomOneBed">
                {{ accom.rooms.bedroomOneBed }}x Schlafzimmer (1 Bett)
              </li>
              <li v-if="accom.rooms.bedroomTwoBed">
                {{ accom.rooms.bedroomTwoBed }}x Schlafzimmer (2 Betten)
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
            <Galery :imageSources="sources" />
          </template>
        </Tabs>
      </section>
      <section class="content-section">
        <h3>Reisedaten:</h3>
        <form class="travel-info-form">
          <div class="date-picker">
            <span class="input-caption">Datum:</span>
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
            min="1"
            :max="maxBeds"
            caption="Personen"
            @updateCount="updateCount"
          />
        </form>
      </section>
      <section class="content-section">
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
      <section class="content-section action-button">
      <PrimaryButton caption="Anfragen"/>
      </section>
    </div>
  </div>
</template>

<script>
import DatePicker from "v-calendar/lib/components/date-picker.umd";

export default {
  components: {
    DatePicker,
  },
  props: ["accom"],
  data() {
    return {
      sources: ["photo-stack.png"],
      dateRange: {
        start: new Date(),
        end: new Date(new Date().setDate(new Date().getDate() + 1)),
      },
      personCount: 1,
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
        this.accom.rooms.bedroomOneBed + this.accom.rooms.bedroomTwoBed * 2
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
          return prev.days < curr.days && curr.days <= this.overnightStays ? curr : prev;
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
      let discountedPricePerNight = Math.round(pricePerNight * (100 - this.getDiscount)/100);
      const priceAllNights = discountedPricePerNight * this.overnightStays;
      let finalPrice = priceAllNights + this.accom.priceCatalogue.cleaningFee;

      return {
        pricePerNight: discountedPricePerNight,
        priceAllNights,
        cleaningFee: this.accom.priceCatalogue.cleaningFee,
        finalPrice: finalPrice
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

      input,
      .icon-button {
        margin: 0;
        font-size: $fs-normal;
        border: none;
        background-color: white;
        cursor: pointer;
      }
    }
  }

  .action-button {
    display: flex;
    justify-content: end;
  }
}
</style>