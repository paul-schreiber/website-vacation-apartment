<template>
  <div class="galery-container">
    <div class="image-container" v-for="image in images" :key="image">
      <img :src="buildPath(image + 1)" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["folderPath", "fileNamePattern", "fileEnding", "imageCount"],
  data() {
    return { images: Array.from(Array(this.imageCount).keys()) };
  },
  methods: {
    buildPath(id) {
      return require(`@/${this.folderPath}${this.fileNamePattern}${id}.${this.fileEnding}`);
    },
  },
};
</script>

<style lang="scss" scoped>
.galery-container {
  display: flex;
  width: 350px;
  height: 75px;
  overflow-y: scroll;
  .image-container {
    width: 65px;
    height: 65px;
    margin-right: $margin-medium;

    img {
      border-radius: 10px;
      width: 65px;
      height: 65px;
    }
  }
}
</style>