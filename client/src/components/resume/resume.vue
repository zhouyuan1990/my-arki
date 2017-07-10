<template>
  <div class="resume" tabindex="1" 
       @mouseWheel="handleWheel"
       @wheel="handleWheel"
       @keydown="handleKeyDown">
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
import { getWheelDelta } from '../../utils/event';

const transformKeys = ['webkitTransform', 'OTransform', 'msTransform', 'MozTransform', 'transform'];
export default {
  name: 'resume',
  data() {
    return {
      ready: false,
      index: 0,
      preWheelTime: 0,
      pages: [],
      transformKey: null
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
    },
    handleWheel(event) {
      let curWheelTime = new Date().getTime();
      let timeDiff = curWheelTime - this.preWheelTime;
      this.preWheelTime = curWheelTime;

      if (timeDiff < 200) return;   //timeDiff < 200 to be considered as one wheelEvent

      let delta = getWheelDelta(event);
      if (delta > 0) {
        this.prev();
      } else {
        this.next();
      }
    },
    handleKeyDown(event) {
      console.log('keydown');
      console.log(event);
    },
    next() {
      if (this.index < this.pages.length - 1) {
        this.moveTo(this.index + 1);
      }
    },
    prev() {
      if (this.index > 0) {
        this.moveTo(this.index - 1);
      }
    },
    moveTo(index) {
      console.log('moveTo:' + index);
      let direction; // 1 --- UP, -1 --- DOWN
      let animateItem;

      if (index > this.index) {
        direction = -1;
      } else {
        direction = 1;
      }

      if (!this.transformKey) {
        transformKeys.every((key) => {
          if (document.body.style[key] == undefined) {
            return true;
          } else {
            this.transformKey = key;
            return false;
          }
        });
      }

      let loopFrom = Math.min(this.index, index);
      let loopTo = Math.max(this.index, index) - 1;
      console.log(loopFrom + '-' + loopTo);
      
      for (let i = loopFrom; i < loopTo + 1; i++) {
        console.log(i);
        let item = this.pages[i];
        if (direction < 0) {
          item.style[this.transformKey] = 'translate3d(0px, -100%, 0px)';
        } else {
          item.style[this.transformKey] = '';
        }
      }

      this.index = index;
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
