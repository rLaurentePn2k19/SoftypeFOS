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
              <MyFood :foodDetails="food" @uploaded-viand="updateDashboard"></MyFood>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </v-app>
</template>

<script>
import MyFood from "@/components/modules/admin/MyFoods.vue";
import axios from "axios";

export default {
  data() {
    return {
      foods: []
    };
  },
  mounted() {
    axios
      .get("http://localhost:4000/admin/retrieveViands")
      .then(res => {
        this.foods = [];
        console.log(res.data, "mounted dashboard");
        for (var i = 0; i < res.data.length; i++) {
          this.foods.push(res.data[i]);
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  components: {
    MyFood
  },
  methods: {
    updateDashboard(viand) {
      console.log(viand, "viand dashboard");
      this.foods.push(viand);
      console.table(this.foods);
    }
  }
};
</script>