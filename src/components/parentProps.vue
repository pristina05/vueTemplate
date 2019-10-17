<template>
  <!-- parent -->
  <div class="mt-5">
    <h5 class="text-center">Props and Slots</h5>
    <!-- custom elements -->
    <my-button name="Share" :handleClick="shareMe"></my-button>
    <my-button name="Like" :handleClick="shareMe"></my-button>
    <my-button name="Comment" :handleClick="shareMe"></my-button>

    <!-- <name firstname="pristina"></name>
    <name firstname="prist"></name> -->
    <div>
      <contact-list :psuedo-slot="item => item.firstname"> </contact-list>
    </div>

    <!-- slot -->
    <div class="container">
      <slots-example>
        <p><b>Slots</b></p>
        <h4 slot="subtitle">hii</h4>
        <h1 slot="title">{{ slotMarkup }}</h1>
        <h3 slot="body">This is some body text on.</h3>
      </slots-example>
    </div>

    <!-- youtube -->
    <youtube :video-id="videoId" class="text-center"> </youtube>
  </div>
</template>

<script>
import Button from "./childProps.vue";
export default {
  data() {
    return {
      slotMarkup: "hello"
    };
  },
  components: {
    "contact-list": Button

    // name: Button
  },
  methods: {
    shareMe: function() {
      //write your logic
      // eslint-disable-next-line no-console
      console.log("share");
    }
  }
};
</script>
<style lang="scss" scoped></style>
