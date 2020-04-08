<template>
<div id="app">
  <v-app>
  <Header></Header>
    <v-content>
      <!-- <Sidebar v-if="$route.name =='dashboard' " ></Sidebar> -->
      <Body></Body>
    </v-content>
  </v-app>
  </div>
</template>

<style>

</style>

<script>
// import HelloWorld from './components/HelloWorld';
// import Sidebar from "@/components/frame/Sidebar.vue";

import Header from './components/frame/Header.vue';
import Body from './components/frame/Body.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Header,
    Body,
    // Sidebar
  }
};
</script>
