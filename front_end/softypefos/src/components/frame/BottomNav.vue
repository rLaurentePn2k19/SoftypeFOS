<template>
  <v-bottom-navigation :value="activeBtn" grow color="orange" permanent app>
    <v-btn @click="showOrderList" v-if="$route.name == 'viands' ">
      <span>Order</span>
      <v-icon>mdi-cart</v-icon>
    </v-btn>
    <v-btn v-if="$route.name =='dashboard' || $route.name =='orders'" @click="goDashboard">
      <span>Dashboard</span>
      <v-icon>mdi-view-dashboard</v-icon>
    </v-btn>
    <v-btn v-if="$route.name =='dashboard' || $route.name =='orders'" @click="goOrders">
      <span>Orders</span>
      <v-icon>mdi-history</v-icon>
    </v-btn>
    <v-btn v-if="$route.name =='dashboard' || $route.name =='orders'" @click="goLogout">
      <span>Logout</span>
      <v-icon>mdi-logout</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import ROUTER from "@/router";

export default {
  data() {
    return {
      activeBtn: 1
    };
  },
  methods: {
    showOrderList() {
      this.$bus.$emit("order-viand", true);
    },
    goLogout() {
      this.$swal.fire("You are now logged out.", " ", "success");
      ROUTER.push("/home");
    },
    goDashboard() {
      ROUTER.push("/dashboard");
    },
    goOrders() {
      ROUTER.push("/orders");
    }
  }
};
</script>