<template>
  <nav class="navbar">
    <div class="navbar-content">
      <div class="logo">
        <NuxtLink to="/"><img src="@/assets/img/logo/logo.png" /></NuxtLink>
      </div>
      <ul
        class="menu"
        @click="toggleMenu"
        :class="[showMenu ? 'overlay' : '']"
        v-if="isHome"
      >
        <li><a href="#accommodation">Unterkunft</a></li>
        <li><a href="#route">Anfahrt</a></li>
        <li><a href="#contact">Kontakt</a></li>
      </ul>
      <div
        v-if="isHome"
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
  props: ["isHome"],
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleMenu() {
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
      margin-left: $margin-big;
      img {
        width: 250px;
      }
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
    cursor: pointer;

    a {
      transition: all 0.3s;
      &:hover {
        color: $primary-font-color;
      }
    }
  }
}

@media only screen and (max-width: 900px) {
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
    background: rgba(0, 0, 0, 0.85);
    z-index: 3;
    color: #fff;
    min-width: 100%;
    min-height: 100%;
    position: fixed;
    top: 0;
    height: 0;
    text-align: center;
    padding-top: 100px;
    padding-left: 0px;
    transition: all 0.3s ease-in-out;

    a {
      color: #fff;
      display: block;
      font-size: $fs-large;
      margin-bottom: 30px;
      text-decoration: none;
    }
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