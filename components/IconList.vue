<template>
  <div class="icon-list">
      <ListItem v-for="item in items" :key="item.name" :title='item.name' :icon='item.icon'/>
  </div>
</template>

<script>
export default {
  props: ['items'],
};
</script>

<style lang="scss" scoped>
  .icon-list {
    display: flex;
    flex-direction: column;
    height: 100%;
    flex-wrap: wrap;
  }
</style>