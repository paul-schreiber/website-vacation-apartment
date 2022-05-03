<template>
  <div class="tabs-container">
    <header class="tabs-header">
      <nav>
        <button
          @click="setActiveTab(tab.name)"
          v-for="tab in tabs"
          :key="tab.name"
          class="tab"
          :class="{ active: tab.name == activeTabName }"
          :data-text="tab.name"
        >
          {{ tab.name }}
        </button>
      </nav>
    </header>
    <div class="tab-content">
      {{ currentContent }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["tabs"],
  data() {
    return {
      activeTabName: this.tabs[0].name,
    };
  },
  methods: {
    setActiveTab(tabName) {
      this.activeTabName = tabName;
    },
  },
  computed: {
    currentContent() {
      return this.tabs.find((tab) => tab.name == this.activeTabName).content;
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs-container {

    margin-bottom: $margin-big;

  .tabs-header {
      margin-bottom: $margin-medium;
    .tab {
      padding: $margin-small;
      font-size: $fs-normal;
      border: none;
      border-radius: 10px;
      color: $light-font-color;
      background: none;
      cursor: pointer;
      margin-right: $margin-small;
      display: inline-flex;
      flex-direction: column;

      &:hover {
        background-color: rgb(243, 243, 243);
      }

      &.active {
        background-color: $primary-color-transparent;
        color: $primary-color;
        font-weight: bold;
      }

      &::after {
        content: attr(data-text);
        height: 0;
        visibility: hidden;
        overflow: hidden;
        user-select: none;
        pointer-events: none;
        font-weight: bold;

        @media speech {
          display: none;
        }
      }
    }
  }
}
</style>