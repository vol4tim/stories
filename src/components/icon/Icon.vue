<template>
  <i :class="[`i-${name}`, { left: left, right: right }]"></i>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    left: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./style";
</style>
