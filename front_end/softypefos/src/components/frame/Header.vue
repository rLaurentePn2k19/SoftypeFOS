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
      <v-toolbar-title
        style="font-style: italic; font-stretch: expanded;"
        id="test"
      >Softype Food Order System</v-toolbar-title>
    </div>

    <v-spacer v-for="n in 40" :key="n"></v-spacer>

    <v-btn
      v-on:click="home"
      target="_blank"
      text
      v-if="$route.name =='viands' || $route.name =='home' "
    >
      <v-icon>mdi-home</v-icon>
    </v-btn>
    <v-divider class="mx-1" inset vertical v-if="$route.name =='viands' || $route.name =='home' "></v-divider>
    <v-btn
      v-on:click="viewViands"
      target="_blank"
      text
      v-if="$route.name =='viands' || $route.name =='home' "
    >
      <v-icon>mdi-food-variant</v-icon>
    </v-btn>
    <v-divider class="mx-1" inset vertical v-if="$route.name =='viands' || $route.name =='home' "></v-divider>
    <AddViand></AddViand>
    <AdminLogin v-if="$route.name =='viands' || $route.name =='home' "></AdminLogin>
  </v-app-bar>
</template>


<style>
@media only screen and (max-width: 500px) {
  #test {
    font-size: 13px;
  }
  @media screen and (max-width: 400px) {
    #test {
      font-size: 10px;
    }
  }
}
</style>

<script>
import ROUTER from "@/router";
import AddViand from "@/components/modules/admin/AddViand.vue";
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
    AddViand
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
    }
  },
  mounted() {
    console.log(this.$vuetify.breakpoint.name);
  }
};
</script>