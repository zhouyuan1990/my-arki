<template>
  <resume :pages="pages" :messages="messages" :lang="lang" :class="lang">
    <resume-item slot="item"
                 :cur-idx="currentIndex"
                 v-for="(page, $index) in pages"
                 :key="$index"
                 :class="'item-' + $index"
                 :messages="messages">
      <component :is="page.name" :messages="messages"></component>
    </resume-item>
  </resume>
</template>

<script>
import Resume from './resume.vue';
import ResumeItem from './resume-item.vue';
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
      currentIndex: 0,
      pages: [],
      lang: 'zh',
      messages: zh
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
    passIndex(idx) {
      this.currentIndex = idx;
    },
    setLang(lang) {
      this.lang = lang;
    }
  },
  components: {
    'resume': Resume,
    'resume-item': ResumeItem,
    'home': Home,
    'me': Me,
    'project': Project,
    'technology': Technology
  },
  created() {
    this.pages = [
      { name: 'home', title: 'home' },
      { name: 'me', title: 'me' },
      { name: 'project', title: 'project' },
      { name: 'technology', title: 'technology' }
    ];
  }
}
</script>
