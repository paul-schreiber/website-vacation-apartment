<template>
  <div>
    <a
      v-if="isMobileAppleDevice()"
      :href="appleMapsLink"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div id="map"><img :src="mapImageURL" /></div>
    </a>
    <a v-else :href="googleMapsLink" target="_blank" rel="noopener noreferrer">
      <div id="map"><img :src="mapImageURL" /></div>
    </a>
  </div>
</template>

<script>
export default {
  props: ["appleMapsLink", "googleMapsLink"],
  data() {
    return {
      mapImageURL: process.env.mapImageURL,
    };
  },
  methods: {
    isMobileAppleDevice() {
      if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>


<style lang="scss" scoped>
#map {
  height: 300px;
  margin: $margin-large auto;
  background-color: lightgray;
  box-shadow: $soft-shadow;
  border-radius: 20px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>