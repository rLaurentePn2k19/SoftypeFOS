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
          <v-col v-for="viand in viands" :key="viand.id" cols="12" md="4">
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
                      >{{viand.selected ? "Added" : "Add" }}</v-btn>
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
        <Order :Orders="order_viands" @done-order="doneOrder"></Order>
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
import axios from "axios";
import Order from "@/components/modules/user/Order.vue";

export default {
  data() {
    return {
      order_viands: [],
      viands: [],
      isActive: false
    };
  },
  components: {
    Order
  },
  watch: {
    foods() {
      return this.viands;
    }
  },
  methods: {
    doneOrder(bol){
      console.log(bol)
    },
    changeQuantity(id) {
      this.order_viands.forEach(order => {
        if (order._id == id) {
          order.quantity = order.qty;
        }
      });
    },
    addViand(id) {
      this.viands.filter(viand => {
        if (viand.id == id) {
          viand.selected = true;
          this.order_viands.push(viand);
        }
      });
      console.log(this.order_viands, " order viands")
    }
  },
  mounted() {
    axios
      .get("http://localhost:4000/admin/retrieveViands")
      .then(res => {
        res.data.forEach(element => {
          let new_viand = {
            id: element._id,
            selected: false,
            viand_qty: 1,
            viand_image: element.image,
            viand_name: element.name
          };
          this.viands.push(new_viand);
        });
        console.log(this.viands, "new list");
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

