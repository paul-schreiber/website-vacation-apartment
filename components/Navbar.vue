<template>
  <nav class="menu">
    <div class="logo">Pension Mustermann</div>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Unterkunft</a></li>
      <li><a href="#">Anfahrt</a></li>
      <li><a href="#">Kontakt</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "NuxtTutorial",
};
</script>

<style lang="scss" scoped>
.menu {
  display: flex;
  justify-content: space-between;
  padding: 30px 0px;
  width: 100%;
  background-color: $light-background-color;

  .logo {
    width: 200px;
  }

  ul {
    margin: 0px;
    list-style: none;
    font-size: $fs-medium;

    li {
      display: inline;
      margin-left: $margin-large;

      &:last-of-type {
        margin-right: $margin-large;
      }
      a {
        color: $secondary-font-color;
      }
    }
  }

  a {
    text-decoration: none;
  }
}
</style>