<template>
  <div>
    <div class="container">
      <!--  Swiper Slider -->
      <swiper
        ref="mySwiper"
        :options="swiperOption"
        @someSwiperEvent="callback"
      >
        <!-- slides -->
        <swiper-slide
          v-for="cardcontent in cardcontents"
          :key="cardcontent.index"
          class="swiper-card"
        >
          <div class="swiper-card-section">
            <div class="photo-image">
              <img :src="cardcontent.image" class="image" alt="ceo-photos" />
            </div>

            <div class="card-content mt-3">
              <div class="card-title">{{ cardcontent.title }}</div>
              <div class="card-text">
                <div class="card-text">{{ cardcontent.name }}</div>
                <div class="card-text">{{ cardcontent.designation }}</div>
              </div>
            </div>
          </div>
        </swiper-slide>
        <!-- Optional controls -->
        <div slot="pagination" class="swiper-pagination"></div>
        <div
          slot="button-prev"
          class="swiper-button swiper-button-prev swiper-button"
        ></div>
        <div
          slot="button-next"
          class="swiper-button swiper-button-next swiper-button"
        ></div>
      </swiper>
      <!-- Swiper Slider End -->
    </div>
  </div>
</template>
<script>
import img1 from "@/assets/images/header_img.jpeg";
import img2 from "@/assets/images/images.jpeg";
import img3 from "@/assets/images/img1.jpeg";
import img4 from "@/assets/images/img2.jpeg";
export default {
  data() {
    return {
      cardcontents: [
        {
          image: img1,
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
          name: "Mark Zukerberg",
          designation: "CEO Facebook"
        },
        {
          image: img2,
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
          name: "Mary Barra",
          designation: "CEO & Founder"
        },
        {
          image: img3,
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
          name: "Laurie Lang",
          designation: "CEO Optima Inc"
        },
        {
          image: img4,
          title:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text",
          name: "Tim Cook",
          designation: "CEO & Founder"
        }
      ],
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 10,
        freeMode: true,

        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.image {
  width: 100%;
  height: 200px;
  display: block;
}
.card {
  width: 45vh;
}
</style>
