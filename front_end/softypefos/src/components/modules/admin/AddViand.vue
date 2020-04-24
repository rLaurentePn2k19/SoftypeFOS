<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="350">
      <v-card :loading="loading" max-width="350px">
        <v-toolbar color="orange" dark flat>
          <v-toolbar-title v-if="$route.name =='dashboard'">Add a viand</v-toolbar-title>
          <v-toolbar-title v-if="$route.name =='facts'">Add a fact</v-toolbar-title>
          <v-spacer/>
        </v-toolbar>
        <br>
        <!-- This is for viand -->
        <v-card-text>
          <v-form v-if="$route.name =='dashboard'" ref="viand_form">
            <v-text-field
              label="Viand name"
              :prepend-icon="'mdi-food-variant'"
              v-model="viand.name"
              :rules="[viand.rules.required]"
              @click:append="show1 = !show1"
            />
            <v-file-input dense v-model="viand.imgs" label="Upload Image" accept="/*image"></v-file-input>
          </v-form>
          <!-- This is for facts -->
          <v-form v-if="$route.name =='facts'" ref="fact_form">
            <v-text-field
              label="Title of your fact."
              :prepend-icon="'mdi-food-variant'"
              v-model="facts.title"
              @click:append="show1 = !show1"
              :rules="[facts.rules.required]"
            />
            <v-textarea
              :prepend-icon="'mdi-pencil-box'"
              auto-grow
              filled
              v-model="facts.detail"
              label="Details"
              rows="1"
              :rules="[facts.rules.required, facts.rules.min]"
            ></v-textarea>
          </v-form>
        </v-card-text>
        <!-- This is for viand -->
        <v-card-actions v-if="$route.name =='dashboard'">
          <v-btn text @click="$refs.viand_form.reset()">Clear</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="error" @click="cancel">Cancel</v-btn>
          <v-btn color="success" @click="uploadViand">Done</v-btn>
        </v-card-actions>
        <!-- This is for facts -->
        <v-card-actions v-if="$route.name =='facts'">
          <v-btn text @click="$refs.fact_form.reset()">Clear</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="error" @click="cancel">Cancel</v-btn>
          <v-btn color="success" @click="addFact">Done</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script>
import axios from "axios";
import _FuncFact from "./services/helper";

export default {
  data() {
    return {
      dialog: false,
      show1: false,
      loading: false,
      formHasErrors: false,
      viand: {
        imgs: [],
        name: "",
        rules: {
          required: value => !!value || "Name of viand is required."
        }
      },
      facts: {
        title: "",
        detail: "",
        rules: {
          required: value => !!value || "This field is required.",
          min: value => value.length >= 50 || "Atleast one sentence"
        }
      }
    };
  },
  mounted() {
    this.$bus.$on("viand-form", vf => {
      this.dialog = vf;
    });
  },
  methods: {
    addFact() {
      if (this.facts.title == "" || this.facts.detail == "") {
        this.$swal.fire({
          title: "Please fill up the provided fields.",
          width: 500,
          padding: "3em",
          backdrop: `rgba(255,0,0,0.4)`
        });
      } else {
        const fact = {
          title: this.facts.title,
          detail: this.facts.detail
        };
        this.loading = true;
        _FuncFact
          .addFact(fact)
          .then(res => {
            setTimeout(() => (this.loading = false), 2000);
            console.log(res.data, "response");
            this.$swal.fire("Successfully added.", " ", "success");
            setTimeout(() => (this.dialog = false), 2000);
            this.$bus.$emit("new-fact", res.data);
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    cancel() {
      this.dialog = false;
      this.loading = false;
      this.viand.name = "";
      this.viand.imgs = [];
      this.facts.title = "";
      this.facts.detail = "";
    },
    uploadViand() {
      if (this.viand.name == "" || this.viand.imgs.name == null) {
        this.dialog = false;
        this.$swal.fire({
          title: "Please fill up the provided fields.",
          width: 500,
          padding: "3em",
          backdrop: `rgba(255,0,0,0.4)`
        });
      } else {
        this.loading = true;
        var _viand = {
          name: this.viand.name
        };
        let formData = new FormData();
        formData.append("img", this.viand.imgs);
        formData.append("viand", JSON.stringify(_viand));
        axios
          .post(`http://localhost:4000/admin/addViand`, formData)
          .then(res => {
            setTimeout(() => (this.loading = false), 2000);
            setTimeout(() => (this.dialog = false), 2000);
            console.log(res.data, "response");
            this.$swal.fire(
              `${this.viand.name} is successfully added.`,
              " ",
              "success"
            );
            this.$bus.$emit("update-viand-view", res.data);
            this.viand.name = null;
            this.viand.imgs = null;
          })
          .catch(error => {
            console.error("file upload failed", error);
          });
      }
    }
  }
};
</script>