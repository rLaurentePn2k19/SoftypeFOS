<template>
  <v-row>
    <v-dialog v-model="dialog" max-width="350">
      <template v-slot:activator="{ on }">
        <v-btn text v-on="on">
          <!-- <span class="mr-2">Login</span> -->
          <v-icon>mdi-login</v-icon>
        </v-btn>
      </template>
      <v-card>
        <v-toolbar color="orange" dark flat>
          <v-toolbar-title>Admin</v-toolbar-title>
          <v-spacer/>
        </v-toolbar>
        <!-- <v-card-title class="headline">Use Google's location service?</v-card-title> -->
        <br>
        <v-card-text>
          <v-form>
            <v-text-field
              v-model="username"
              label="Username"
              name="username"
              :prepend-icon="'mdi-account'"
              :rules="[rules.required]"
              @click:append="show1 = !show1"
              type="text"
            />
            <v-text-field
              v-model="password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="[rules.required, rules.min]"
              :type="show1 ? 'text' : 'password'"
              name="password"
              label="Password"
              hint="At least 8 characters"
              counter
              @click:append="show1 = !show1"
              :prepend-icon="'mdi-lock'"
            />
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green darken-1" text @click="adminRoute">Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import ROUTER from "@/router";

export default {
  data() {
    return {
      dialog: false,
      show1: false,
      username: "",
      password: "",
      rules: {
        required: value => !!value || "Required.",
        min: v => v.length >= 8 || "Min 8 characters",
        passwordMatch: () => "The password you entered don't match"
      }
    };
  },
  methods: {
    adminRoute() {
      const proceed =
        this.username != "admin" ||
        (this.username == "" && this.password != "Softype100") ||
        this.password == ""
          ? (ROUTER.push("/home"),
            (this.dialog = true),
            console.table([`${this.username}`, `${this.password}`]),
            this.$swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Please fill in the provided fields."
            }))
          : (ROUTER.push("/dashboard"),
            (this.dialog = false),
            this.$swal.fire("Hi! Admin", "You are now logged in.", "success"),
            console.table([`${this.username}`, `${this.password}`]));

      return proceed;
    }
  }
};
</script>