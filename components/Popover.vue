<template>
  <div class="popover" :class="[isVisible ? 'visible' : '']">
    <div class="overlay" @click="toggleMenu"></div>
    <div class="popover-content"></div>
  </div>
</template>

<script>
export default {
  props: ["isVisible", "toggleMenu"],
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
  background: rgba(0, 0, 0, 0.151);
}

.popover {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 4;
  width: 100%;
  height: 100%;
  display: none;
  &.visible {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.popover-content {
  z-index: 4;
  background-color: $light-background-color;
  width: 70%;
  height: 60%;
  border-radius: 20px;
  box-shadow: $soft-shadow;
}
</style>