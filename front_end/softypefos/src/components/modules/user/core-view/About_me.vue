<template>
  <v-container class="grey lighten-5" style="margin-top: 2%;">
    <v-lazy
      v-model="isActive"
      :options="{
          threshold: .5
        }"
      transition="fade-transition"
    >
      <v-row justify="space-around">
        <v-col class="text-center" style="font-style: italic">
          <br>
          <h1>About me</h1>
          <br>
          <div>
            <h2>I am Rangie Laurente, student of University of San Carlos and a proudly scholar of Passerelles numeriques Philippines</h2>
          </div>
        </v-col>
        <v-col>
          <v-row align="center" justify="center">
            <!-- <v-img
              src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              aspect-ratio="1"
              class="grey lighten-2"
              max-width="500"
              max-height="300"
            ></v-img>-->
            <v-carousel style="width: 600px">
              <v-carousel-item
                style="width: 600px;height:auto;"
                cycle
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
                reverse-transition="fade-transition"
                transition="fade-transition"
              >
                <v-row class="fill-height" align="center" justify="center">
                  <div class="display-3">Slide</div>
                </v-row>
              </v-carousel-item>
            </v-carousel>
          </v-row>
        </v-col>
      </v-row>
    </v-lazy>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      items: [
        {
          src: require("@/assets/me2.jpg")
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
        }
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"]
    };
  }
};
</script>