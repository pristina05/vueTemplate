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
  faFacebook,
  faInstagram
} from "@fortawesome/free-brands-svg-icons"; //fab
import { faSmile, faCoffee } from "@fortawesome/free-solid-svg-icons"; //fa
import {} from "@fortawesome/free-regular-svg-icons"; //far
import { faTv, faHeart } from "@fortawesome/free-solid-svg-icons"; //fas

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(faTv, faHeart, faSmile,faCoffee);
library.add(fab);
library.add(faTwitter, faFacebook, faInstagram);
Vue.component("font-awesome-icon", FontAwesomeIcon);

// progress loader
import ProgressBar from "vue-simple-progress";

new Vue({
  router,
  store,
  components: {
    ProgressBar
  },
  render: h => h(App)
}).$mount("#app");
