<template>
  <li class="areaCard cards__item">
    <h2>
      <span v-if="id">({{id}}) </span>{{region.name}}
    </h2>
    <p>pron: /<small>{{region.pron}}</small>/</p>
    <h3 v-if="region.midnightOnly">0048 Only</h3>
    <p>{{region.desc}}</p>
  </li>
</template>

<script>
export default {
  name: 'area-card',
  props: [
    'region',
    'id',
  ],
};
</script>

<style scoped>
.areaCard {
  background: #eff0f1;
}

h2 {
  margin-left: 5px;
  margin-right: 5px;
}
</style>
