<template>
  <div>
    <div class="container mt-5">
      <div><h5 class="text-center title">Our Works</h5></div>

      <div class="row">
        <div
          v-for="item in work"
          class="col-md-4 col-xs-12 my-1"
          v-bind:key="item"
        >
          <img :src="item.img" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import image from "@/assets/images/header_img.jpeg";
import image1 from "@/assets/images/img1.jpeg";
import image2 from "@/assets/images/img2.jpeg";
export default {
  data: function() {
    return {
      //   img: image,

      work: [
        { img: image },
        { img: image1 },
        { img: image2 },
        { img: image },
        { img: image1 },
        { img: image2 }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
</style>
