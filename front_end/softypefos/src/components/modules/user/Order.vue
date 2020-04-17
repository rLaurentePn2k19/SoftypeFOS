<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="350" scrollable>
      <template v-slot:activator="{ on }">
        <v-layout row wrap justify-end>
          <v-flex shrink>
            <v-btn id="orderBtn" color="success" dark v-on="on">
              Order
              <v-icon>mdi-cart-outline</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </template>
      <v-card>
        <v-toolbar color="orange" dark flat>
          <v-toolbar-title>Order</v-toolbar-title>
          <v-spacer/>
        </v-toolbar>
        <br>
        <v-card-text>
          <v-form>
            <v-text-field label="Name" :prepend-icon="'mdi-account'" type="text" v-model="name"/>
          </v-form>
          <v-list flat>
            <v-subheader>Viand/s you order:</v-subheader>
            <v-list-item-group v-model="item">
              <v-list-item v-for="(order, i) in Orders" :key="i">
                <v-list-item-icon>
                  <v-icon color="success">mdi-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="order.viand_name +' : '+ order.viand_qty "></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" @click="dialog = false">Cancel</v-btn>
          <v-btn color="primary" @click="order">Done</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>


<style>
#orderBtn {
  margin-right: 25px !important;
}
</style>


<script>
import axios from "axios";
export default {
  props: {
    Orders: {
      type: Array
    }
  },
  data() {
    return {
      loading: false,
      dialog: false,
      name: "",
      item: 1,
      new_order: []
    };
  },
  // computed:{
  //   EmptyOrders(){
  //     return 
  //   }
  // },
  methods: {
    order() {
      this.Orders.forEach(order => {
        let order_obj = {
          viand_name: order.viand_name,
          viand_qty: order.viand_qty
        };
        this.new_order.push(order_obj);
      });

      const obj = {
        name: this.name,
        orders: this.new_order
      };
      // var order_obj = JSON.stringify(obj);
      console.log(obj, "obj");

      const food_order =
        this.name == ""
          ? ((this.dialog = true),
            this.$swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Please fill in the provided fields."
            }))
          : ((this.dialog = false),
            axios
              .post(`http://localhost:4000/order/addOrder`, obj)
              .then(res => {
                setTimeout(() => (this.loading = false), 2000);
                setTimeout(() => (this.dialog = false), 500);
                console.log(res.data, "response");
                this.name = ""
                this.Orders = []
                this.$emit("done-order", true)
              })
              .catch(error => {
                console.error("file upload failed", error);
              }),
            this.$swal.fire("Yehey!", "Successfully order.", "success"));
      return food_order;
    }
  }
};
</script>
