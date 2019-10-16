<template>
  <div>
    <div>
      <!-- child -->
      <button @click="handleClick">{{ name }}</button>
    </div>
    <h4>{{ firstname }}</h4>
  </div>
</template>

<script>
export default {
  props: ["name", "handleClick", "firstname"]
};
</script>
<style lang="scss" scoped>
button {
  margin-left: 5px;
  display: inline-block;
}
</style>
