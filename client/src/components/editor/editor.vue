<template>
  <div class="editor-container">
    <textarea ref="editor"></textarea>
  </div>
</template>

<script>
import markdown from '@/utils/markdown';
import SimpleMDE from 'simplemde';
require('simplemde/dist/simplemde.min.css');
require('highlight.js/styles/monokai-sublime.css');

let smde;

export default {
  name: 'editor',
  data () {
    return {
    }
  },
  methods: {
  },
  mounted() {
    smde = new SimpleMDE({
      element: this.$refs['editor'],
      previewRender: function(plainText) {
        return markdown(plainText);
      }
    });
  }
}
</script>
<style>
.editor-container pre code{
  display: block;
  background: #23241f;
  color: #f8f8f2;
  padding: 1em;
  overflow-x: auto;
}
</style>