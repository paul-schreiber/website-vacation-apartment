<template>
  <div class="tile-wrapper">
    <div class="tile" @click="toggleMenu">
      <header>
        <div class="tile-title">FW {{ accom.name }}</div>
        <div class="tile-icon">
          <img height="30" :src="iconPath" :alt="accom.icon" />
        </div>
      </header>
      <div class="tile-content">
        <div class="tile-details">
          <ul>
            <li v-if="accom.rooms.livingroom">{{ accom.rooms.livingroom }}x Wohnzimmer</li>
            <li v-if="accom.rooms.bedroomOneBed || accom.rooms.bedroomTwoBed || accom.rooms.bedroomThreeBed || accom.rooms.bedroomFourBed">
              {{ accom.rooms.bedroomOneBed + accom.rooms.bedroomTwoBed + accom.rooms.bedroomThreeBed + accom.rooms.bedroomFourBed }}x Schlafzimmer
            </li>
            <li v-if="accom.rooms.bathroom">{{ accom.rooms.bathroom }}x Bad</li>
            <li v-if="accom.rooms.kitchen">{{ accom.rooms.kitchen }}x Küche</li>
          </ul>
        </div>
      </div>
      <footer>
        <div @click="getPrice(10, 1, 5)" class="tile-price">
          ab {{ cheapestPrice }}€/Nacht
        </div>
        <PrimaryNavButton caption="Details" />
      </footer>
    </div>
    <Popover :isVisible="showDetails" :toggleMenu="toggleMenu" :accom="accom"/>
  </div>
</template>

<script>
export default {
  props: ["accom"],
  data() {
    return {
      isSummer: true,
      showDetails: false
    };
  },
  computed: {
    cheapestPrice() {
      let { basePrice, pricePerPerson } = this.accom.priceCatalogue.summer;
      return basePrice + pricePerPerson + this.accom.priceCatalogue.cleaningFee;
    },
    iconPath() {
      if (!this.accom.icon) {
        return;
      }
      return require(`@/assets/img/icons/${this.accom.icon}.png`);
    }
  },
  methods: {
    toggleMenu(){
      this.showDetails = !this.showDetails
    },
    getPrice(startDate, endDate, persons) {
      return this.calculatePrice(5, 5, this.accom.priceCatalogue, this.isSummer);
    },
    calculatePrice(days, persons, priceCatalogue, isSummer) {
      let { basePrice, pricePerPerson } = isSummer
        ? priceCatalogue.summer
        : priceCatalogue.winter;

      let selectedDiscount = this.selectDiscount(
        days,
        priceCatalogue.discounts
      );

      let dynamicPrice = days * (basePrice + pricePerPerson * persons);
      let discountedPrice = (dynamicPrice * selectedDiscount) / 100;

      return discountedPrice + priceCatalogue.cleaningFee;
    },
    selectDiscount(days, discounts) {
      const possibleDiscounts = discounts.filter((discount) => {
        return discount.days <= days;
      });
      const strippedDiscounts = possibleDiscounts.map((discount) => {
        return discount.percentage;
      });

      //Add no discount to array
      strippedDiscounts.push(1);
      return Math.max(...strippedDiscounts);
    },
  },
};
</script>

<style lang="scss" scoped>
.tile {
  width: 350px;
  height: 200px;
  padding: $margin-medium;
  margin-bottom: $margin-large;
  background-color: $light-background-color;
  border-radius: 20px;
  box-shadow: $soft-shadow;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 0.4s ease;

  &:hover {
    transform: scale(1.05);
  }

  header {
    display: flex;
    justify-content: space-between;

    .tile-title {
      font-weight: $fw-bold;
      font-size: $fs-medium;
    }
  }

  .tile-content {
    padding-left: $margin-medium;

    .tile-details {
      height: 80px;
      ul {
        padding: 0px;
        li {
          list-style: none;
          font-weight: $fw-light;
        }
      }
    }
  }

  footer {
    display: flex;
    justify-content: space-between;
    padding-left: $margin-medium;

    .tile-price {
      font-size: $fs-normal;
      font-weight: $fw-bold;
    }
  }
}

@media only screen and (min-width: 992px) {
  .tile-wrapper:not(:last-child) {
    margin-right: $margin-large;
  }
}
</style>