<template>
  <v-app>
    <Header v-on:showSideNavEvent="showSideNav"></Header>
    <Sidebar
      v-if="(!width && $route.name =='dashboard' && isNav )|| ( !width && $route.name =='orders' && isNav)"
    ></Sidebar>
    <!-- <Sidebar v-if="$route.name =='dashboard' && isNav || $route.name =='orders' && isNav" ></Sidebar> -->
    <v-content>
      <Body></Body>
    </v-content>
    <BotNav v-if="$route.name =='viands' || width "></BotNav>
  </v-app>
</template>

<style>
</style>

<script>
import Sidebar from "@/components/frame/Sidebar.vue";
import BotNav from "@/components/frame/BottomNav.vue";
import Header from "./components/frame/Header.vue";
import Body from "./components/frame/Body.vue";

export default {
  name: "App",
  data() {
    return {
      show: true,
      isLess: false,
      window: {
        width: 0,
        height: 0
      }
    };
  },
  components: {
    Header,
    Body,
    Sidebar,
    BotNav
  },
  computed: {
    isNav() {
      return this.show;
    },
    width() {
      if (this.window.width < 420) {
        this.$bus.$emit("mobile-view", true);
        return true;
      } else {
        this.$bus.$emit("desktop-view", true);
        return false;
      }
    }
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    showSideNav(e) {
      this.show = e;
    }
  }
};
</script>
