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
        <!-- <v-card-title class="headline">Use Google's location service?</v-card-title>  -->
        <br>
        <v-card-text>
          <v-form>
            <v-text-field
              label="Nickname"
              name="username"
              :prepend-icon="'mdi-account'"
              type="text"
              v-model="nickname"
            />
          </v-form>
          <v-list flat>
            <v-subheader>Viand/s you order:</v-subheader>
            <v-list-item-group v-model="item">
              <v-list-item v-for="(item, i) in items" :key="i">
                <v-list-item-icon>
                  <v-icon v-text="item.icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                  <v-list-item-title v-text="item.text +' : '+ item.quantity "></v-list-item-title>
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
export default {
  data() {
    return {
      dialog: false,
      nickname: "",
      item: 1,
      items: [
        { text: "Adobo", quantity: "1", icon: "mdi-check" },
        { text: "Lumpia", quantity: "2", icon: "mdi-check" },
        { text: "Ampalaya", quantity: "3", icon: "mdi-check" }
      ]
    };
  },
  methods: {
    order() {
      const food_order =
        this.nickname == ""
          ? ((this.dialog = true),
            this.$swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Please fill in the provided fields."
            }))
          : ((this.dialog = false),
            this.$swal.fire("Yehey!", "Successfully order.", "success"));
      return food_order;
    }
  }
};
</script>
