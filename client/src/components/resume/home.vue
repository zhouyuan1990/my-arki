<template>
  <div tabindex="1"
       @mouseWheel="handleWheel"
       @wheel="handleWheel"
       @keydown="handleKeyDown">姓名：周圆</div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
    }
  },
  methods: {
    handleWheel(event) {
      // console.log('child wheel');
      // event.stopPropagation();
    },
    handleKeyDown(event) {
    //   console.log('child keydown');
    //   event.stopPropagation();
    }
  }
}
</script>