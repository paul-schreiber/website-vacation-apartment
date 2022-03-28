<template>
  <footer>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1820 200"
      class="soft-shadow"
    >
      <path
        d="M 0,0 S 112,17, 378,17, 748,0, 1066,0 s 371,17, 584,17 S 1920,0, 1920,0 V100 H0Z"
        transform="translate(0 100)"
        fill="#1ebd92"
      />
    </svg>
    <div class="footer-content">
      <div>
        <div class="logo" id="contact">
          <a href="#"> <img src="@/assets/img/logo-white.png" /></a>
        </div>
        <address class="contact-data">
          <div>{{ name }}</div>
          <div>{{ address.street }} {{ address.streetNumber }}</div>
          <div>{{ address.zipCode }} {{ address.city }}</div>

          <div class="mt-b">
            <a class="contact-link" :href="telephoneLink">
              <fa-icon class="mr-s" icon="phone" />{{ telephone }}</a
            >
          </div>
          <div class="mt-s">
            <a class="contact-link" :href="mailLink">
              <fa-icon class="mr-s" icon="envelope" />{{ mail }}</a
            >
          </div>
        </address>
      </div>
    </div>
    <div class="sub-footer-content">
      <div>© {{ name }}</div>
      <div>Datenschutz</div>
      <div>Impressum</div>
      <div>
        Design by
        <a class="contact-link" href="https://github.com/paul-schreiber"
          >Paul Schreiber</a
        >
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  props: ["name", "address", "telephone", "mail"],
  computed: {
    telephoneLink() {
      return `tel:+${this.telephone}`;
    },
    mailLink() {
      return `mailto:${this.mail}`;
    },
  },
};
</script>

<style lang="scss" scoped>
svg {
  width: 100%;
}

.soft-shadow {
  //z-index: -1;
  -webkit-filter: drop-shadow(0px -20px 40px rgba(0, 0, 0, 0.15));
  filter: drop-shadow(0px -20px 40px rgba(0, 0, 0, 0.15));
}

footer {
  display: flex;
  flex-direction: column;
  background-color: $light-background-color;
}

.footer-content {
  padding: $margin-medium $margin-big;
  max-width: $max-width;
  margin-top: -2px;
  z-index: 1;
  background-color: $primary-color;
  height: 280px;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;

  .logo {
    margin-bottom: $margin-medium;
    img {
      width: 250px;
    }
  }

  .contact-data {
    font-style: normal;
  }
}

.sub-footer-content {
  padding: $margin-medium $margin-big;
  max-width: $max-width;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: $secondary-color;
  color: $light-background-color;
  font-size: $fs-small;
  font-weight: $fw-light;
}

a.contact-link {
  color: white;
}

.mt-b {
  margin-top: $margin-big;
}
.mt-s {
  margin-top: $margin-small;
}

.mr-s {
  margin-right: $margin-small;
}

@media only screen and (min-width: 800px) {
  .footer-content {
    padding: $margin-medium $margin-huge;
  }

  .sub-footer-content {
    padding: $margin-medium $margin-huge;
    flex-direction: row;
  }
}
</style>