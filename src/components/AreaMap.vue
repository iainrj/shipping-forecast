<template>
  <div class="blend-wrapper">
    <h2>Map showing the areas of the Shipping Forecast</h2>
    <div class="background">
      <div class="foreground">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'area-map',
};
</script>

<style lang="scss" scoped>
.blend-wrapper {
  max-width: 1000px;
  margin: 0 auto;
}

.background {
  margin: 0 auto;
  width: 800px;
  height: 400px;
  background-image: url('https://upload.wikimedia.org/wikipedia/commons/7/75/UK_shipping_forecast_zones.png');
}

.foreground {
  content: "";
  position: absolute;
  height: 100px;
  width: 600px;
  transform: translate(250px, 200px);
  background-color: red;
  opacity: 0.75;
}

@supports (mix-blend-mode: multiply) {
  .foreground {
    opacity: 1;
    mix-blend-mode: multiply;
  }
}
</style>
