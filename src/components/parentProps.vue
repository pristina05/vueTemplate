<template>
  <!-- parent -->
  <div>
    <h1>Props</h1>
    <!-- custom elements -->
    <my-button name="Share" :handleClick="shareMe"></my-button>
    <my-button name="Like" :handleClick="shareMe"></my-button>
    <my-button name="Comment" :handleClick="shareMe"></my-button>

    <!-- <name firstname="pristina"></name>
    <name firstname="prist"></name> -->
    <!--  -->
  </div>
</template>

<script>
import Button from "./childProps.vue";
export default {
  components: {
    "my-button": Button
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
