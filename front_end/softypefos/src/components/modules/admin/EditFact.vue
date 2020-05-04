<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="350">
      <!-- <template v-slot:activator="{ on }">
        <v-btn fab text small color="warning" v-on="on" style="margin-left: 10%">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </template> -->
      <v-card max-width="350px">
        <v-toolbar color="orange" dark flat>
          <v-toolbar-title>Edit fact</v-toolbar-title>
          <v-spacer/>
        </v-toolbar>
        <br>
        <v-card-text>
          <v-form ref="fact_form">
            <v-text-field
              label="Edit title"
              :prepend-icon="'mdi-food-variant'"
              v-model="newFact.title"
            />
            <v-textarea
              :prepend-icon="'mdi-pencil-box'"
              auto-grow
              filled
              label="Edit details"
              rows="1"
              v-model="newFact.detail"
            ></v-textarea>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn text @click="$refs.fact_form.reset()">Clear</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="error" @click="cancel">Cancel</v-btn>
          <v-btn color="success" @click="submit">Done</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import _FuncFact from "./services/helper";

export default {
  props: {
    factToEdit: {
      type: Object
    }
  },
  data() {
    return {
      dialog: false,
      newFact: {
        id: "",
        title: "",
        detail: ""
      }
    };
  },
  watch: {
    newFact() {
      return this.newFact;
    }
  },
  mounted() {
    Object.assign(this.newFact, this.factToEdit);
  },
  methods: {
    cancel() {
      this.dialog = false;
      this.loading = false;
    },
    submit() {
      if (this.newFact.title == "" || this.newFact.detail == "") {
        this.$swal.fire("Invalid changes", "Please try again", "error");
      } else {
        _FuncFact
          .editFact(this.newFact)
          .then(res => {
            this.$bus.$emit("updated-fact", res.data);
            this.$swal.fire("Successfully updated", " ", "success");
            console.log(res.data, "response");
            this.dialog = false;
            // setTimeout(() => location.reload(), 1000);
          })
          .catch(err => {
            console.log(err);
          });
      }
    }
  }
};
</script>