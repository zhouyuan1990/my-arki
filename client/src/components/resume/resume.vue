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
      <slot name="item"></slot>
    </ul>
    <ul class="indicators" ref="indicators">
      <li class="indicator"
          v-for="(page, $index) in pages"
          :class="{ 'is-active': $index === index }"
          :key="$index">
        <a href="#"></a>      
      </li>
    </ul>
  </div>
</template>

<script>
import { addClass, removeClass } from '../../utils/class';
import { getWheelDelta } from '../../utils/event';

const transformKeys = ['webkitTransform', 'OTransform', 'msTransform', 'MozTransform', 'transform'];
let preWheelTime = 0,
    lastAnimationTime = 0,
    wheels = [];

export default {
  name: 'resume',
  data() {
    return {
      ready: false,
      index: 0,
      pages: [],
      bb: 1,
      transformKey: null
    }
  },
  methods: {
    resumeItemCreated() {
    },
    resumeItemDestroyed() {
    },
    reInitPages() {
      let children = this.$slots.item,
          pages = [],
          length = children.length;
      this.index = 0;
      
      children.forEach(function(child, index) {
        pages.push(child.elm);
      });

      this.pages = pages;
    },
    isMoving() {
      let curTime = new Date().getTime();
      let animationDuration = 1000;
      if (curTime - lastAnimationTime < animationDuration + 200) {
        return true;
      }
      return false;
    },
    isAccelerating() {
      if (wheels.length < 10) return true;
      let averageEnd = this.getLastWheelsAverage(10);
      let averageMiddle = this.getLastWheelsAverage(50);
      return averageEnd >= averageMiddle;
    },
    getLastWheelsAverage(number) {
      let sum = 0;
      let calcElements = wheels.slice(Math.max(wheels.length - number, 1));
      for (let i = 0; i < calcElements.length; i++) {
        sum += calcElements[i];
      }
      return Math.ceil(sum/number);
    },
    handleWheel(event) {
      event.preventDefault();   //prevent page drag down in mac

      let curWheelTime = new Date().getTime();
      let timeDiff = curWheelTime - preWheelTime;
      preWheelTime = curWheelTime;
      if (timeDiff > 200) {
        wheels = [];
      }
      if (wheels.length > 99) {
        wheels.shift();
      }
      let delta = getWheelDelta(event);
      wheels.push(Math.abs(delta));

      if (!this.isMoving() && this.isAccelerating()) {
        if (delta > 0) {
          this.prev();
        } else {
          this.next();
        }
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
      lastAnimationTime = new Date().getTime();
      this.index = index;
      this.$parent.passIndex(this.index);
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
.indicators {
  top: 50%;
  transform: translateX(-50%);
  margin-left: 0.7rem;
}
.indicator {
  height: 0.7rem;
  width: 0.7rem;
  padding: 0.15rem 0 0.15rem 0;
}
.indicator > a {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 50%;
  background-color: #fff;
  opacity: 0.25;
}
.indicator.is-active > a {
  opacity: 0.9;
}
</style>
