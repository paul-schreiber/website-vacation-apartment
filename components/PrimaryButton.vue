<template>
  <button>{{ caption }}</button>
</template>

<script>
export default {
  props: ['caption']
}
</script>

<style lang="scss" scoped>
button {
  background-color: #6bb9a4;
  border: none;
  color: white;
  padding: $margin-small $margin-medium;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: $fs-normal;
  border-radius: 15px;
  cursor: pointer;
}
</style>