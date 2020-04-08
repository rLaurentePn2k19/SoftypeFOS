  <template>
  <v-card class="d-flex align-center" dark>
    <v-img
      :src="foodDetails.image"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="200"
    >
      <v-card-title v-text="foodDetails.name"></v-card-title>
    </v-img>
  </v-card>
</template>

<style scoped>
</style>

<script>
export default {
  props: {
    foodDetails: {
      type: Object
    }
  }
};
</script>