<template>
  <div class="detail-container">
    <header>
      <h2>Ferienwohnung {{ accom.name }}</h2>
      <div class="tile-icon">
        <img height="30" :src="iconPath" :alt="accom.icon" />
      </div>
    </header>
    <div class="content">
      <section>
          <Tabs :tabs="tabs" />
      </section>
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
  data () {
      return {
          tabs: [
              {
                  name: 'Zimmer',
                  content: 'TEST1'
              },
              {
                  name: 'Ausstattung',
                  content: 'TEST2'
              },
              {
                  name: 'Gallerie',
                  content: 'TEST3'
              }
          ]
      }
  },
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