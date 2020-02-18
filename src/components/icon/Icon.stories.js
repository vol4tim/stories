import Vue from "vue";
import { select } from "@storybook/addon-knobs";
import Icon from "./Icon";

Vue.component("RIcon", Icon);

export default {
  title: "Components/Icon",
  component: Icon
};

export const playground = () => ({
  props: {
    name: {
      default: select(
        "name",
        [
          "day",
          "night",
          "back",
          "copy",
          "cursor",
          "github",
          "reddit",
          "lighthouse",
          "piechart",
          "transfer",
          "multicolor"
        ],
        "day"
      )
    }
  },
  template: `<RIcon :name="name" />`
});
