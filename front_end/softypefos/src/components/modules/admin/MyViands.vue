  <template>
  <v-lazy
    v-model="isActive"
    :options="{
          threshold: .5
        }"
    min-height="200"
    transition="fade-transition"
  >
    <v-item-group multiple>
      <v-container>
        <v-row>
          <v-col cols="12">
            <v-item v-slot:default="{ active, toggle }">
              <v-hover v-slot:default="{ hover }" open-delay="100">
                <v-card
                  :elevation="hover ? 16 : 2"
                  :color="active ? 'primary' : ''"
                  class="d-flex align-center"
                  dark
                  height="200"
                  @mouseenter="toggle"
                >
                  <v-img
                    class="white--text align-end"
                    height="200px"
                    :src="viandDetails.image[0]"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  >
                    <v-scroll-y-transition>
                      <div v-if="active" class="display-5 flex-grow-2 text-center">
                        <EditViand :viand_to_edit="viandDetails"></EditViand>
                        <!-- <EditViand :viand_to_edit="viandDetails"></EditViand> -->
                        <v-divider class="mx-1" inset vertical></v-divider>
                        <v-btn color="error" small fab @click="deleteViand(viandDetails._id)">
                          <v-icon>mdi-delete</v-icon>
                        </v-btn>
                      </div>
                    </v-scroll-y-transition>
                    <v-card-title>{{viandDetails.name}}</v-card-title>
                  </v-img>
                </v-card>
              </v-hover>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </v-lazy>
</template>

<style scoped>
</style>

<script>
import EditViand from "@/components/modules/admin/EditViand.vue";
export default {
  data() {
    return {
      isActive: false
    };
  },
  components: {
    EditViand
  },
  props: {
    viandDetails: {
      type: Object
    }
  },
  methods: {
    deleteViand(id) {
      // delete the viand
      console.log(id);
      this.$swal
        .fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, remove it!"
        })
        .then(result => {
          if (result.value) {
            this.$axios
              .delete(`http://localhost:4000/admin/deleteViand/${id}`)
              .then(res => {
                console.log(res);
                this.$bus.$emit("viand-remove", id);
                this.$swal.fire(
                  "Deleted!",
                  "The viand has been deleted.",
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