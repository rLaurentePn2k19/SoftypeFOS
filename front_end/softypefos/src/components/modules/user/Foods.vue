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
          <v-col v-for="food in foods" :key="food._id" cols="12" md="4">
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
                      <v-btn
                        color="primary"
                        medium
                        @click="added(food._id)"
                      >{{food.selected ? "Added" : "Add" }}</v-btn>
                      <v-form>
                        <v-text-field
                          label="Quantity"
                          name="quantity"
                          :prepend-icon="'mdi-plus'"
                          type="number"
                          class="test"
                          v-model="food.qty"
                          @change="test(food._id)"
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
        <Order :Orders="order_foods"></Order>
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
      food_qty: 1,
      order_foods: [],
      foods: [
        {
          _id: 1,
          qty: 1,
          selected: false,
          title: "Tinolang Manok",
          image: require("@/assets/tinolangmanok.jpg")
        },
        {
          _id: 2,
          qty: 1,
          selected: false,
          title: "Adobong Manok",
          image: require("@/assets/adobongmanok.jpg")
        },
        {
          _id: 3,
          qty: 1,
          selected: false,
          title: "Pork Chop",
          image: require("@/assets/porkchop.jpg")
        },
        {
          _id: 4,
          qty: 1,
          selected: false,
          title: "Ampalaya w/ egg",
          image: require("@/assets/ampalaya.jpg")
        },
        {
          _id: 5,
          qty: 1,
          selected: false,
          title: "Monggos",
          image: require("@/assets/monggos.jpg")
        },
        {
          _id: 6,
          qty: 1,
          selected: false,
          title: "Lumpia",
          image: require("@/assets/lumpia.jpg")
        }
      ],
      isActive: false
    };
  },
  components: {
    Order
  },
  watch: {
    foods() {
      return this.foods;
    }
  },
  methods: {
    added(id) {
      this.foods.filter(food => {
        if (food._id == id) {
          food.selected = true;
          food.quantity = food.qty
          this.order_foods.push(food)
          food.qty = 1
          console.table(this.order_foods)
        }
      });
      console.log(this.foods);
    },
    test(id){
      this.order_foods.forEach(order => {
        if(order._id == id){
          order.quantity = order.qty
        }
      });
    }
  }
};
</script>

