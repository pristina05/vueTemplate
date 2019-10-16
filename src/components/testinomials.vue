<template>
  <div class="sites-section bg-color mt-5 " id="testinomials">
    <div class="container" id="app">
      <div data-aos="fade-down">
        <h5 class="text-center  title ">Testimonials</h5>
      </div>

      <div class="row">
        <div v-for="item in items" class="col-md-4 my-1" v-bind:key="item">
          <div data-aos="fade-up" data-aos-duration="3000">
            <div class="img">
              <img :src="item.img" class="images" />
            </div>
            <div class="mt-3">
              <div class="testimonial">
                {{ item.content }}
              </div>
              <div class="mt-3 name">-{{ item.name }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import productmixin from "../views/mixins/productmixin";
export default {
  mixins: [productmixin]
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.images {
  width: 82px;
  height: 70px;
  border-radius: 50%;
}
.card {
  border: none;
}
.testimonial {
  font-style: italic;
}

@media screen and (max-width: 480px) {
  .name {
    text-align: right;
  }
  .img {
    text-align: center;
  }
}
</style>
