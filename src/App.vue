<script setup >
  

</script>

<template>
<h3> <i>To Do Application using Vue.js</i> </h3> <br>
<nav>
  <router-link to="/">Home</router-link> |
  <router-link to="/about">About</router-link> |
  <router-link to="/profile">Profile</router-link>|
  <router-link to="/post">Post</router-link>|
  <router-link to="/registration">Registration</router-link>
</nav>
<main>
  <router-view></router-view>
</main>
</template>

<style scoped>

</style>
