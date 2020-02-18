import Vue from "vue";
import App from "./App.vue";
import Components from "./lib";
import "./components/common.css";

Vue.use(Components);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
