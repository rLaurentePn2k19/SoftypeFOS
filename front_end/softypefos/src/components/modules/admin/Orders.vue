<template>
  <v-container fluid>
    <br>
    <div class="text-center">
      <h1 style="font-style: italic;">Orders</h1>
    </div>
    <v-data-iterator :items="testList" :items-per-page.sync="length_list" hide-default-footer>
      <template v-slot:default="props">
        <v-row>
          <v-col v-for="order in props.items" :key="order.id" cols="12" sm="6" md="4" lg="3">
            <v-card>
              <v-card-title class="subheading font-weight-bold">
                {{ order.name }}
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
    // itemsPerPage: 0,
    // items: [
    //   {
    //     name: "Rangie",
    //     calories: 159,
    //     fat: 6.0,
    //     carbs: 24
    //   },
    //   {
    //     name: "Kel",
    //     calories: 237,
    //     fat: 9.0,
    //     carbs: 37
    //   },
    //   {
    //     name: "Care",
    //     calories: 262,
    //     fat: 16.0,
    //     carbs: 23
    //   },
    //   {
    //     name: "Jean",
    //     calories: 305,
    //     fat: 3.7,
    //     carbs: 67
    //   }
    // ],
    testList: []
  }),
  computed: {
    length_list() {
      return this.testList.length;
    }
  },
  mounted() {
    axios
      .get("http://localhost:4000/order/retrieveOrders")
      .then(res => {
        for (let i = 0; i < res.data.data.length; i++) {
          this.testList.push(res.data.data[i]);
        }
        console.table(this.testList);
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