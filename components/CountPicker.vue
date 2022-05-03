<template>
  <div>
    <span class="input-caption">{{ caption }}:</span>
    <div class="count-picker">
      <button @click="increment" class="icon-button" type="button">
        <fa-icon class="mr-s" icon="plus" />
      </button>
      <input :value="value" readonly />
      <button @click="decrement" class="icon-button" type="button">
        <fa-icon class="mr-s" icon="minus" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["value", "min", "max", "caption"],
  methods: {
    increment() {
      if (this.value < this.max) this.$emit("updateCount", this.value + 1);
    },
    decrement() {
      if (this.value > this.min) this.$emit("updateCount", this.value - 1);
    },
  },
};
</script>

<style lang="scss" scoped>
.input-caption {
  font-size: $fs-tiny;
  font-weight: bold;
}

.count-picker {
  width: fit-content;
  padding: 0px;
  border-radius: 10px;
  border: solid 1px #eaeaea;
  background-color: white;
  padding: $margin-small;
  cursor: pointer;

  .icon-button {
    margin: 0;
    font-size: $fs-tiny;
    border: none;
    background-color: white;
    cursor: pointer;
    border-radius: 50%;

    &:hover {
      background-color: $light-hover-color;
    }
  }

  input {
    font-size: $fs-normal;
    width: 20px;
    text-align: center;
    border: none;
    background-color: white;
  }
}
</style>