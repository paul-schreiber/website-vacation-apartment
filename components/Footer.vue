<template>
  <footer>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1820 100"
    >
      <path
        id="Pfad_3-2"
        d="M0,0 S112,17,378,17,748,0,1066,0 s371,17,584,17 S1920,0,1920,0 V100 H0Z"
        transform="translate(0 0)"
        fill="#1ebd92"
      />
    </svg>
    <div class="footer-content">
      <div>
      <div class="logo">
        <a href="#"> <img src="@/assets/img/logo-white.png" /></a>
      </div>
      <address class="contact-data">
        <div>{{ name }}</div>
        <div>{{ address.street }} {{ address.streetNumber }}</div>
        <div>{{ address.zipCode }} {{ address.city }}</div>

        <div class="mt-m">
          Telefon:
          <a class="contact-link" :href="telephoneLink">{{ telephone }}</a>
        </div>
        <div>
          Mail: <a class="contact-link" :href="mailLink">{{ mail }}</a>
        </div>
      </address>
      </div>
    </div>
    <div class="sub-footer-content">
      <div>© Pension Mustermann</div>
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
  padding: $margin-medium $margin-big;
  max-width: $max-width;
  margin-top: -2px;
  z-index: 1;
  background-color: $primary-color;
  height: 250px;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: column;

  .logo {
    margin-bottom: $margin-medium;
    img {
      width: 220px;
    }
  }

  .contact-data {
  }
}

.sub-footer-content {
  padding: $margin-medium $margin-big;
  max-width: $max-width;
  display: flex;
  justify-content: space-between;
  background-color: $secondary-color;
  color: $light-background-color;
  font-size: $fs-small;
  font-weight: $fw-light;
}

a.contact-link {
  color: white;
}

.mt-m {
  margin-top: $margin-medium;
}

@media only screen and (min-width: 800px) {
  .footer-content {
    padding: $margin-medium $margin-huge;
  }

  .sub-footer-content {
    padding: $margin-medium $margin-huge;
  }
}
</style>