import components from "./components";

function install(Vue, options = { prefix: "R" }) {
  for (const key in components) {
    const component = components[key];
    Vue.component(options.prefix ? options.prefix + key : key, component);
  }
}

// auto install
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  components
};
