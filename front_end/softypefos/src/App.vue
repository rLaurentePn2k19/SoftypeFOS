<template>
  <v-app>
    <Header v-on:showSideNavEvent="showSideNav"></Header>
    <Sidebar v-if="$route.name =='dashboard' && isNav || $route.name =='orders' && isNav "></Sidebar>
    <v-content>
      <Body></Body>
    </v-content>
  </v-app>
</template>

<style>
</style>

<script>
import Sidebar from "@/components/frame/Sidebar.vue";
import Header from "./components/frame/Header.vue";
import Body from "./components/frame/Body.vue";

export default {
  name: "App",
  data() {
    return {
      show: true
    };
  },
  components: {
    Header,
    Body,
    Sidebar
  },
  methods: {
    showSideNav(e) {
      this.show = e;
    }
  },
  computed: {
    isNav() {
      return this.show;
    }
  }
};
</script>
