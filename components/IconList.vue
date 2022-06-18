<template>
  <div>
      <ListItem v-for="item in items" :key="item.name" :title='item.name' :icon='item.icon'/>
  </div>
</template>

<script>
export default {
  props: ['items'],
};
</script>