<template>
  <div class="popover" v-if="isVisible">
    <div class="overlay" @click="toggleMenu"></div>
    <div class="popover-content">
      <div class="close-button" @click="toggleMenu">
        <fa-icon class="mr-s" icon="xmark" />
      </div>
      <slot></slot>
    </div>
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
  max-width: 100%;
  width: 600px;
  border-radius: 20px;
  box-shadow: $soft-shadow;
  overflow: visible;
  position: relative;


  .close-button {
    position: absolute;
    top: -10px;
    right: -10px;

    background-color: $close-color;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: white;
    cursor: pointer;
  }
}

@media only screen and (max-width: 800px) {
  .popover-content {
    position: absolute;
    bottom: 0;
    border-radius: 20px 20px 0px 0px;
  }

  .popover-content {
    .close-button {
      top: -20px;
      right: 0px;
    }
  }
}
</style>