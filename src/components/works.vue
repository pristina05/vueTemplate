<template>
  <div class="sites-section" id="work">
    <div class="container mt-3">
      <div
        data-spy="scroll"
        data-target="#list-example"
        data-offset="0"
        class="scrollspy-example"
        data-aos="fade-down"
      >
        <h4 id="work-section" class="text-center title">Our Works</h4>
      </div>

      <!-- lightgallery -->
      <div>
        <div class="row">
          <LightGallery
            :images="images"
            :index="index"
            :disable-scroll="true"
            @close="index = null"
          />

          <div
            id="img"
            v-for="(thumb, thumbIndex) in images"
            class="col-lg-4 col-md-6 col-xs-12 my-1 images"
            :key="thumbIndex"
            @click="index = thumbIndex"
          >
            <div class="works" data-aos="flip-left">
              <img
                :src="require(`@/assets/images/` + thumb.img)"
                class="images"
              />
              <font-awesome-icon :icon="['fa', 'plus']" class="middle fa-3x" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- vue-number-scroll -->
    <!-- <vns
      :start="5"
      :end="7999"
      :times="55"
      :speed="30"
      style="font-size:40px"
    /> -->
  </div>
</template>
<script>
import { LightGallery } from "vue-light-gallery";
// import vns from "vue-number-scroll";
export default {
  components: {
    LightGallery
    // vns
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
          src: "@/assets/images/img1.jpeg",
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
.images {
  opacity: 1;
  display: block;

  transition: 0.5s ease;
  backface-visibility: hidden;
}
.middle {
  transition: 0.5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 40%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.works:hover .images {
  opacity: 0.3;
}

.works:hover .middle {
  opacity: 1;
}
@media screen and (max-width: 800px) {
  .sites-section {
    text-align: center;
  }
  .images {
    margin: auto;
  }
}
</style>
