<template>
  <div class="tile">
    <header>
      <div class="tile-title">{{ title }}</div>
      <div class="tile-icon">
        <img height="30" :src="iconPath" :alt="icon" />
      </div>
    </header>
    <div class="tile-content">
      <div class="tile-details">
        <ul>
          <li v-if="rooms.livingroom">{{ rooms.livingroom }}x Wohnzimmer</li>
          <li v-if="rooms.bathroom">{{ rooms.bathroom }}x Bad</li>
          <li v-if="rooms.bedroomOneBed || rooms.bedroomTwoBed">
            {{ rooms.bedroomOneBed + rooms.bedroomTwoBed }}x Schlafzimmer({{ bedCount }} Betten)
          </li>
          <li v-if="rooms.kitchen">{{ rooms.kitchen }}x Küche</li>
        </ul>
      </div>
    </div>
    <footer>
      <div @click="getPrice(10, 1, 5)" class="tile-price">
        ab {{ cheapestPrice }}€/Nacht
      </div>
      <PrimaryButton caption="Details" />
    </footer>
  </div>
</template>

<script>
export default {
  props: ["title", "icon", "rooms", "priceCatalogue"],
  data() {
    return {
      isSummer: true,
    };
  },
  computed: {
    cheapestPrice() {
      let { basePrice, pricePerPerson } = this.priceCatalogue.summer
      return basePrice + pricePerPerson + this.priceCatalogue.cleaningFee
    },
    iconPath() {
      if (!this.icon) {
        return
      }
      return require(`@/assets/img/${this.icon}.png`)
    },
    bedCount() {
      if (this.rooms)
        return this.rooms.bedroomOneBed + this.rooms.bedroomTwoBed * 2
    }
  },
  methods: {
    getPrice(startDate, endDate, persons) {
      return this.calculatePrice(
        5,
        5,
        this.priceCatalogue,
        this.isSummer
      )
    },
    calculatePrice(days, persons, priceCatalogue, isSummer) {
      let { basePrice, pricePerPerson } = isSummer
        ? priceCatalogue.summer
        : priceCatalogue.winter

      let selectedDiscount = this.selectDiscount(
        days,
        priceCatalogue.discounts
      )

      let dynamicPrice = days * (basePrice + pricePerPerson * persons)
      let discountedPrice = (dynamicPrice * selectedDiscount) / 100

      return discountedPrice + priceCatalogue.cleaningFee
    },
    selectDiscount(days, discounts) {
      const possibleDiscounts = discounts.filter((discount) => {
        return discount.days <= days
      });
      const strippedDiscounts = possibleDiscounts.map((discount) => {
            return discount.percentage
          })
        
      //Add no discount to array
      strippedDiscounts.push(1)
      return Math.max(...strippedDiscounts)
      
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
  transition: transform .4s ease; 

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

@media only screen and (min-width: 800px) {
  .tile:not(:last-child) {
    margin-right: $margin-large;
  }
}
</style>