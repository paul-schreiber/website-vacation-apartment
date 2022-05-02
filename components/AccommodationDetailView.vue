<template>
  <div class="detail-container">
    <header>
      <h2>{{ accom.name }}</h2>
      <div class="tile-icon">
        <img height="30" :src="iconPath" :alt="icon" />
      </div>
    </header>
    <div class="content">
      <section></section>
      <section>
        <h3>Reisedaten:</h3>
      </section>
      <section>
        <h3>Preis:</h3>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  props: ["accom"],
  computed: {
    iconPath() {
      if (!this.accom.icon) {
        return;
      }
      return require(`@/assets/img/${this.accom.icon}.png`);
    },
  },
};
</script>

<style lang="scss" scoped>
h2,
h3 {
  margin-top: 0px;
  margin-bottom: $margin-big;
}

.detail-container {
    header {
        display: flex;
        justify-content: space-between;
    }
}
</style>