<template>
  <div class="sites-section">
    <div class="container mt-5">
      <div><h4 class="text-center title">Our Works</h4></div>

      <!-- <div class="row" id="img">
        <div
          v-for="item in images"
          class="col-md-4 col-xs-12 my-1"
          v-bind:key="item"
        >
          <img :src="item.img" />
        </div> -->

      <!--  -->
      <div>
        <div class="row">
          <LightGallery
            :images="img"
            :index="index"
            :disable-scroll="true"
            @close="index = null"
          />

          <div
            id="img"
            v-for="(thumb, thumbIndex) in images"
            class="col-md-4 col-xs-12 my-1"
            :key="thumbIndex"
            @click="index = thumbIndex"
          >
            <img :src="require(`@/assets/images/` + thumb.img)" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { LightGallery } from "vue-light-gallery";

export default {
  components: {
    LightGallery
  },

  data() {
    return {
      images: [
        {
          title: "img 1",
          url: "https://storage.googleapis.com/wohlig-website/desktop.png",
          img: "header_img.jpeg"
        },
        {
          title: "img 2",
          url: "@/assets/images/img1.jpeg",
          img: "img1.jpeg"
        },
        { title: "img 3", img: "img2.jpeg" },
        { title: "img 4", img: "header_img.jpeg" },
        { title: "img 5", img: "img1.jpeg" },
        { title: "img 6", img: "img2.jpeg" }
      ],
      index: null
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
@media screen and (max-width: 800px) {
  .sites-section {
    text-align: center;
  }
}
</style>
