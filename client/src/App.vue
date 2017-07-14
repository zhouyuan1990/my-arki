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
h1, h2, h3, h4, h5 {
  padding: 0;
  margin: 0;
  font-weight: 500；
}
h1 {
  font-size: 5rem;
}
h2 {
  font-size: 4rem;
}
h3 {
  font-size: 3rem;
}
h4 {
  font-size: 2rem;
}
h5 {
  font-size: 1rem;
}
</style>
