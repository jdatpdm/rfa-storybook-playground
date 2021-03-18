<template>
  <div>
    <AzureMap
      :center="[-73.97, 40.78]"
      :zoom="12"
    >
      <AzureMapDataSource>
        <AzureMapPolygon :coordinates="coordinates" />
        <AzureMapPolygonLayer :options="targetPolygonLayerOptions" />
      </AzureMapDataSource>
    </AzureMap>
  </div>
</template>

<script>
import {
  AzureMap,
  AzureMapDataSource,
  AzureMapPolygon,
  AzureMapPolygonLayer,
} from "vue-azure-maps";

export default {
  name: "Map",
  components: {
    AzureMap,
    AzureMapDataSource,
    AzureMapPolygon,
    AzureMapPolygonLayer,
  },

  data() {
    return {
      coordinates: [
        [
          [-73.98235, 40.76799],
          [-73.95785, 40.80044],
          [-73.94928, 40.7968],
          [-73.97317, 40.76437],
          [-73.98235, 40.76799],
        ],
      ],
      targetPolygonLayerOptions: {
        fillColor: "red",
        visible: true,
        fillPatern: "24",
        type: "Circle",
        radius: 1000,
      },
    };
  },
};
</script>

<style>
</style>