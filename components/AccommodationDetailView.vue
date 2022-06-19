<template>
  <div class="detail-container">
    <header>
      <h2>Ferienwohnung {{ accom.name }}</h2>
      <div class="tile-icon">
        <img height="30" :src="iconPath" :alt="accom.icon" />
      </div>
    </header>
    <div class="content">
      <section class="detail-section">
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
                {{ accom.rooms.bedroomOneBed}}x
                Schlafzimmer (1 Bett)
              </li>
              <li v-if="accom.rooms.bedroomTwoBed">
                {{ accom.rooms.bedroomTwoBed}}x
                Schlafzimmer (2 Betten)
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
      <section class="detail-section">
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
      <section class="detail-section">
        <h3>Preis:</h3>
        {{this.overnightStays}}
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
        end: new Date(),
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
      let current = (Date.parse(this.dateRange.start) - Date.parse(this.dateRange.start)) / 86400000
      console.log(current)
      return current
    }
  },
  methods: {
    updateCount(newCount) {
      this.personCount = newCount;
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

  .detail-section {
    margin-bottom: $margin-big;

    ul {
      padding: 0px;
      li {
        list-style: none;
        font-weight: $fw-light;
      }
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
}
</style>