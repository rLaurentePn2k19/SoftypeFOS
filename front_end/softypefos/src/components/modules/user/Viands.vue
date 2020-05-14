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
          <v-col v-for="viand in viands_To_Display" :key="viand.id" cols="12" md="4">
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
                        @click="addToCart(viand.id)"
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
        <Order :Orders="viands_To_Order"></Order>
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
import { mapState } from "vuex";

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
    ...mapState(["viands_To_Display", "viands_To_Order"])
  },
  mounted() {
    this.$store
      .dispatch("GetUploadedViands")
      .then(res => {
        console.log(res)
        this.$store.commit("setViands", res);
      })
      .catch(err => {
        console.log(err);
      });
    console.log(this.viands_To_Display);
    // this.$bus.$on("viands", viands => {
    //   console.log(viands);
    // });
    // this.$bus.$on("cancel-order", cancel => {
    //   console.log(cancel);
    //   this.viandsToOrder = [];
    // });
    // this.$bus.$on("done-order", done => {
    //   this.viandsToOrder = [];
    //   for (let i = 0; i < this.viands.length; i++) {
    //     this.viands[i].selected = !done;
    //   }
    // });
  },
  methods: {
    changeQuantity(id) {
      this.viands_To_Order.forEach(order => {
        if (order._id == id) {
          order.quantity = order.qty;
        }
      });
    },
    addToCart(id) {
      this.viands_To_Display.filter(viand => {
        if (viand.id == id) {
          if (viand.selected == true) {
            this.$swal.fire({
              icon: "warning",
              title: `${viand.viand_name} is already added.`
            });
          } else {
            // this.viandsToOrder.push(viand);
            this.$store.commit("setOrders",viand)
            viand.selected = true;
          }
        }
      });
      console.log(this.viands_To_Order, " order viands");
    }
  }
};
</script>

