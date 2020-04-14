<template>
  <v-app>
    <br>
    <div class="text-center">
      <h1 style="font-style: italic;">Viands</h1>
    </div>
      <v-item-group>
        <v-container>
          <v-row>
            <v-col v-for="food in foods" :key="food.name" cols="12" md="4">
              <v-item>
                <MyFood :foodDetails="food" ></MyFood>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
  </v-app>
</template>

<script>
// import AddFood from "@/components/modules/admin/AddFood.vue";
import MyFood from "@/components/modules/admin/MyFoods.vue";

export default {
  data() {
    return {
      foods: [
        // { image: require("@/assets/adobongmanok.jpg"), name: "Kari-kari" },
        // { image: require("@/assets/adobongmanok.jpg"), name: "test" },
        // { image: require("@/assets/adobongmanok.jpg"), name: "1" },
        // { image: require("@/assets/adobongmanok.jpg"), name: "2" },
        // { image: require("@/assets/adobongmanok.jpg"), name: "asd" },
        // { image: require("@/assets/adobongmanok.jpg"), name: "fgh" },
      ]
    };
  },
  components: {
    MyFood
    // AddFood
  },
  methods: {
    // updateViand(viand){
    //   this.foods.push(viand)
    // }
  }
};
</script>