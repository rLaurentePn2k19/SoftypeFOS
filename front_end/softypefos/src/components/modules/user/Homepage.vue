<template>
  <v-parallax dark :src="require('@/assets/food.jpg')">
    <v-row align="center" justify="center">
      <!-- <v-col class="text-center" cols="12"> -->
      <!-- <br>
        <br>
        <br>
        <h1 class="display-2 font-weight-thin mb-2">
          We are
          <strong>ONE</strong>, we eat as
          <strong>FAMILY!</strong>
      </h1>-->
      <div id="testBackground">
        <div class="text-center">
          <div id="myDiv">
            <div id="innerDiv">
              <h1 id="msg" class="display-2 font-weight-thin mb-2">
                We are
                <strong>ONE</strong>, we eat as
                <strong>FAMILY!</strong>
              </h1>
            </div>
          </div>
        </div>
      </div>
      <!-- </v-col> -->
    </v-row>
  </v-parallax>
</template>

<style>
#testBackground {
  background-position: right bottom;
  height: 100%;
  width: 100%;
  filter: grayscale(100%);
}


#myDiv {
  top: 120px;
  margin: auto;
  width: 50%;
  position: relative;
  -webkit-animation-name: example; /* Safari 4.0 - 8.0 */
  -webkit-animation-duration: 4s; /* Safari 4.0 - 8.0 */
  animation-name: example;
  animation-duration: 6s;
  padding: 5%;
}

/* Safari 4.0 - 8.0 */
@-webkit-keyframes example {
  0% {
    background-color: red;
    left: 0px;
    top: 0px;
  }
  25% {
    background-color: yellow;
    left: 200px;
    top: 0px;
  }
  50% {
    background-color: blue;
    left: 200px;
    top: 200px;
  }
  75% {
    background-color: green;
    left: 0px;
    top: 200px;
  }
  100% {
    background-color: red;
    left: 0px;
    top: 0px;
  }
}

/* Standard syntax */
@keyframes example {
  0% {
    left: 0px;
    top: 0px;
  }
  25% {
    left: 100px;
    top: 0px;
  }
  50% {
    left: 200px;
    top: 200px;
  }
  75% {
    left: -100px;
    top: 100px;
  }
  100% {
    background-color: red;
    left: 0px;
    top: 120px;
  }
}
</style>


<script>
export default {
  data() {
    return {};
  }
};
</script>