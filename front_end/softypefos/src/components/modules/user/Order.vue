<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="350" scrollable>
      <v-card>
        <v-toolbar color="orange" dark flat>
          <v-toolbar-title>Order</v-toolbar-title>
          <v-spacer/>
        </v-toolbar>
        <br>
        <v-card-text>
          <v-form>
            <v-text-field
              label="Name"
              :prepend-icon="'mdi-account'"
              type="text"
              v-model="name"
              v-on:keyup.enter="order"
            />
          </v-form>
          <v-list flat>
            <v-subheader>Viand/s you order:</v-subheader>
            <v-list-item-group v-model="item">
              <v-list-item v-for="(order, i) in OrderList" :key="i._id">
                <v-list-item-icon>
                  <v-btn fab small color="error" text @click="removeViand(order._id)">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="order._name +' : '+ order._qty "></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" @click="cancelOrder">Cancel</v-btn>
          <v-btn color="primary" @click="sendOrder">Done</v-btn>
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

export default {
  name: "Order-Form",
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
      new_order: [],
      isDone: false
    };
  },
  computed: {
    OrderList() {
      // it will return the list of order or empty list base on the event sent
      return this.isDone ? [] : this.Orders;
    }
  },
  mounted() {
    this.$bus.$on("order-viand", bol => {
      if (this.Orders.length) {
        this.dialog = bol;
      } else {
        this.$swal.fire({
          icon: "warning",
          title: "Oops...",
          text: "You should choose viand/s first."
        });
      }
    });
  },
  methods: {
    cancelOrder(){
      this.dialog = false
      this.$bus.$emit("cancel-order", true)
    },
    removeViand(id) {
      // remove selected viand from the order list
      this.OrderList.forEach(viand => {
        if (id == viand._id) {
          this.OrderList.splice(viand, 1);
          console.log("removed", viand);
        }
      });
    },
    sendOrder() {
      // a method for sending the order to the back end
      this.Orders.forEach(order => {
        let order_obj = {
          viand_name: order._name,
          viand_qty: order._qty
        };
        this.new_order.push(order_obj);
      });
      console.log(this.new_order, "new order");
      const viand_order_obj = {
        name: this.name,
        orders: this.new_order
      };

      console.log(viand_order_obj, " object to back-end");

      if (this.name == "") {
        // if there is no name provided
        this.$swal.fire({
          icon: "warning",
          title: "Hey!",
          text: "Please indicate you nickname/name."
        });
      } else {
        this.$store.dispatch("SendOrder", viand_order_obj).then(res =>{
          setTimeout(() => (this.loading = false), 2000);
          setTimeout(() => (this.dialog = false), 500);
          this.name = "";
          this.isDone = true;
          this.$swal.fire("Yehey!", "Successfully order.", "success");
          this.$bus.$emit("done-order", this.isDone);
          console.log(res)
        }).catch(err =>{
          console.log(err)
        })
        // axios
        //   .post(`http://localhost:4000/order/addOrder`, viand_order_obj) // sending the object which is the order to the back end
        //   .then(res => {
        //     setTimeout(() => (this.loading = false), 2000);
        //     setTimeout(() => (this.dialog = false), 500);
        //     console.log(res.data, "response");
        //     this.isDone = true;
        //     this.name = "";
        //     this.$bus.$emit("done-order", this.isDone); // an event if done ordering
        //   })
        //   .catch(error => {
        //     console.error("error order", error);
        //   }),
        //   this.$swal.fire("Yehey!", "Successfully order.", "success");
      }
    }
  }
};
</script>
