<template>
  <div class="tabs-container">
    <header class="tabs-header">
      <nav>
        <button
          @click="setActiveTab(tab)"
          v-for="tab in tabs"
          :key="tab"
          class="tab"
          :class="{ active: tab == activeTabName }"
          :data-text="tab"
        >
          {{ tab }}
        </button>
      </nav>
    </header>
    <div class="tab-content">
      <slot :name="this.activeTabName"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tabs"],
  data() {
    return {
      activeTabName: this.tabs[0],
    };
  },
  methods: {
    setActiveTab(tabName) {
      this.activeTabName = tabName;
    },
  },
};
</script>

<style lang="scss" scoped>
.tabs-container {
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
        background-color: $light-hover-color;
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
  .tab-content {
    padding-left: $margin-small;
    height: 90px;
  }
}
</style>