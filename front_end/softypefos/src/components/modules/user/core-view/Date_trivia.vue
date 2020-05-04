<template>
  <v-container class="grey lighten-5" style="margin-top: 2%;">
    <v-row justify="space-around">
      <v-col class="text-center">
        <v-date-picker v-model="picker" color="green lighten-1"></v-date-picker>
      </v-col>
      <v-col class="text-center" style="font-style: italic">
        <br>
        <h1>Fact of the day!</h1>
        <br>
        <div>
          <h2>Amazon.com employees spend two days every two years working at the customer service desk — even the CEO — in order to help all workers understand the customer service process.</h2>
        </div>
      </v-col>
    </v-row>
    
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      picker: new Date().toISOString().substr(0, 10),
      picker2: new Date().toISOString().substr(0, 10)
    };
  }
};
</script>