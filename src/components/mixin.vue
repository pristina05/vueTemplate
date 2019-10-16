<template>
  <div>
    <!-- mixins -->
    <div id="databinding"></div>
    <!-- @mixin scss -->
    <div>
      <h4>Mixins</h4>
      <div class="container">
        <div class="row">
          <div v-for="item in items" class="col-md-4 my-1" v-bind:key="item">
            <div>
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
  </div>
</template>
<script>
import productmixin from "../views/mixins/productmixin";

export default {
  mixins: [productmixin]
};
</script>

<style lang="scss">
.images {
  width: 82px;
  height: 70px;
  border-radius: 50%;
}
</style>
