<template>
  <nav class="navbar">
    <div class="navbar-content">
      <div class="logo">
        <a href="#"> <img width="230" src="@/static/img/logo.png" /></a>
      </div>
      <ul class="menu" :class="[showMenu ? 'overlay' : '']">
        <li><a href="#">Home</a></li>
        <li><a href="#">Unterkunft</a></li>
        <li><a href="#">Anfahrt</a></li>
        <li><a href="#">Kontakt</a></li>
      </ul>
      <div
        class="burger-menu"
        @click="toggleMenu"
        :class="[showMenu ? 'close' : '']"
      >
        <span></span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
      console.log("skdhf");
      this.showMenu = !this.showMenu;
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  background-color: $light-background-color;

  .navbar-content {
    max-width: $max-width;
    margin: auto;
    display: flex;
    justify-content: space-between;
    padding: 30px 0px;

    .logo {
      width: 230px;
      margin-left: $margin-medium;
    }
  }

  a {
    text-decoration: none;
  }
}

.menu {
  display: none;

  li {
    list-style: none;
  }
}

.burger-menu {
  width: 20px;
  height: 20px;
  cursor: pointer;
  overflow: visible;
  z-index: 4;
  margin-right: 27px;
}
.burger-menu span,
.burger-menu span:before,
.burger-menu span:after {
  background: $light-font-color;
  display: block;
  height: 3px;
  border-radius: 20px;
  opacity: 1;
  position: relative;
  transition: 0.3s ease-in-out;
}
.burger-menu span:before,
.burger-menu span:after {
  content: "";
}
.burger-menu span {
  right: 0px;
  top: 10px;
  width: 27px;
}
.burger-menu span:before {
  left: 0px;
  top: -10px;
  width: 27px;
}
.burger-menu span:after {
  left: 0px;
  top: 8px;
  width: 27px;
}

.burger-menu.close span,
.burger-menu.close span:before,
.burger-menu.close span:after {
  background: white;
}

.burger-menu.close span {
  transform: rotate(-45deg);
  top: 13px;
  width: 27px;
}
.burger-menu.close span:before {
  top: 0px;
  transform: rotate(90deg);
  width: 27px;
}
.burger-menu.close span:after {
  top: 0px;
  left: 0;
  transform: rotate(90deg);
  opacity: 0;
  width: 0;
}
.menu.overlay {
  display: block;
  margin: 0;
  padding-top: 100px;
  background: rgba(0, 0, 0, 0.85);
  z-index: 3;
  color: #fff;
  min-width: 100%;
  min-height: 100%;
  position: fixed;
  top: 0;
  height: 0;
  text-align: center;
  padding-top: 20px;
  transition: all 0.3s ease-in-out;

  a {
    color: #fff;
    display: block;
    font-size: $fs-large;
    margin-bottom: 30px;
    text-decoration: none;
  }
}

@media only screen and (min-width: 900px) {
  .burger-menu {
    display: none;
  }

  .menu {
    display: block;
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
        color: $light-font-color;
      }
    }
  }
}
</style>