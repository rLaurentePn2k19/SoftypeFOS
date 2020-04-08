<template>
  <v-lazy
    v-model="isActive"
    :options="{
          threshold: .5
        }"
    min-height="300"
    transition="fade-transition"
  >
    <v-item-group multiple>
      <v-container>
        <v-row>
          <v-col v-for="food in foods" :key="food.title" cols="12" md="4">
            <v-item v-slot:default="{ active, toggle }">
              <v-card
                :color="active ? 'primary' : ''"
                class="d-flex align-center"
                dark
                height="200"
                @mouseenter="toggle"
              >
                <v-img
                  class="white--text align-end"
                  height="200px"
                  :src="food.image"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                >
                  <v-scroll-y-transition>
                    <div v-if="active" class="display-3 flex-grow-1 text-center">
                      <v-btn color="primary" medium @click="added">
                        {{textButton}}
                        <!-- <v-icon>mdi-check</v-icon> -->
                      </v-btn>
                      <v-form>
                        <v-text-field
                          label="Quantity"
                          name="quantity"
                          :prepend-icon="'mdi-plus'"
                          type="number"
                          class="test"
                          value="1"
                          outlined
                        />
                      </v-form>
                    </div>
                  </v-scroll-y-transition>
                  <v-card-title>{{food.title}}</v-card-title>
                </v-img>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
        <Order/>
      </v-container>
    </v-item-group>
  </v-lazy>
</template>

<style scoped>
.test {
  width: 135px !important;
  position: absolute !important;
  right: 0 !important;
  margin-right: 10px;
}
</style>

<script>
import Order from "@/components/modules/user/Order.vue";

export default {
  data() {
    return {
      textButton: "Add",
      foods: [
        {
          title: "Tinolang Manok",
          image: require("@/assets/tinolangmanok.jpg")
        },
        { title: "Adobong Manok", image: require("@/assets/adobongmanok.jpg") },
        { title: "Pork Chop", image: require("@/assets/porkchop.jpg") },
        { title: "Ampalaya w/ egg", image: require("@/assets/ampalaya.jpg") },
        { title: "Monggos", image: require("@/assets/monggos.jpg") },
        { title: "Lumpia", image: require("@/assets/lumpia.jpg") }
      ],
      isActive: false
    };
  },
  components: {
    Order
  },
  // beforeMount(){
  //   alert("this is beforeMount");
  // },
  // mounted(){
  //   alert("mounted");
  // },

  // beforeDestroy(){
  //   alert("beforeDestroy")
  // },
  methods: {
    added() {
      this.textButton = "Added";
    }
  }
};
</script>

