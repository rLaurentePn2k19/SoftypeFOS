<template>
  <div>
    <v-navigation-drawer v-model="drawer" elevation="5" permanent app id="sidebar" width="200">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title text-center">Menu</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list nav dense>
        <v-divider></v-divider>
        <v-list-item
          active-class="blue darken-2 white--text text--accent-4"
          v-for="item in items"
          :key="item.title"
          :to="item.link"
          @click.stop="drawer = !drawer"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <!-- <v-list-item @click="logout()">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>-->
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click="logout()">
            <v-icon>mdi-logout</v-icon>
            <strong>Logout</strong>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>
<style scoped>
#sidebar {
  opacity: 0.8 !important;
}
</style>
<script>
// import ROUTER from "@/router";

export default {
  data() {
    return {
      items: [
        {
          title: "Dashboard",
          icon: "mdi-chart-bubble",
          link: "/dashboard"
        },
        {
          title: "Orders",
          icon: "mdi-history",
          link: "/orders"
        }
      ],
      drawer: false,
      group: null
    };
  },

  methods: {
    logout() {
      console.log("sd");
    }
  }
};
</script>