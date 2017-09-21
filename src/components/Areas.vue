<template>
  <div class="areas">
    <h1>Explore the Areas</h1>
    <anchor-icon width="50px" height="50px" stroke="red"></anchor-icon>
    <area-map></area-map>
    <div class="areas__item regions">
      <h2>{{areas['seaRegions'].title}}</h2>
      <div class="areas__item--intro" v-html="areas['seaRegions'].intro"></div>
      <ul class="cards-container">
        <area-card v-for="(region, index) in areas['seaRegions'].names" :key="index" :region="region" :id="index + 1"></area-card>
      </ul>
    </div>
    <div class="areas__item stations">
      <h2>{{areas['coastalStations'].title}}</h2>
      <div class="areas__item--intro" v-html="areas['coastalStations'].intro"></div>
      <ul class="cards-container">
        <area-card v-for="(station, index) in areas['coastalStations'].names" :key="index" :region="station" :id="index + 1"></area-card>
      </ul>
    </div>
    <div class="areas__item inshore">
      <h2>{{areas['inshoreWaters'].title}}</h2>
      <div class="areas__item--intro" v-html="areas['inshoreWaters'].intro"></div>
      <ul class="cards-container inshore">
        <area-card v-for="(inshore, index) in areas['inshoreWaters'].names" :key="index" :region="inshore" :id="index + 1"></area-card>
      </ul>
    </div>
  </div>
</template>

<script>
import AreaCard from '@/components/AreaCard';
import AreaMap from '@/components/AreaMap';
import { AnchorIcon } from 'vue-feather-icons';

import areasList from '../data/areasList';

export default {
  name: 'areas',
  data() {
    return {
      areas: areasList,
    };
  },
  components: {
    AreaCard,
    AreaMap,
    AnchorIcon,
  },
};
</script>

<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.areas__item {
  margin-top: 85px;

  @media (max-width: 400px) {
    margin-top: 60px;
  }

  &--intro {
    text-align: center;
    max-width: 800px;
    margin: 50px auto;

    @media (max-width: 400px) {
      margin: 25px auto;
    }
  }
}

.cards-container {
  display: inline-block;
}

.cards__item {
  display: inline-block;
  vertical-align: top;
  width: 200px;
  margin: 20px 20px;
}

@supports (display: flex) {
  .cards-container {
    display: flex;
    flex-wrap: row;
    justify-content: space-around;
    margin: -1em 0 1em -0.5em;
  }

  .cards__item {
    padding: 1em 0 0 0.5em;
    flex: 1 0 20em;
    max-width: 20em;
    width: auto;
  }
}

@supports (display: grid) {
  .cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 20px;
    grid-auto-rows: minmax(auto, 300px);
  }

  .cards__item {
    padding: initial;
    max-width: none;
  }
}
</style>
