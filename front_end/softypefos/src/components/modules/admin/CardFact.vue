<template>
  <div>
    <v-card>
      <v-card-title class="subheading font-weight-bold">
        {{factDetails.title}}
        <v-spacer></v-spacer>
        <v-btn fab small text color="warning" @click="editFact(factDetails)">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
        <v-divider inset vertical></v-divider>
        <v-btn fab text small color="error" @click="deleteFact(factDetails._id)">
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-card-title>
      <v-divider></v-divider>
      <v-list>
        <v-list-item>
          <v-list-item-content>:{{factDetails.detail}}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
    <EditFact :key="factDetails._id" :factToEdit="factDetails"/>
  </div>
</template>


<script>

import _FuncFact from "./services/helper";
import EditFact from "@/components/modules/admin/EditFact.vue";

export default {
  name: "card",
  props: {
    factDetails: {
      type: Object
    }
  },
  components: {
    EditFact
  },
  data() {
    return {};
  },
  methods: {
    editFact(data) {
      //   this.$bus.$emit("editFact", data);
      this.$refs.modal.dialog = true;
      this.$refs.modal.factToEdit = data;
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

