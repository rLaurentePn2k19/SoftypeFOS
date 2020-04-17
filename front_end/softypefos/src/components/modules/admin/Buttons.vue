<template>
  <div id="create">
    <v-speed-dial
      v-model="fab"
      :top="top"
      :bottom="bottom"
      :right="right"
      :left="left"
      :direction="direction"
      :open-on-hover="hover"
      :transition="transition"
    >
      <template v-slot:activator>
        <v-btn v-model="fab" dark text>
          <v-icon v-if="fab">mdi-close</v-icon>
          <v-icon v-else>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <AddFood ></AddFood>
      <v-btn color="warning" fab small>
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <v-btn color="error" fab small>
        <v-icon>mdi-delete</v-icon>
      </v-btn>
    </v-speed-dial>
  </div>
</template>

<style>
/* This is for documentation purposes and will not be needed in your application */
#create .v-speed-dial {
  position: absolute !important;
}
</style>

<script>
// import ROUTER from "@/router";
import AddFood from "@/components/modules/admin/AddFood.vue";
export default {
  components: {
    AddFood
  },
  data: () => ({
    direction: "bottom",
    fab: false,
    fling: false,
    hover: false,
    tabs: null,
    top: true,
    right: true,
    bottom: false,
    left: false,
    transition: "slide-y-reverse-transition"
  }),

  computed: {
    activeFab() {
      switch (this.tabs) {
        case "one":
          return { class: "purple", icon: "mdi-check" };
        case "two":
          return { class: "red", icon: "mdi-check" };
        case "three":
          return { class: "green", icon: "mdi-check" };
        default:
          return {};
      }
    }
  },

  watch: {
    top(val) {
      this.bottom = !val;
    },
    right(val) {
      this.left = !val;
    },
    bottom(val) {
      this.top = !val;
    },
    left(val) {
      this.right = !val;
    }
  },
  methods: {
    updateDashboard(viand) {
      this.$emit("uploaded-viand", viand);
    }
  }
};
</script>