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
      <h1 class="text-center" style="font-style: italic; margin-top: 2%;">Available Viands</h1>
      <v-container>
        <v-row>
          <v-col v-for="viand in Viands" :key="viand.id" cols="12" md="4">
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
                  :src="viand.viand_image[0]"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                >
                  <v-scroll-y-transition>
                    <div v-if="active" class="display-3 flex-grow-1 text-center">
                      <v-btn
                        color="primary"
                        medium
                        @click="addViand(viand.id)"
                      >{{viand.selected ? added : add }}</v-btn>
                      <v-form>
                        <v-text-field
                          label="Quantity"
                          name="quantity"
                          :prepend-icon="'mdi-plus'"
                          type="number"
                          class="test"
                          v-model="viand.viand_qty"
                          @change="changeQuantity(viand.id)"
                          outlined
                        />
                      </v-form>
                    </div>
                  </v-scroll-y-transition>
                  <v-card-title>{{viand.viand_name}}</v-card-title>
                </v-img>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
        <Order :Orders="viandsToOrder"></Order>
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
// import axios from "axios";
import Order from "@/components/modules/user/Order.vue";

export default {
  data() {
    return {
      viandsToOrder: [],
      viands: [],
      isActive: false,
      added: "Added",
      add: "Add"
    };
  },
  components: {
    Order
  },
  computed: {
    Viands(){
      return this.$store.getters.getViands
    }
  },
  mounted() {
     this.$bus.$on("viands", viands => {
      console.log(viands);
    });
    this.$bus.$on("cancel-order", cancel => {
      console.log(cancel);
      this.viandsToOrder = [];
    });
    this.$bus.$on("done-order", done => {
      this.viandsToOrder = [];
      for (let i = 0; i < this.viands.length; i++) {
        this.viands[i].selected = !done;
      }
    });
  },
  methods: {
    changeQuantity(id) {
      this.viandsToOrder.forEach(order => {
        if (order._id == id) {
          order.quantity = order.qty;
        }
      });
    },
    addViand(id) {
      this.viands.filter(viand => {
        if (viand.id == id) {
          if (viand.selected == true) {
            this.$swal.fire({
              icon: "warning",
              title: `${viand.viand_name} is already added.`
            });
          } else {
            this.viandsToOrder.push(viand);
            viand.selected = true;
          }
        }
      });
      console.log(this.viandsToOrder, " order viands");
    }
  }
};
</script>

