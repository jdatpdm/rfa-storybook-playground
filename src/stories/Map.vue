<template>
  <div style="height:500px">
    <l-map
      style="height: 500px"
      :zoom="zoom"
      :center="center"
      :options="{attributionControl:false}"
      @dblclick="centerUpdate"
    >
      <l-tile-layer :url="url"></l-tile-layer>
      <l-control class="p-3 m-2 bg-white border rounded shadow-lg ">
        <div
          class="flex items-center justify-between pb-2 "
          @click="openFilterModel"
        >
          <div class="flex items-center font-semibold text-gray-600"><svg
              class="w-6 h-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
              />
            </svg>Filter</div>
          <div v-if="showFilters">
            <svg
              class="w-6 h-6 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
        <div
          class="w-64 pt-3 my-3 border-t "
          v-if="showFilters"
        >
          <div class="flex flex-col">
            <label
              class="text-left"
              for="lng"
            >Lng</label>

            <input
              class="w-full h-8 pl-3 mt-1 border rounded"
              type="text"
              id="lng"
              name="lng"
              v-model="circle.center.lng"
            >
          </div>
          <div class="flex flex-col my-2">
            <label
              class="mb-1 text-left"
              for="lat"
            >Lat</label>
            <input
              class="w-full h-8 pl-3 mt-1 border rounded"
              type="text"
              id="lat"
              name="lat"
              v-model="circle.center.lat"
            >

          </div>
          <div class="flex flex-col">
            <label
              class="mb-1 text-left"
              for="radius"
            >Radius</label>

            <input
              type="range"
              id="radius"
              name="radius"
              min="0"
              max="50000"
              v-model="circle.radius"
              step="10"
            >
          </div>
          <div class="my-3">
            <button class="px-2 py-1 text-sm text-white bg-red-600 rounded">Search companies</button>
          </div>
        </div>
      </l-control>
      <l-circle
        :lat-lng="circle.center"
        :radius="circle.radius"
        :color="circle.color"
        :fill-color="circle.color"
        :fil-opacity="0.2"
      />
    </l-map>
    <div>
      <button @click.prevent="showHistory = !showHistory">Show (lat / lng)</button>
    </div>
    <div
      v-if="showHistory"
      class="my-10"
    >
      <h3 class="font-semibold">Lat Lng History to query API</h3>
      <p
        v-for="history in rollingLatLng"
        :key="history"
      >{{history}}</p>
    </div>
  </div>
</template>

<script>
import { latLng } from "leaflet";

import { LMap, LTileLayer, LCircle, LControl } from "vue2-leaflet";

export default {
  name: "LeafMap",
  components: {
    LMap,
    LTileLayer,
    LCircle,
    LControl,
  },
  data() {
    return {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      zoom: 9,
      showHistory: false,
      rollingLatLng: [],
      center: [53.55, -2.4333],
      circle: {
        center: latLng(53.55, -2.4333),
        radius: 4500,
        color: "red",
      },
      showFilters: false,
    };
  },
  methods: {
    openFilterModel() {
      this.showFilters = !this.showFilters;
    },
    updateFilters() {},
    updateCenterOfRadius(ev) {
      this.circle.center[0] = ev.latlng.lat;
      this.circle.center[1] = ev.latlng.lng;
    },
    centerUpdate(center) {
      this.rollingLatLng.push(center.latlng);
      this.circle.center = center.latlng;
      this.zoom = 9;
    },
  },
};
</script>

<style>
</style>