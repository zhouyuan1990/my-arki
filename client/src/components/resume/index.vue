<template>
  <resume>
    <resume-item>
      <home class="home"></home>
    </resume-item>
    <resume-item>
      <project class="project"></project>
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
      index: 0,
      pages: []
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
</style>