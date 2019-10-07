<template>
  <div class="bg-color">
    <div class="container mt-5">
      <div><h4 class="text-center mt-5 title">Our Services</h4></div>

      <!--  -->
      <div class="services">
        <div class="row">
          <div
            v-for="item in items"
            class="col-md-3 col-6 my-1"
            v-bind:key="item"
          >
            <div class="card border-0">
              <span class="text-center mt-3">
                <font-awesome-icon :icon="['fas', 'tv']" class="fa-1x" />
              </span>
              <div class="card-body">
                <div class="card-title">
                  <p class="text-center">
                    <b>{{ item.name }}</b>
                  </p>
                </div>
                <div>
                  <span>{{ item.content }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  el: "#app",
  data: function() {
    return {
      items: [
        {
          name: "Web Design",
          content:
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
        },
        {
          name: "Graphic Design",
          content:
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
        },
        {
          name: "Web Apps",

          content:
            "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
        },
        {
          name: "Ecommerce",

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
.services {
  padding: 40px;
}
</style>
