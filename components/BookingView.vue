<template>
  <div>
    <form novalidate onsubmit="return false">
      <section class="form-section">
        <UserInputWithCaption caption="Dein Name" isMandatory>
          <input
            v-model="userName"
            aria-placeholder="Wie heißt du?"
            placeholder="Wie heißt du?"
            name="name"
            type="text"
            @focus="mailError = false"
          />
        </UserInputWithCaption>
      </section>
      <section class="form-section">
        <UserInputWithCaption
          caption="Deine E-Mail"
          isMandatory
          :hasError="mailError"
        >
          <input
            v-model="email"
            aria-placeholder="Wie können wir dich erreichen?"
            placeholder="Wie können wir dich erreichen?"
            name="email"
            type="email"
            @focus="mailError = false"
          />
        </UserInputWithCaption>
      </section>
      <section class="form-section">
        <UserInputWithCaption
          caption="Sonstige Anmerkungen"
          :isMandatory="false"
        >
          <textarea
            v-model="additionalNotes"
            aria-placeholder="Willst du uns noch etwas mitteilen?"
            placeholder="Willst du uns noch etwas mitteilen?"
            name="additionalNotes"
          />
        </UserInputWithCaption>
      </section>
      <section class="form-section captcha-container">
        <VueFriendlyCaptcha
          :sitekey="siteKey"
          @done="isHuman = true"
          language="de"
        />
      </section>
      <div class="action-bar">
        <ActionButton
          caption="zurück"
          :onClick="navToPlanning"
          type="secondary"
        />
        <ActionButton
          caption="Anfragen"
          :onClick="submitForm"
          :disabled="!formIsFilled"
        />
      </div>
    </form>
  </div>
</template>

<script>
import VueFriendlyCaptcha from "@somushq/vue-friendly-captcha";

export default {
  components: {
    VueFriendlyCaptcha,
  },
  props: {
    navToPlanning: Function,
    sendMail: Function,
  },
  data() {
    return {
      userName: "",
      email: "",
      additionalNotes: "",
      siteKey: process.env.friendlyCaptchaKey,
      isHuman: false,
      mailError: false,
    };
  },
  computed: {
    formIsFilled() {
      return this.email != "" && this.isHuman;
    },
    isMailInputValid() {
      return this.email && this.validateMail(this.email);
    },
  },
  methods: {
    sanitiseText(value) {
      return value.replace("<", "&lt;").replace(">", "&gt;");
    },
    validateMail(mail) {
      const mailRegEx =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return mailRegEx.test(mail);
    },
    submitForm() {
      if (this.checkForm()) {
        this.sendMail(this.userName, this.email, this.sanitiseText(this.additionalNotes));
      }
    },
    checkForm() {
      if (this.isHuman && this.isMailInputValid) {
        return true;
      } else {
        this.mailError = true;
        return false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.form-section {
  margin-bottom: $margin-medium;
}

.captcha-container {
  display: flex;
  justify-content: flex-end;
  margin-bottom: $margin-small;
}

.action-bar {
  display: flex;
  justify-content: space-between;
}

//Override captcha styles (scoped)
.frc-captcha {
  justify-self: right;
  background-color: transparent;
  opacity: 0.75;
  border: none;
  width: fit-content;
  padding-bottom: 0px;
}
</style>

<style lang="scss">
//Override captcha styles (global)
.frc-banner {
  display: none;
}

.frc-container {
  min-height: 0px !important;
}
.frc-icon {
  margin: 0 !important;
  width: 20px;
  height: 20px;
}

.frc-button {
  display: none;
}
</style> 