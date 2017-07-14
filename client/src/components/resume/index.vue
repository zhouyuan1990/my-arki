<template>
  <resume>
    <resume-item slot="item" :cur-idx="currentIndex">
      <home class="home"></home>
    </resume-item>
    <resume-item slot="item" :cur-idx="currentIndex">
      <project class="project"></project>
    </resume-item>
    <resume-item slot="item" :cur-idx="currentIndex">
      <home class="home2"></home>
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
      currentIndex: 0
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
.resume-item .home {
  background-color: #EFCEE8;
}
.resume-item .project {
  background-color: #F3D7B5;
}
.resume-item .home2 {
  background-color:#FDFFDF;
}
/*
background-color:#DAF9CA;
background-color:#C7B3E5;
*/
</style>