<template>
  <div>
    <Navbar :isHome="true" />
    <Popover :isVisible="!content.isActive" :toggleMenu="goBack">
      <h2>Wir sind leider vorübergehend geschlossen.</h2>
      Tut uns leid, wir vermieten aktuell leider keine Zimmer. 😕
    </Popover>
    <Main
      :accommodations="content.accommodations"
      :texts="content.texts"
      :mapLinks="content.mapLinks"
    />
    <Footer
      :name="content.name"
      :address="content.address"
      :telephone="content.telephone"
      :mail="content.mail"
    />
  </div>
</template>

<script>
import content from "../content";
export default {
  data() {
    return {
      content: content,
    };
  },
  head() {
    return {
      title: content.name,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: "description",
          name: "description",
          content: `${content.name}`,
        },
      ],
    };
  },
  methods: {
    goBack() {
      window.history.back()
    },
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  background-color: $light-background-color;
}

html {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
  color: $primary-font-color;
  scroll-behavior: smooth;
  touch-action: manipulation;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
</style>
