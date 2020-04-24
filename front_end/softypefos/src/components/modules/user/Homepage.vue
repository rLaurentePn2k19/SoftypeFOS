<template>
  <div>
    <parallax/>
    <dateTrivia/>
    <aboutMe/>
  </div>
</template>

<style>
 
</style>


<script>
import parallax from "@/components/modules/user/core-view/Parallax.vue"
import dateTrivia from "@/components/modules/user/core-view/Date_trivia.vue"
import aboutMe from "@/components/modules/user/core-view/About_me.vue"

export default {
  data() {
    return {};
  },
  components: {
    parallax,
    dateTrivia,
    aboutMe
  }
};
</script>