<template>
  <button @click="onClick">{{ caption }} </button>
</template>

<script>
export default {
  props: ["caption", "onClick"],
};
</script>

<style lang="scss" scoped>
button {
  background-color: $primary-color;
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
}
</style>