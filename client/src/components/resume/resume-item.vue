<template>
  <li class="resume-item item-easing"
      :class="{ 'is-active': curIdx == index, 'moveOut': index < curIdx }"
      :style="{ zIndex: zIndex}">
    <slot></slot>
  </li>
</template>

<script>
export default {
  name: 'resume-item',
  props: {
    curIdx: {
      type: Number
    }
  },
  data() {
    return {
      index: -1,
      zIndex: 0
    }
  },
  methods: {
    initIndex() {
      this.index = this.$parent.$slots.item.indexOf(this.$vnode);
    },
    initZIndex() {
      this.zIndex = this.$parent.$slots.item.length - this.index;
    }
  },
  mounted() {
    this.$parent && this.$parent.resumeItemCreated(this);
    this.initIndex();
    this.initZIndex();
  },
  destroyed() {
    this.$parent && this.$parent.resumeItemDestroyed(this);
  },
  updated() {
    // debugger;
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
.moveOut {
  transform: translate3d(0px, -100%, 0px);
}
</style>
