<template>
  <div >
    <v-navigation-drawer v-model="drawer" elevation="5" permanent app :width="width">
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
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block @click="logout">
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
import ROUTER from "@/router";

export default {
  data() {
    return {
      window: {
        width: 0,
        height: 0
      },
      loading: true,
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
        },
        {
          title: "Facts",
          icon: "mdi-share",
          link: "/facts"
        },
      ],
      drawer: false,
      group: null
    };
  },
  computed: {
    width() {
      if (this.window.width < 500) {
        return "160";
      } else {
        return "200";
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
    logout() {
      this.$swal.fire("You are now logged out.", " ", "success");
      ROUTER.push("/home");
    }
  }
};
</script>