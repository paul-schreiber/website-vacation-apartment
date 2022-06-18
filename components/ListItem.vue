<template>
  <div class="list-item">
    <div class="icon"><fa-icon class="mr-s" :icon="icon" /> </div>
    <span>{{ title }}</span>
    {{ iconName }}
  </div>
</template>

<script>
export default {
  props: ["title", "icon"],
};
</script>

<style lang="scss" scoped>
.list-item {
  margin-bottom: $margin-tiny;

  .icon {
    display: inline-block;
    width: 20px;
    margin-right: $margin-tiny;
  }
}
</style>