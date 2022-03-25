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
          <li>1x Wohnzimmer</li>
          <li>1x Schlafzimmer</li>
          <li>1x Küche</li>
          <li>1x Badezimmer</li>
        </ul>
      </div>
    </div>
    <footer>
      <div class="tile-price">ab {{ cheapestPrice }}€/Nacht</div>
      <PrimaryButton caption="Details" />
    </footer>
  </div>
</template>

<script>
export default {
  props: ["title", "icon", "rooms", "price"],
  computed: {
    cheapestPrice() {
      return "-"
    },
    iconPath() {
      if (!this.icon) {
        return
      }
      return require(`@/assets/img/${this.icon}.png`)
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