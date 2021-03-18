<template>
  <div class="home">
    <!-- <img
      alt="Vue logo"
      src="../assets/logo.png"
    >
    <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="p-20">
      <LeafletMap />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from "@/components/HelloWorld.vue";
import LeafletMap from "@/components/LeafletMap.vue";

export default {
  name: "Home",
  components: {
    LeafletMap,
  },
};
</script>
