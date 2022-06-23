<template>
  <button @click="onClick" :class="type">{{ caption }}</button>
</template>

<script>
export default {
  props: {
    caption: String,
    type: {
      default: "primary",
    },
    onClick: Function,
  },
};
</script>

<style lang="scss" scoped>
button {
  border: none;
  color: white;
  padding: $margin-small $margin-medium;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: $fs-normal;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    filter: brightness(90%);
  }

  &.primary {
    background-color: $primary-color;
  }

  &.secondary {
    background-color: $alternative-color;
  }
}
</style>