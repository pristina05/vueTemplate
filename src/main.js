import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

//bootstrap-vue
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
Vue.use(BootstrapVue);

// font-awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  fab,
  faTwitter,
  faFacebookF,
  faInstagram
} from "@fortawesome/free-brands-svg-icons"; //fab
import { faSmile, faCoffee, faPlus } from "@fortawesome/free-solid-svg-icons"; //fa
import {} from "@fortawesome/free-regular-svg-icons"; //far
import { faTv, faHeart } from "@fortawesome/free-solid-svg-icons"; //fas

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faTv, faHeart, faSmile, faCoffee, faPlus);
library.add(fab);
library.add(faTwitter, faFacebookF, faInstagram);
Vue.component("font-awesome-icon", FontAwesomeIcon);

// progress loader
import ProgressBar from "vue-simple-progress";

// vue-scrollto
import { scroller } from "vue-scrollto/src/scrollTo";
var VueScrollTo = require("vue-scrollto");

Vue.use(VueScrollTo);

// aos animaiton
import AOS from "aos";
import "aos/dist/aos.css";

// vue-swiper
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/dist/css/swiper.css";

Vue.use(VueAwesomeSwiper);
import Swiper from "swiper";
Swiper.use({
  name: "pluginName",
  params: {
    pluginSwitch: false
  },
  on: {
    init() {
      if (!this.params.pluginSwitch) return;
      // eslint-disable-next-line no-console
      console.log("init");
    }
    // swiper callback...
  }
});
// You can also pass in the default options
Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});

new Vue({
  router,
  store,
  scroller,
  components: {
    ProgressBar
  },
  created() {
    AOS.init();
  },
  render: h => h(App)
}).$mount("#app");
