<template>
  <v-container fluid>
    <br>
    <div class="text-center">
      <h1 style="font-style: italic;">Orders</h1>
    </div>
    <v-data-iterator :items="items" :items-per-page.sync="length_list" hide-default-footer>
      <template v-slot:default="props">
        <v-row>
          <v-col v-for="item in props.items" :key="item.name" cols="12" sm="6" md="4" lg="3">
            <v-card>
              <v-card-title class="subheading font-weight-bold">
                {{ item.name }}
                <v-spacer></v-spacer>
                <v-btn fab small color="success" @click="check">
                  <v-icon>mdi-check</v-icon>
                </v-btn>
              </v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item>
                  <v-list-item-content>Calories:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.calories }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Fat:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.fat }}</v-list-item-content>
                </v-list-item>

                <v-list-item>
                  <v-list-item-content>Carbs:</v-list-item-content>
                  <v-list-item-content class="align-end">{{ item.carbs }}</v-list-item-content>
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
export default {
  data: () => ({
    // itemsPerPage: 0,
    items: [
      {
        name: "Rangie",
        calories: 159,
        fat: 6.0,
        carbs: 24
      },
      {
        name: "Kel",
        calories: 237,
        fat: 9.0,
        carbs: 37
      },
      {
        name: "Care",
        calories: 262,
        fat: 16.0,
        carbs: 23
      },
      {
        name: "Jean",
        calories: 305,
        fat: 3.7,
        carbs: 67
      }
    ]
  }),
  computed: {
    length_list() {
      return this.items.length;
    }
  },
  methods:{
    check(){
      const order_done = console.table(this.items)
      return order_done;
    }
  }
};
</script>