<template>
  <div v-if="$route.name =='dashboard' ">
    <transition-group>
      <router-view :key="0"></router-view>
    </transition-group>
  </div>
  <div v-else>
    <transition-group>
      <router-view :key="0"></router-view>
    </transition-group>
  </div>
</template>

 <!--<div>
    <div v-if="auth.user !== null">
      <Sidebar></Sidebar>
      <transition>
        <router-view></router-view>
      </transition>
    </div>
    <div v-else>
      <transition>
        <router-view></router-view>
      </transition>
    </div>
  </div>
-->
<style>
</style>

<script>
// import Login from '@/components/modules/Login.vue';
// import Sidebar from "@/components/frame/Sidebar.vue";
export default {
  name: "appbody",
  components: {
    // Login
    // Sidebar
  }
};
</script>
