<template>
  <v-container fluid>
    <br>
    <div class="text-center">
      <h1 style="font-style: italic;">Orders</h1>
      <div class="align-end"></div>
    </div>

    <v-data-iterator :items="orders" :orders-per-page.sync="length_list" hide-default-footer>
      <template v-slot:default="props">
        <v-row>
          <v-col v-for="order in props.items" :key="order.id" cols="12" sm="6" md="4" lg="3">
            <v-card>
              <v-card-title class="subheading font-weight-bold">
                {{`${order.name}`}}
                <v-spacer></v-spacer>
                <v-btn fab small color="success" @click="check">
                  <v-icon>mdi-check</v-icon>
                </v-btn>
              </v-card-title>

              <v-divider></v-divider>

              <v-list dense v-for="viand in order.viands" :key="viand.id">
                <v-list-item>
                  <v-list-item-content>{{viand.viand_name}}</v-list-item-content>
                  <v-list-item-content class="align-end">{{ viand.viand_qty}}</v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    orders: [],
  }),
  computed: {
    length_list() {
      return this.orders.length;
    }
  },
  mounted() {
    axios
      .get("http://localhost:4000/order/retrieveOrders")
      .then(res => {
        for (let i = 0; i < res.data.data.length; i++) {
          this.orders.push(res.data.data[i]);
        }
        console.table(this.orders);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    check() {
      const order_done = console.table(this.items);
      return order_done;
    }
  }
};
</script>