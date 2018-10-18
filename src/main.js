import Vue from "vue";
import Vuetify from "vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { i18n } from "@/plugins";
import "./assets/stylus/app.styl";
import "./registerServiceWorker";

Vue.config.productionTip = false;

Vue.use(Vuetify, {
  theme: {
    primary: "#333",
    secondary: "#ff5252",
    accent: "#82B1FF",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107"
  }
});

new Vue({
  router,
  i18n,
  store,
  render: h => h(App)
}).$mount("#app");
