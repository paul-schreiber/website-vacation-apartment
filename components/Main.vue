<template>
  <div class="main">
    <div class="welcome-section lp lb"><h1>Schön dich zu sehen</h1></div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1920 100"
    >
      <path
        id="round-bottom"
        d="M 0,0 S626-64,1106-64,1920,27,1920,27 H0 Z"
        transform="translate(1920 27) rotate(180)"
        fill="#fafafa"
      />
    </svg>
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
svg {
  width: 100%;
}
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