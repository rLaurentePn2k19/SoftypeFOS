<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="350">
      <v-card max-width="350px" :loading="loading">
        <v-toolbar color="orange" dark flat>
          <v-toolbar-title>Edit viand</v-toolbar-title>
          <v-spacer/>
        </v-toolbar>
        <v-img class="display-4 flex-grow-2 text-center" height="200px" :src="this.imgs[0]">
          <v-btn color="primary" @click="showFileInput">Update image</v-btn>
        </v-img>
        <hr>
        <br>
        <v-card-text>
          <v-form>
            <v-text-field
              label="Edit title"
              :prepend-icon="'mdi-food-variant'"
              v-model="viand_name"
            />
            <v-file-input
              v-model="img_edited"
              dense
              label="Upload Image"
              accept="/*image"
              v-show=" show ? true : false"
            ></v-file-input>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" @click="dialog = false">Cancel</v-btn>
          <v-btn color="success" @click="submitEdited">Done</v-btn>
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
      show: false,
      loading: false,
      imgs: [],
      viand_name: "",
      img_edited: [],
      id: ""
    };
  },
  mounted() {
    this.$bus.$on("edit-viand", data => {
      this.dialog = true;
      console.log(data._image);
      this.id = data._id
      this.imgs = data._image;
      this.viand_name = data._name;
    });
  },
  methods: {
    showFileInput() {
      this.show = !this.show;
    },
    submitEdited() {
      this.dialog = false;

      let formData = new FormData();
      formData.append("img", this.img_edited);
      formData.append("viand", JSON.stringify(this.viand_name));

      // this.$store.commit("setViandToEdit", this.id ,formData);
      this.$store.dispatch("UpdateViand", this.id, formData).then(res =>{
        console.log(res);
      }).catch(err =>{
        console.log(err)
      })

      console.log(this.img_edited.name, " edited");
      console.log(this.viand_name, " edited name");
    }
  }
};
</script>
