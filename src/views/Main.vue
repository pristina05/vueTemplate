<template>
  <div>
    <mixin />
    <post />
    <!--  -->
  </div>
</template>
<script>
import post from "@/components/parentProps.vue";
import mixin from "@/components/mixin.vue";
export default {
  components: {
    post,
    mixin
  }
};
</script>
