<template>
  <footer>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1900 100"
    >
      <path
        id="Pfad_3-2"
        d="M0,0 S112,17,378,17,748,0,1066,0 s371,17,584,17 S1920,0,1920,0 V100 H0Z"
        transform="translate(0 0)"
        fill="#1ebd92"
      />
    </svg>
    <div class="footer-content">
      <div>Pension Mustermann</div>
      <div>Musterweg 0815</div>
      <div>0815 Musterhausen</div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "NuxtTutorial",
};
</script>

<style lang="scss" scoped>
svg {
  width: 100%;
  //z-index: -1;
  -webkit-filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.13));
  filter: drop-shadow(0px 5px 60px rgba(0, 0, 0, 0.13));
}

footer {
  display: flex;
  flex-direction: column;
  background-color: $light-background-color;
}

.footer-content {
  margin-top: -2px;
  z-index: 1;
  background-color: $primary-color;
  height: 150px;
  color: white;
}
</style>