<template>
  <div>
    <Navbar />
    <Main :accommodations="content.accommodations" :texts="content.texts" />
    <Footer />
  </div>
</template>

<script>
import content from "../content";
export default {
  name: "IndexPage",
  data() {
    return {
      content: content,
    };
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
}

html {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */
  -moz-box-sizing: border-box; /* Firefox, other Gecko */
  box-sizing: border-box; /* Opera/IE 8+ */
  color: $primary-font-color
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
</style>
