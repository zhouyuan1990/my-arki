<template>
  <div>
    <div class="lang-panel">
      <a class="lang"
         :class="[ lang == 'zh' ? 'is-active' : 'not-active' ]"
         @click="setLang('zh')">中</a>
      <a class="lang"
         :class="[ lang == 'en' ? 'is-active' : 'not-active' ]"
         @click="setLang('en')">En</a>
    </div>
    <page-swipe>
      <home slot="page-swipe-item" :swipe-title="messages.title_home" :messages="messages"></home>
      <me slot="page-swipe-item" :swipe-title="messages.title_me" :messages="messages"></me>
      <project slot="page-swipe-item" :swipe-title="messages.title_project" :messages="messages"></project>
      <technology slot="page-swipe-item" :swipe-title="messages.title_technology" :messages="messages"></technology>
    </page-swipe>
  </div>
</template>

<script>
import PageSwipe from '../utils/page-swipe.vue';
import Home from './home.vue';
import Me from './me.vue';
import Project from './project.vue';
import Technology from './technology.vue';
import zh from '../../lang/resume/zh.json';
import en from '../../lang/resume/en.json';

export default {
  name: 'resume-index',
  data () {
    return {
      lang: 'zh',
      messages: zh,
    }
  },
  watch: {
    lang(lang) {
      if (lang == 'zh') {
        this.messages = zh;
      } else if (lang == 'en') {
        this.messages = en;
      }
    }
  },
  methods: {
    setLang(lang) {
      this.lang = lang;
    }
  },
  components: {
    'page-swipe': PageSwipe,
    'home': Home,
    'me': Me,
    'project': Project,
    'technology': Technology
  }
}
</script>
<style scoped>
.lang-panel {
  position: absolute;
  z-index: 100;
}
.lang-panel {
  right: 2rem;
  top: 2rem;
}
.lang {
  padding: 0.3rem 0.4rem;
  border-radius: 0.5rem;
  color: #2c3e50;
}
.lang.is-active{
  background-color: rgba(255,255,255,0.6);
  cursor: default;
}
.lang.not-active{
  cursor: pointer;
}
.lang.not-active:hover {
  color: #95a5a6;
}
</style>
<style>
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
