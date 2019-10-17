<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <app-header> </app-header>
    <router-view />
    <app-footer> </app-footer>

    <!--  -->
  </div>
</template>
<script>
import header from "@/components/headerSection.vue";
import footer from "@/components/footerSection.vue";
export default {
  components: {
    "app-header": header,
    "app-footer": footer
  }
};
</script>
<style lang="scss">
// #app {
//   font-family: "Avenir", Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }
// #nav {
//   padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;
//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
