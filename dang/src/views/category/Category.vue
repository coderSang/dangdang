<template>
  <div id="container" style="height: 300px">
    <baidu-map style="height: 300px" class="map" :center="center" :zoom="zoom" @ready="handler" ></baidu-map>
  </div>
</template>

<script>
  export default {
    name: "Category",
    data() {
      return {
        center: {lng: 120.12, lat: 30.16},
        zoom: 16,
      }
    },
    methods: {
      handler({BMap, map}) {
        map.enableScrollWheelZoom(true);
        window.map = map;
        window.MyBdMap = BMap
      }
    }
  }
</script>

<style scoped>

</style>