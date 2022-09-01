<template>
  <div class="gallery-container">
    <div class="image-container" v-for="(image, index) in imagePaths" :key="image">
      <img :src="image"  @click="galleryIndex = index"/>
    </div>
    <Gallery :images="imagePaths" :index="galleryIndex" />
  </div>
</template>

<script>
import VueGallery from 'vue-gallery';
export default {
  props: ["folderPath", "fileNamePattern", "fileEnding", "imageCount"],
  data() {
    return {
      images: Array.from(Array(this.imageCount).keys()),
      galleryIndex: null
    };
  },
  components: {
    'Gallery': VueGallery
  },
  computed: {
    imagePaths() {
      let paths = []
      this.images.forEach((image) => {
        paths.push(require(`@/${this.folderPath}${this.fileNamePattern}${image + 1}.${this.fileEnding}`))
      })
      return paths
    }
  },
};
</script>

<style lang="scss" scoped>
.gallery-container {
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