<template>
  <v-app>
    <br>
    <div class="text-center">
      <h1 style="font-style: italic;">Viands</h1>
    </div>
    <v-item-group v-if="progress">
      <v-container>
        <v-row>
          <v-col v-for="viand in viands" :key="viand.id" cols="12" md="4">
            <v-item>
              <MyViands :viandDetails="viand"></MyViands>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
    <Progress v-else/>
  </v-app>
  
</template>

<script>
import MyViands from "@/components/modules/admin/MyViands.vue";
import axios from "axios";
import Progress from "@/components/frame/Progress.vue";

export default {
  data() {
    return {
      viands: [],
      progress: false
    };
  },
  mounted() {
    this.$bus.$on("update-viand-view", uploaded_viand => {
      console.log(uploaded_viand);
      this.viands.push(uploaded_viand);
    });
    this.$bus.$on("viand-remove", id => {
      this.viands = this.viands.filter(viand => {
        if (viand._id != id) {
          return viand;
        }
      });
    });
    axios
      .get("http://localhost:4000/admin/retrieveViands")
      .then(res => {
        setTimeout(() => {
          // this.viands = [];
          this.progress = true;
        }, 1500);
        for (var i = 0; i < res.data.length; i++) {
            this.viands.push(res.data[i]);
          }
      })
      .catch(err => {
        console.log(err);
      });
  },
  components: {
    MyViands,
    Progress
  },
  watch: {
    viands() {
      return this.viands;
    }
  }
};
</script>