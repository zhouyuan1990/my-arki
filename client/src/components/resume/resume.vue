<template>
  <div class="resume">
    <div class="lang-panel">
      <a class="lang">中</a>
      <a class="lang">En</a>
    </div>
    <ul class="main">
      <slot></slot>
    </ul>
    <ul class="indicators">
      <li class="indicator"
          v-for="(page, $index) in pages"
          :class="{ 'is-active': $index === index }"></li>
    </ul>
  </div>
</template>

<script>
import { addClass, removeClass } from '../../utils/class';
export default {
  name: 'resume',
  data() {
    return {
      ready: false,
      index: 0,
      pages: []
    }
  },
  methods: {
    resumeItemCreated() {
      console.log('resume item created');
    },
    resumeItemDestroyed() {
      console.log('resume item destroyed');
    },
    reInitPages() {
      let children = this.$children,
          pages = [],
          length = children.length;
      this.index = 0;
      
      children.forEach(function(child, index) {
        pages.push(child.$el);
        child.$el.style.zIndex = length - index;
        removeClass(child.$el, 'is-active');
        if (index === 0) {
          addClass(child.$el, 'is-active');
        }
      });

      this.pages = pages;
    }
  },
  mounted() {
    this.ready = true;
    this.reInitPages();
    let element = this.$el;
  }
}
</script>

<style scoped>
.lang-panel, .indicators {
  position: absolute;
  z-index: 100;
}
.lang-panel {
  right: 2rem;
  top: 2rem;
}
.main {
  position: absolute;
  height: 100%;
  width: 100%;
}
</style>
