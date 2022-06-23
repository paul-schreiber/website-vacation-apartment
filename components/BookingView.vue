<template>
  <div>
    <form>
      <section class="form-section">
        <InputWithCaption
          caption="Deine E-Mail"
          name="email"
          type="email"
          placeholder="Wie können wir dich erreichen?"
          isMandatory
        />
      </section>
      <section class="form-section">
        <TextareaWithCaption
          caption="Sonstige Anmerkungen"
          name="email"
          type="email"
          placeholder="Hast du uns noch was zu sagen?"
          :isMandatory="false"
        />
      </section>
      <div class="action-bar">
        <ActionButton
          caption="zurück"
          :onClick="navToPlanning"
          type="secondary"
        />
        <ActionButton caption="Anfragen" :onClick="sendMail" />
      </div>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    navToPlanning: Function,
    sendMail: Function,
  },
  data() {
    return {
      email: "",
      additionalNotes: "Notes",
    };
  },
  methods: {
    submitForm() {
      checkForm();
    },
    checkForm() {},
  },
};
</script>

<style lang="scss" scoped>
.form-section {
  margin-bottom: $margin-medium;
}
</style>