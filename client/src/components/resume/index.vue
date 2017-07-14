<template>
  <resume :pages>
    <resume-item slot="item"
                 :cur-idx="currentIndex"
                 v-for="(item, $index) in items"
                 :key="$index"
                 :class="'item-' + $index">
      <component :is="item.name"></component>
    </resume-item>
  </resume>
</template>

<script>
import Resume from './resume.vue';
import ResumeItem from './resume-item.vue';
import Home from './home.vue';
import Project from './project.vue';

export default {
  name: 'resume-index',
  data () {
    return {
      currentIndex: 0,
      items: [
        { name: 'home', title: 'Home' },
        { name: 'project', title: 'Project' },
        { name: 'home', title: 'Home2' },
        { name: 'project', title: 'Project2' }
      ]
    }
  },
  methods: {
    passIndex(idx) {
      this.currentIndex = idx;
    }
  },
  components: {
    'resume': Resume,
    'resume-item': ResumeItem,
    'home': Home,
    'project': Project
  }
}
</script>

<style>
.resume-item > div {
  width: 100%;
  height: 100%; 
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