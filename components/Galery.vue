<template>
  <div class="galery-container">
    <div class="image-container">
      <img
        v-for="source in imageSources"
        :src="buildPath(source)"
        :key="source"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["imageSources"],
  methods: {
    buildPath(fileName) {
      return require(`@/assets/img/galery/${fileName}`);
    },
  },
};
</script>

<style lang="scss" scoped>
    .image-container {
        img {
            width: 100px;
            margin-right: $margin-medium;
        }
    }
</style>