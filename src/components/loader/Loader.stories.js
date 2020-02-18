import Vue from "vue";
import Loader from "./Loader";

Vue.component("RLoader", Loader);

export default {
  title: "Components/Loader",
  component: Loader
};

export const playground = () => ({
  template: `<RLoader />`
});
