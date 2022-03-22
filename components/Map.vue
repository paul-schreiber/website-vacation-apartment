<template>
  <div id="map"></div>
</template>

<script>
export default {
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