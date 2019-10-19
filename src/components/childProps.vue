<template>
  <div class="container">
    <button>{{ name }}</button>
    <div class="card border-0">
      <div v-for="item in items" v-bind:key="item">
        <div class="img-section d-flex ">
          <img :src="item.img" alt="images" class="images" />
          <div class="content">
            <div class="name">
              <h4>{{ psuedoSlot(item) }} {{ item.lastname }}</h4>
            </div>
            <div class="name">
              {{ item.email }}
              <slot>{{ name }} </slot>
            </div>
          </div>
        </div>
      </div>
      <!--  -->
      <div>
        {{ email }}
      </div>
      <!--  -->
      <div>
        <slot name="title"></slot>
        <slot name="body"></slot>
        <slot name="subtitle"></slot>
      </div>
    </div>
    <!--  -->

    <!-- child -->
    <!-- <div>
      <button @click="handleClick">{{ name }}</button>
    </div>
    <h4>{{ firstname }}</h4> -->
  </div>
</template>

<script>
import image from "@/assets/images/header_img.jpeg";
import image1 from "@/assets/images/img1.jpeg";
import image2 from "@/assets/images/img2.jpeg";
export default {
  props: ["name", "handleClick", "firstname", "psuedoSlot", "email"],
  data: function() {
    return {
      items: [
        {
          img: image,
          firstname: "Pristina",
          lastname: "Varghese",
          email: "pristi@gmail.com"
        },
        {
          img: image1,
          firstname: "princy",
          lastname: "Varghese",
          email: "princy@gmail.com"
        },
        {
          img: image2,
          firstname: "abc",
          lastname: "xyz",
          email: "abc@gmail.com"
        },
        {
          img: image,
          firstname: "Pristina",
          lastname: "Varghese",
          email: "pristi@gmail.com"
        },
        {
          img: image1,
          firstname: "princy",
          lastname: "Varghese",
          email: "princy@gmail.com"
        },
        {
          img: image2,
          firstname: "abc",
          lastname: "xyz",
          email: "abc@gmail.com"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
button {
  margin-left: 5px;
  display: inline-block;
}
.images {
  width: 56px;
  height: 70px;
  // border-radius: 50%;
  margin-bottom: 15px;
}
.content {
  padding: 10px;
}
</style>
