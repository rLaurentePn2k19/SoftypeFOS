<template>
  <!-- <Sidebar v-if="$route.name =='dashboard' "></Sidebar> -->
  <transition-group>
    <router-view :key="0"></router-view>
  </transition-group>
</template>

<style>
</style>

<script>
// import Sidebar from "@/components/frame/Sidebar.vue";
export default {
  name: "appbody",
  components: {
    // Sidebar
  },
  computed: {
    // cols() {
    //   const { lg, sm } = this.$vuetify.breakpoint;
    //   return lg ? [2, 9] : sm ? [9, 3] : [6, 6];
    // }
  }
};
</script>
