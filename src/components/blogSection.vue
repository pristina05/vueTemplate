<template>
  <div class="sites-section" id="blog" v-scroll-spy>
    <div class="container" id="app">
      <div data-aos="fade-down"><h5 class="text-center title">Blogs</h5></div>

      <div class="row">
        <div v-for="item in items" class="col-md-4 my-1" v-bind:key="item">
          <div
            class="card h-100 border-0"
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
          >
            <img :src="item.img" />
            <div class="card-body">
              <div class="card-title">
                <b>{{ item.name }}</b>
              </div>
              <p class="post">
                june 17, 2019 by <span class="admin">Admin</span>
              </p>
              <div>
                <span class="loreum-ipsum">{{ item.content }}</span>
              </div>
            </div>
          </div>
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

      items: [
        {
          img: image,
          name: "Lorem ipsum is placeholder",
          content:
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
        },
        {
          img: image1,
          name: "Lorem ipsum is placeholder",
          content:
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
        },
        {
          img: image2,
          name: "Lorem ipsum is placeholder",
          content:
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";
.admin {
  color: $green;
}

.post {
  color: $grey;
}
</style>
