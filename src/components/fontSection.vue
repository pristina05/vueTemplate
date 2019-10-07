<template>
  <div class="bg-color">
    <div class="container  ">
      <div class="row ">
        <div class="col-md-3  " v-for="item in items" v-bind:key="item">
          <!-- <font-awesome-icon :icon="['fas', 'tv']" /> -->
          <div class="icon d-flex">
            <div class="icon-name ">
              <font-awesome-icon :icon="item.icon" class="fa-2x " />
            </div>
            <div class="icon-content ">
              <small>{{ item.name }}</small
              ><br />
              <small>{{ item.content }}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      icon: "",
      items: [
        {
          icon: ["fas", "smile"],
          // icon: "fas fa-tv",
          name: 83,
          content: "Happy Clients"
        },
        {
          icon: ["fas", "coffee"],
          name: 3892,
          content: "Cup of Coffee"
        },
        {
          icon: ["fas", "tv"],
          name: 396895,

          content: "Line of Codes"
        },
        {
          icon: ["fas", "tv"],
          name: "4353535",

          content: "Finish"
        }
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss/main.scss";

.icon {
  margin: 100px 0px;
}
.icon-content {
  padding: 0px 10px;
  line-height: 15px;
}
</style>
