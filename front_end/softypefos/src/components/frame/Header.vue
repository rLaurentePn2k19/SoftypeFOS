<template>
  <v-app-bar app color="orange" dark>
    <v-app-bar-nav-icon
      v-if="$route.name =='dashboard' || $route.name =='orders' "
      @click="showNav"
      v-show="!hide"
    ></v-app-bar-nav-icon>
    <v-btn
      v-if="$route.name =='dashboard' || $route.name =='orders' "
      text
      fab
      small
      v-show="hide"
      @click="showNav"
    >
      <v-icon>mdi-arrow-left-bold</v-icon>
    </v-btn>

    <div class="d-flex align-center">
      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        :src="require('@/assets/logo2.png')"
        transition="scale-transition"
        width="40"
      />

      <span
        style="font-style: italic; font-stretch: expanded;"
        id="brandname"
      >Softype Food Order System</span>

      <!--
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      -->
    </div>

    <v-spacer v-for="n in 10" :key="n"></v-spacer>
    <!-- <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>-->

    <v-btn
      v-on:click="home"
      target="_blank"
      text
      v-if="$route.name =='viands' || $route.name =='home' "
    >
      <span class="mr-2">Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-divider class="mx-4" inset vertical v-if="$route.name =='viands' || $route.name =='home' "></v-divider>
    <v-btn
      v-on:click="viewViands"
      target="_blank"
      text
      v-if="$route.name =='viands' || $route.name =='home' "
    >
      <span class="mr-2">Viands</span>
      <v-icon>mdi-food-variant</v-icon>
    </v-btn>
    <v-divider class="mx-4" inset vertical v-if="$route.name =='viands' || $route.name =='home' "></v-divider>
    <Buttons v-show="$route.name == 'dashboard'"></Buttons>
    <AdminLogin v-if="$route.name =='viands' || $route.name =='home' "></AdminLogin>
  </v-app-bar>
</template>

<script>
import ROUTER from "@/router";
import Buttons from "@/components/modules/admin/Buttons.vue";
import AdminLogin from "@/components/modules/admin/Login.vue";

export default {
  name: "test",
  data() {
    return {
      hide: true
    };
  },
  components: {
    AdminLogin,
    Buttons
  },
  methods: {
    viewViands() {
      ROUTER.push("/viands");
    },
    home() {
      ROUTER.push("/home");
    },
    showNav() {
      this.hide = !this.hide;
      this.$emit("showSideNavEvent", this.hide);
    },
    updateDashboard(viand) {
      this.$emit("uploaded-viand", viand);
    }
  },
  mounted() {
    console.log(this.$vuetify.breakpoint);
  }
};
</script>