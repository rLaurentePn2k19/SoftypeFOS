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

      <span style="font-style: italic; font-stretch: expanded;">Softype Food Order System</span>

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
      v-if="$route.name =='foods' || $route.name =='home' "
    >
      <span class="mr-2">Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-divider class="mx-4" inset vertical v-if="$route.name =='foods' || $route.name =='home' "></v-divider>
    <v-btn
      v-on:click="signin"
      target="_blank"
      text
      v-if="$route.name =='foods' || $route.name =='home' "
    >
      <span class="mr-2">Foods</span>
      <v-icon>mdi-food-variant</v-icon>
    </v-btn>
    <v-divider class="mx-4" inset vertical v-if="$route.name =='foods' || $route.name =='home' "></v-divider>
    <Buttons v-if="$route.name =='dashboard' || $route.name =='orders'" @uploaded-viand="updateDashboard"></Buttons>
    <AdminLogin v-else></AdminLogin>
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
    signin() {
      ROUTER.push("/foods");
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
  }
};
</script>