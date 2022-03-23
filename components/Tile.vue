<template>
  <div class="tile">
    <header>
      <div class="tile-title">Titel</div>
      <div class="tile-icon">X</div>
    </header>
    <div class="tile-content">
      <div class="tile-details">
        <ul>
          <li>1x Wohnzimmer</li>
          <li>1x Schlafzimmer</li>
          <li>1x Küche</li>
          <li>1x Badezimmer</li>
        </ul>
      </div>
    </div>
    <footer>
      <div class="tile-price">ab 40€/Nacht</div>
      <PrimaryButton caption="Details" />
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.tile {
  width: 350px;
  height: 200px;
  padding: $margin-medium;
  background-color: $light-background-color;
  border-radius: 20px;
  box-shadow: $soft-shadow;

  header {
    display: flex;
    justify-content: space-between;

    .tile-title {
      font-weight: 600;
      font-size: $fs-big;
    }
  }

  .tile-content {
    padding-left: $margin-medium;

    .tile-details {
      ul {
        padding: 0px;
        li {
          list-style: none;
        }
      }
    }
  }

  footer {
    display: flex;
    justify-content: space-between;
    padding-left: $margin-medium;

    .tile-price {
      font-size: $fs-medium;
      font-weight: 600;
    }
  }
}
</style>