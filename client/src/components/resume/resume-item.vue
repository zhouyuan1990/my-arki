<template>
  <li class="resume-item item-easing">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'resume-item',
  mounted() {
    this.$parent && this.$parent.resumeItemCreated(this);
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
  -webkit-transition: all 1000ms cubic-bezier(0.550, 0.085, 0.000, 0.990);
  -moz-transition: all 1000ms cubic-bezier(0.550, 0.085, 0.000, 0.990);
  -o-transition: all 1000ms cubic-bezier(0.550, 0.085, 0.000, 0.990);
  transition: all 1000ms cubic-bezier(0.550, 0.085, 0.000, 0.990);
  -webkit-transition-timing-function: cubic-bezier(0.550, 0.085, 0.000, 0.990);
  -moz-transition-timing-function: cubic-bezier(0.550, 0.085, 0.000, 0.990);
  -o-transition-timing-function: cubic-bezier(0.550, 0.085, 0.000, 0.990);
  transition-timing-function: cubic-bezier(0.550, 0.085, 0.000, 0.990);
}
</style>
