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
      type: Number,
      default: 0
    },
    messages: {
      type: Object,
      default: {}
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
    this.initIndex();
    this.initZIndex();
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
.resume-item > div {
  width: 100%;
  height: 100%; 
}
.item-easing {
  transition: transform 1000ms cubic-bezier(0.550, 0.085, 0.000, 0.990);
}
.moveOut {
  transform: translate3d(0px, -100%, 0px);
}
.item-0 {
  background-color: #EFCEE8;
}
.item-1 {
  background-color: #F3D7B5;
}
.item-2 {
  background-color:#FDFFDF;
}
.item-3 {
  background-color:#DAF9CA;
}
.item-4 {
  background-color:#C7B3E5;
}
</style>
