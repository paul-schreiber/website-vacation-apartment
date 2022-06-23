<template>
  <div class="popover" v-if="isVisible">
    <div class="overlay" @click="toggleMenu"></div>
    <div class="popover-content">
      <AccommodationDetailView :accom="accom" :closeAction="toggleMenu" />
    </div>
  </div>
</template>

<script>
import AccommodationDetailView from "./AccommodationDetailView.vue";
export default {
  components: { AccommodationDetailView },
  props: ["isVisible", "toggleMenu", "accom"],
};
</script>

<style lang="scss" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
}

.popover {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.popover-content {
  z-index: 4;
  background-color: $light-background-color;
  padding: $margin-big;
  max-width: 600px;
  width: 600px;
  border-radius: 20px;
  box-shadow: $soft-shadow;
  overflow: visible;
}
</style>