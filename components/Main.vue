<template>
  <div class="main">
    <div class="welcome-section lb">
      <div class="section-content lp">
        <div class="intro-container">
          <h1>{{ texts.greeting }}</h1>
          <p>
            {{ texts.intro }}
          </p>
          <PrimaryButton caption="Buchen" />
        </div>
        <img width="650px" src="@/assets/img/photo-stack-2.png" />
      </div>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1920 100"
      class="soft-shadow"
    >
      <path
        id="round-bottom"
        d="M 0,0 S626-64,1106-64,1920,27,1920,27 H0 Z"
        transform="translate(1920 26.5) rotate(180)"
        fill="#fafafa"
      />
    </svg>
    <div class="lp">
      <h2 v-if="multipleAccommodations">Unterkünfte</h2>
      <h2 v-else>Unterkunft</h2>
      <div class="tile-container">
        <Tile
          v-for="accom in accommodations"
          :title="accom.name"
          :icon="accom.icon"
          :rooms="accom.rooms"
          :price="accom.price"
          :key="accom.name"
        />
      </div>
    </div>
    <div class="lb">
      <div class="lp">
        <h2>So kommst du zu uns</h2>
        <p>
          {{ texts.location }}
        </p>
        <Map />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["accommodations", "texts"],
  data() {
    return {
      multipleAccommodations: this.accommodations.length - 1,
    };
  },
};
</script>

<style lang="scss" scoped>
svg {
  width: 100%;
  z-index: -1;
}
.soft-shadow {
  -webkit-filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.13));
  filter: drop-shadow(0px 5px 60px rgba(0, 0, 0, 0.13));
  /* Similar syntax to box-shadow */
}
.main {
  background-color: $dark-background-color;
  width: 100%;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */

  h1 {
    font-size: $fs-huge;
  }

  h2 {
    font-size: $fs-large;
  }

  p {
    color: $secondary-font-color;
  }

  .welcome-section {
    position: relative;
    z-index: 1;

    .section-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }

  .tile-container {
    display: flex;
    flex-wrap: wrap;
  }
}

.lp {
  padding: $margin-medium $margin-large;
  min-height: 480px;
  max-width: $max-width;
  margin: auto;
}

.lb {
  background-color: $light-background-color;
}

@media only screen and (min-width: 900px) {
  .intro-container {
    width: 45%;
  }

  img {
    margin-left: $margin-large;
    min-width: 40%;
    max-width: 80%;
    height: auto;
  }

  .lp {
    padding: $margin-large $margin-huge;
  }
}
</style>