<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="350">
      <template v-slot:activator="{ on }">
        <v-btn fab color="indigo" class="mx-2" dark v-on="on" small>
          <v-icon dark>mdi-plus</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-toolbar color="orange" dark flat>
          <v-toolbar-title>Add a viand</v-toolbar-title>
          <v-spacer/>
        </v-toolbar>
        <!-- <v-card-title class="headline">Use Google's location service?</v-card-title> -->
        <br>
        <v-card-text>
          <v-form>
            <v-text-field
              label="Viand name"
              name="viand"
              :prepend-icon="'mdi-food-variant'"
              type="text"
              v-model="viand.name"
              :rules="[rules.required]"
              @click:append="show1 = !show1"
            />
            <v-btn class="file_button" @click.prevent="$refs.uploader.click()">
              <v-icon>mdi-camera</v-icon>Click to upload
            </v-btn>
            <input ref="uploader" class="d-none" type="file" accept="image/*" @change="onUpload">
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" @click="cancel">Cancel</v-btn>
          <v-btn color="success" @click="onUpload">Done</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>


<script>
export default {
  data() {
    return {
      dialog: false,
      show1: false,
      file: "",
      viand: {
        name: "",
        img: []
      },
      rules: {
        required: value => !!value || "Required."
        // min: v => v.length >= 8 || "Min 8 characters",
        // passwordMatch: () => "The password you entered don't match"
      }
    };
  },
  methods: {
    onUpload(e) {
      this.file = e.target.files;
      const Toast = this.$swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        onOpen: toast => {
          toast.addEventListener("mouseenter", this.$swal.stopTimer);
          toast.addEventListener("mouseleave", this.$swal.resumeTimer);
        }
      });
      const emp =
        this.viand.name == "" || this.file == null
          ? ((this.dialog = true),
            this.$swal.fire("Oops..", " Please input the field.", "error"))
          : ((this.dialog = false),
            Toast.fire({
              icon: "success",
              title: `${this.viand.name} is Successfully added.`
            }),
            // this.$swal.fire(`${this.viand.name} is successfully added.`, " ", "success"),
            console.log(this.file));
      return emp;
    },
    cancel() {
      this.dialog = false;
      this.viand.name = "";
    }
  }
};
</script>