<template>
  <div>
    <mixin />
    <post />
    <media />
    <!--  -->
  </div>
</template>
<script>
import post from "@/components/parentProps.vue";
import mixin from "@/components/mixin.vue";
import media from "@/components/media.vue";
export default {
  components: {
    post,
    mixin,
    media
  }
};
</script>
