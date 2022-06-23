<template>
  <div>
    <span class="textarea-caption">{{ caption }}</span>
    <div class="textarea-container">
      <textarea
        :value="value"
        :type="type"
        :name="name"
        :placeholder="placeholder"
        :aria-placeholder="placeholder"
      />
      <span class="asterisk" v-if="isMandatory">*</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    caption: String,
    value: String,
    isMandatory: Boolean,
    type: String,
    name: String,
    placeholder: String,
  },
};
</script>

<style lang="scss" scoped>
.textarea-caption {
  font-size: $fs-tiny;
  font-weight: bold;
}

.textarea-container {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 0px;
  border-radius: 10px;
  border: solid 1px #eaeaea;
  background-color: white;
  padding: $margin-small;
  cursor: pointer;

  &:focus-within {
    box-shadow: inset 0 0 0 3px $primary-color-transparent;
  }

  .asterisk {
    align-self: right;
    margin-left: $margin-tiny;
  }

  .icon-button {
    margin: 0;
    font-size: $fs-tiny;
    border: none;
    background-color: white;
    cursor: pointer;
    border-radius: 50%;

    &:hover {
      background-color: $light-hover-color;
    }
  }

  textarea {
    font-size: $fs-normal;
    flex-grow: 1;
    text-align: left;
    border: none;
    background-color: white;
    resize: none;
    height: 150px;
    &:focus {
      outline: none;
    }
  }
}
</style>