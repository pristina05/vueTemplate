<template>
  <div>
    <div class="container" id="app">
      <div><h5 class="text-center mt-5 title">Blogs</h5></div>

      <div class="row">
        <div v-for="item in items" class="col-md-4 my-1" v-bind:key="item">
          <div class="card h-100 border-0">
            <img :src="item.img" />
            <div class="card-body">
              <div class="card-title">-{{ item.name }}</div>
              <p>june 17, 2019 by <span class="admin">Admin</span></p>
              <div>
                <span>{{ item.content }}</span>
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
          name: "Chris Smith",
          content:
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
        },
        {
          img: image1,
          name: "Chris Smith",
          content:
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
        },
        {
          img: image2,
          name: "Chris Smith",
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
</style>
