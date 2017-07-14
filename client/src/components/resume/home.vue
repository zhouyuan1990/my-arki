<template>
  <div class="resume-home">
    <div class="main">
      <div class="block">
        <h1>{{ messages.home.sentence }}</h1>
        <h3>{{ messages.title.home }}</h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  props: {
    messages: {
      type: Object,
      default: {}
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style scoped>
.resume-home {
  height: 100%;
  background-image: url(../../assets/resume/bg2.jpg);
  background-size: cover;
  background-position: center;
}
.main {
  position: absolute;
  width: 100%;
  top: 50%;
  transform: translateY(-80%);
  background-color: rgba(255,255,255,0.3);
  padding: 2rem 0 3rem 0;
  color: #fff;
}
.block {
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
  text-align: right;
}
h1 {
  color: #474747;
  text-shadow: 1px 2px #2f2f2f, 2px 4px #fff;
  opacity: 0.85;
}
.en h1 {
  font-style: italic;
}
</style>