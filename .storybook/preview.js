import { addDecorator, addParameters } from "@storybook/vue";

addParameters({
  docs: {
    inlineStories: true
  },
  options: {
    showRoots: true
  }
});

addDecorator(() => {
  return {
    template: `<div><story/></div>`
  };
});
