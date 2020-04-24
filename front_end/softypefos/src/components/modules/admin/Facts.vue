<template>
  <v-container fluid>
    <br>
    <div class="text-center">
      <h1 style="font-style: italic;">Facts</h1>
      <div class="align-end"></div>
    </div>
    <v-data-iterator :items="facts" :facts-per-page.sync="length_list" hide-default-footer>
      <template v-slot:default="props">
        <v-row>
          <v-col v-for="fact in props.items" :key="fact.id" cols="12" sm="6" md="4" lg="3">
            <v-card>
              <v-card-title class="subheading font-weight-bold">
                <v-icon>mdi-lightbulb-outline</v-icon>
                {{`${fact.title}`}}
                <v-spacer></v-spacer>
                <v-btn fab small color="warning" @click="editFact">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
                <v-divider class="mx-1" inset vertical></v-divider>
                <v-btn fab small color="error" @click="deleteFact(fact._id)">
                  <v-icon>mdi-delete</v-icon>
                </v-btn>
              </v-card-title>
              <v-divider></v-divider>
              <v-list>
                <v-list-item>
                  <v-list-item-content>{{`${fact.detail}`}}</v-list-item-content>
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
import _FuncFact from "./services/helper";

export default {
  data: () => ({
    facts: []
  }),
  computed: {
    length_list() {
      return this.facts.length;
    }
  },
  mounted() {
    this.$bus.$on("new-fact", new_fact => {
      this.facts.push(new_fact);
    });
    this.$bus.$on("fact-remove", id => {
      this.facts = this.facts.filter(fact => {
        if (fact._id != id) {
          return fact;
        }
      });
    });
    axios
      .get("http://localhost:4000/admin/getFact")
      .then(res => {
        for (let i = 0; i < res.data.data.length; i++) {
          this.facts.push(res.data.data[i]);
        }
        console.table(this.facts);
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    editFact() {
      console.log("check");
    },
    deleteFact(id) {
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this fact!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, remove it!"
        })
        .then(result => {
          if (result.value) {
            _FuncFact
              .deleteFact(id)
              .then(res => {
                console.log(res);
                this.$bus.$emit("fact-remove", id);
                this.$swal.fire(
                  "Deleted!",
                  "Fact has been deleted.",
                  "success"
                );
              })
              .catch(err => {
                console.log(err);
              });
          }
        });
    }
  }
};
</script>