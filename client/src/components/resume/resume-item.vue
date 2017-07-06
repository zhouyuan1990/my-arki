<template>
  <li class="resume-item">
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
}
</style>
