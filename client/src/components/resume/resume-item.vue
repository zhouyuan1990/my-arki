<template>
  <li class="resume-item item-easing">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'resume-item',
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    this.$parent && this.$parent.resumeItemCreated(this);
    debugger;
  },
  destroyed() {
    this.$parent && this.$parent.resumeItemDestroyed(this);
  }
}
</script>

<style scoped>
.resume-item {
  position: absolute;
  height: 100%;
  width: 100%;
  transform: translate3d(0px, 0px, 0px);
}
.item-easing {
  transition: all 1000ms cubic-bezier(0.550, 0.085, 0.000, 0.990);
}
</style>
