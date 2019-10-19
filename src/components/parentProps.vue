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

    <!-- v-on -->
    <div id="databinding" class="mt-3 container">
      <h4><b>v-on</b></h4>
      <button v-on:click="displaynumbers">Click ME</button>
      <h4>Add Number {{ num1 }} + {{ num2 }} = {{ total }}</h4>
    </div>

    <!-- filter property -->
    <div class="container">
      <h4>Filter</h4>
      <input v-model="name" placeholder="Enter Name" /><br />
      <span>
        <b>Letter count is:{{ name | countletters }}</b>
      </span>
    </div>
    <!-- watch property -->
    <div class="container">
      <h4>watch property</h4>
      kilometers:<input v-model="kilometers" placeholder="kilometer" />
      meter:<input v-model="meters" placeholder="meter" />
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
      slotMarkup: "hello",
      total: "",
      num1: 100,
      num2: 300,
      name: "",
      kilometers: 0,
      meters: 0
    };
  },
  components: {
    "my-button": Button,
    "contact-list": Button

    // name: Button
  },
  filters: {
    countletters: function(value) {
      return value.length;
    }
  },
  watch: {
    kilometers: function(value) {
      this.kilometers = value;
      this.meters = value * 1000;
    },
    meters: function(value) {
      this.kilometers = value / 1000;
      this.meters = value;
    }
  },
  methods: {
    shareMe: function() {
      //write your logic
      // eslint-disable-next-line no-console
      console.log("share");
    },
    displaynumbers: function() {
      return (this.total = this.num1 + this.num2);
    }
  }
};
</script>
<style lang="scss" scoped></style>
