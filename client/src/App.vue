<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import './assets/css/font.css';

export default {
  name: 'app'
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
  font-family: Lato, "Microsoft YaHei", sans-serif;
  font-weight: 400;
}
ul, li {
  list-style: none;
  margin: 0;
  padding: 0;
}
div:focus {
  outline: none;
}
</style>
