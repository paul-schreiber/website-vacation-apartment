<template>
  <div class="main">
    <div class="welcome-section lb">
      <div class="section-content lp">
        <div class="intro-container">
          <h1>Schön dich zu sehen!</h1>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet.
          </p>
          <PrimaryButton caption="Buchen" />
        </div>
        <img width="300px" src="@/static/img/photo-stack.png" />
      </div>
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1920 100"
      class="soft-shadow"
    >
      <path
        id="round-bottom"
        d="M 0,0 S626-64,1106-64,1920,27,1920,27 H0 Z"
        transform="translate(1920 26.5) rotate(180)"
        fill="#fafafa"
      />
    </svg>
    <div class="lp"><h2>Unterkunft</h2></div>
    <div class="lb">
      <div class="lp">
        <h2>So kommst du zu uns</h2>
        <p>
          Unsere Pension in Zschepa mit 2 Zimmern für 1-2 Personen sowie einer
          Ferienwohnung bis zu 4 Personen liegt direkt am Elberadweg zwischen
          Riesa und Mühlberg.
        </p>
        <Map />
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss" scoped>
svg {
  width: 100%;
  z-index: -1;
}
.soft-shadow {
  -webkit-filter: drop-shadow(3px 3px 2px rgba(0, 0, 0, 0.13));
  filter: drop-shadow(0px 5px 60px rgba(0, 0, 0, 0.13));
  /* Similar syntax to box-shadow */
}
.main {
  background-color: $dark-background-color;
  width: 100%;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */

  h1 {
    font-size: $fs-huge;
  }

  p {
    color: $secondary-font-color;
  }

  .welcome-section {
    position: relative;
    z-index: 1;

    .section-content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
}

.lp {
  padding: $margin-medium $margin-large;
  min-height: 480px;
  max-width: $max-width;
  margin: auto;
}

.lb {
  background-color: $light-background-color;
}

@media only screen and (min-width: 900px) {
  .intro-container {
    width: 45%;
  }

  img {
    margin-left: $margin-large;
    min-width: 40%;
    height: auto;
  }

  .lp {
    padding: $margin-large $margin-huge;
  }
}
</style>