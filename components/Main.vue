<template>
  <div class="main">
    <div class="welcome-section bg-l">
      <div class="section-content section">
        <div class="intro-container">
          <h1>{{ texts.greeting }}</h1>
          <p class="standard-text">
            {{ texts.intro.partOne }}
          </p>
          <p class="standard-text">
            {{ texts.intro.partTwo }}
          </p>
          <PrimaryNavButton caption="Buchen" route="#accommodation" />
        </div>
        <img class="intro-img" src="@/assets/img/coverImage.png" />
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
    <div id="accommodation" class="section">
      <h2 v-if="multipleAccommodations">Unterkünfte</h2>
      <h2 v-else>Unterkunft</h2>
      <div class="tile-container">
        <Tile
          v-for="accom in accommodations"
          :accom="accom"
          :key="accom.name"
        />
      </div>
    </div>
    <div class="bg-l">
      <div id="route" class="section">
        <h2>So kommst du zu uns</h2>
        <p class="standard-text">
          {{ texts.location }}
        </p>
        <Map :appleMapsLink="mapLinks.appleMaps" :googleMapsLink="mapLinks.googleMaps"
/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["accommodations", "texts", 'mapLinks'],
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
  margin-top: -1px;
}
.soft-shadow {
  -webkit-filter: drop-shadow(0px 5px 40px rgba(0, 0, 0, 0.12));
  filter: drop-shadow(0px 5px 40px rgba(0, 0, 0, 0.12));
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

  .standard-text {
    color: $secondary-font-color;
    font-weight: $fw-light;
    line-height: 1.6rem;
  }

  .welcome-section {
    position: relative;
    z-index: 1;

    .section-content {
      display: flex;
      flex-wrap: wrap;
      padding-top: $margin-big;
    }
  }

  .intro-img {
    width: 100%;
    max-width: 700px;
    margin-top: $margin-large;
    margin-bottom: $margin-large;
  }

  .tile-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
  }
}

.section {
  padding: $margin-medium $margin-big;
  min-height: 530px;
  max-width: $max-width;
  margin: auto;
}

.bg-l {
  background-color: $light-background-color;
}

@media only screen and (min-width: 992px) {
  .main {
    .intro-container {
      max-width: 40%;
    }

    .tile-container {
      align-items: flex-start;
      flex-direction: row;
    }

    .welcome-section {
      .section-content {
        flex-wrap: nowrap;
        min-height: 75vh;
        justify-content: space-between;
        //align-items: center;

        .intro-img {
          border-radius: 20px;
          align-self: center;
          margin-top: 80px;
          margin-bottom: 0;
          min-width: 450px;
          max-width: 55%;
          width: auto;
          height: auto;
        }
      }
    }
  }
}
@media only screen and (min-width: 800px) {
  .section {
    padding: $margin-huge $margin-huge;
  }
}
</style>