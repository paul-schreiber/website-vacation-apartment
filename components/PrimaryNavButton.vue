<template>
  <a :href="route" >{{ caption }} </a>
</template>

<script>
export default {
  props: ["caption", "route"],
};
</script>

<style lang="scss" scoped>
a {
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