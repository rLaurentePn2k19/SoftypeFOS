<template>
  <v-app>
    <Header v-on:testAction="testNav"></Header>
    <Sidebar v-if="$route.name =='dashboard' && isNav || $route.name =='orders' && isNav "></Sidebar>
    <v-content>
      <Body></Body>
    </v-content>
  </v-app>
</template>

<style>
</style>

<script>
// import HelloWorld from './components/HelloWorld';
import Sidebar from "@/components/frame/Sidebar.vue";
import Header from "./components/frame/Header.vue";
import Body from "./components/frame/Body.vue";

export default {
  name: "App",
  data(){
    return{
      testVar: true
    }
  },
  components: {
    // HelloWorld,
    Header,
    Body,
    Sidebar
  },
  methods:{
    testNav(e){
      this.testVar = e;
    }
  },
  computed:{
    isNav(){
      return this.testVar;
    } 
  }
};
</script>
