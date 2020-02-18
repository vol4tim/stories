import Vue from "vue";
import { boolean, select } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Button from "./Button";
import Icon from "../icon";
import "../common.css";

Vue.component("RButton", Button);
Vue.component("RIcon", Icon);

export default {
  title: "Components/Button",
  component: Button
};

export const playground = () => ({
  props: {
    fullWidth: {
      default: boolean("full width", false)
    },
    size: {
      default: select("size", { default: "", big: "big", sm: "sm" })
    },
    color: {
      default: select("color", { green: "green", blue: "blue" }, "blue")
    }
  },
  methods: {
    log: function(e) {
      action("log")(e);
      this.count++;
    }
  },
  data() {
    return { count: 0 };
  },
  template: `<RButton @click="log" :fullWidth='fullWidth' :size="size" :color="color">count {{count}}</RButton>`
});

export const defaultButton = () => "<RButton>Text</RButton>";

export const fullWidth = () => "<RButton :fullWidth='true'>Text</RButton>";

export const size = () =>
  `<div>
    <RButton size='big'>Big</RButton>
    <RButton size='sm'>Sm</RButton>
  </div>`;

export const color = () => "<RButton color='green'>Text</RButton>";
export const disabled = () => "<RButton :disabled='true'>Text</RButton>";
export const withIcon = () =>
  "<RButton><RIcon name='day' :left='true' />Text</RButton>";
