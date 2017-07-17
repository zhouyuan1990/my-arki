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
    <resume :pages="pages" :lang="lang" :class="lang">
      <resume-item slot="item"
                   :cur-idx="currentIndex"
                   v-for="(page, $index) in pages"
                   :key="$index"
                   :class="'item-' + $index">
        <component :is="page.name" :messages="messages"></component>
      </resume-item>
    </resume>
  </div>
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
    passIndex(idx) {
      this.currentIndex = idx;
    },
    setLang(lang) {
      this.lang = lang;
    }
  },
  computed: {
    pages() {
      return [
        { name: 'home', title: this.messages['title_home'] },
        { name: 'me', title: this.messages['title_me'] },
        { name: 'project', title: this.messages['title_project'] },
        { name: 'technology', title: this.messages['title_technology'] }
      ];
    }
  },
  components: {
    'resume': Resume,
    'resume-item': ResumeItem,
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
