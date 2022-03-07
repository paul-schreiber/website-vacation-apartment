<template>
  <div class="main">
  <div class="welcome-section lp lb"><h1>Schön dich zu sehen</h1></div>
  <div class="lp"><h2>Unterkunft</h2></div>
  <div class="lp lb"><h2>So kommst du zu uns</h2></div>
  </div>
</template>

<script>
export default {
  name: "NuxtTutorial",
};
</script>

<style lang="scss" scoped>
.main {
  background-color: $dark-background-color;

  h1 {
    font-size: $fs-huge;
  }
}

.lp {
  padding: $margin-large $margin-huge;
  height: 400px;
}

.lb {
  background-color: $light-background-color;
}
</style>