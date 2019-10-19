<template>
  <div>
    <!-- mixins -->
    <div id="databinding"></div>
    <!-- @mixin scss -->
    <div>
      <h4 class="text-center">Mixins</h4>
      <div class="container">
        <div class="row">
          <div v-for="item in items" class="col-md-4 my-1" v-bind:key="item">
            <div>
              <div class="images">
                <img :src="item.img" class="img" />
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
    <!-- v-on click -->
    <div class="container mt-5" id="example-1">
      <button v-on:click="counter += 1">Add {{ counter }}</button>
      <p>The button above has been clicked {{ counter }} times.</p>
    </div>
  </div>
</template>
<script>
import productmixin from "../views/mixins/productmixin";

export default {
  data() {
    return {
      counter: 0
    };
  },
  mixins: [productmixin]
};
</script>

<style lang="scss"></style>
