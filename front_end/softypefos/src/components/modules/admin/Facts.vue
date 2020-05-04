<template>
  <v-container fluid>
    <br>
    <div class="text-center">
      <h1 style="font-style: italic;">
        <v-icon medium>mdi-lightbulb-outline</v-icon>Facts
      </h1>
      <div class="align-end"></div>
    </div>
    <v-row>
      <v-col v-for="fact in facts_list" :key="fact._id" cols="12" sm="6" md="4" lg="3">
        <CardFact :factDetails="fact" :key="fact.__v"/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import CardFact from "@/components/modules/admin/CardFact.vue";

export default {
  data: () => ({
    facts: []
  }),
  components: { CardFact },
  computed: {
    facts_list() {
      return this.facts;
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
    this.$bus.$on("updated-fact", updated_fact => {
      // console.log(updated_fact, "updated ");
      console.log("updated! at id : ", updated_fact);
      for (let i = 0; i < this.facts.length; i++) {
        if (this.facts[i]._id == updated_fact._id) {
          this.facts[i] = updated_fact;
          break;
        }
      }
      console.log(this.facts);
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
  }
  // methods: {
  //   editFact(data) {
  //     this.$bus.$emit("editFact", data);
  //   },
  //   deleteFact(id) {
  //     this.$swal
  //       .fire({
  //         title: "Are you sure?",
  //         text: "You won't be able to revert this fact!",
  //         icon: "warning",
  //         showCancelButton: true,
  //         confirmButtonColor: "#3085d6",
  //         cancelButtonColor: "#d33",
  //         confirmButtonText: "Yes, remove it!"
  //       })
  //       .then(result => {
  //         if (result.value) {
  //           _FuncFact
  //             .deleteFact(id)
  //             .then(res => {
  //               console.log(res);
  //               this.$bus.$emit("fact-remove", id);
  //               this.$swal.fire(
  //                 "Deleted!",
  //                 "Fact has been deleted.",
  //                 "success"
  //               );
  //             })
  //             .catch(err => {
  //               console.log(err);
  //             });
  //         }
  //       });
  //   }
  // }
};
</script>