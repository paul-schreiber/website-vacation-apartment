<template>
  <button
    @click="onClick"
    :class="[type, disabled ? 'disabled' : '']"
    :disabled="disabled"
  >
    {{ caption }}
  </button>
</template>

<script>
export default {
  props: {
    caption: String,
    type: {
      default: "primary",
      type: String,
    },
    onClick: Function,
    disabled: {
      default: false,
      type: Boolean,
    },
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
  border-radius: 16px;
  border: solid 2px $primary-color;
  cursor: pointer;

  &:not(.disabled) {
    &:hover {
      filter: brightness(90%);
    }
  }

  &.primary {
    background-color: $primary-color;
  }

  &.secondary {
    background-color: transparent;
    color: $primary-color;
  }

  &.disabled {
    border: 2px solid #b8b8b8;
    background-color: #e0e0e0;
    color: #9c9c9c;
    cursor: not-allowed;
  }

}
</style>