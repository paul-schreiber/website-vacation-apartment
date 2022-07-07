<template>
  <div>
    <a v-if="isMobileAppleDevice()" :href="appleMapsLink" target="_blank" rel="noopener noreferrer">
      <div id="map"></div>
    </a>
    <a v-else :href="googleMapsLink" target="_blank" rel="noopener noreferrer">
      <div id="map"></div>
    </a>
  </div>
</template>

<script>
export default {
  props: ['appleMapsLink', 'googleMapsLink'],
  methods: {
    isMobileAppleDevice() {
      if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
        return true;
      } else {
        return false;
      }
    },
  },

  mounted() {
    let mapKitScript = document.createElement("script");
    mapKitScript.setAttribute(
      "src",
      "https://cdn.apple-mapkit.com/mk/5.x.x/mapkit.js"
    );
    document.head.appendChild(mapKitScript);
  },
};
</script>


<style lang="scss" scoped>
#map {
  height: 300px;
  margin: $margin-large auto;
  background-color: lightgray;
  border-radius: 20px;
  box-shadow: $soft-shadow;
}
</style>