<script setup>
import { onMounted, ref } from 'vue';
  const posts=ref([]);
  
  onMounted( async()=>{
    const apiData= await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
    posts.value= await apiData.json();
    // console.log(posts.value);
  })
</script>

<template>
    <h3>Post from api</h3>
    <article v-for="post in posts" :key="post.id">
        <h2> <b>{{ post.title }}</b></h2>
        <p>
            {{ post.body }}
        </p>
    </article>
</template>

<style scoped>
    h2 {
        color: #a50d0d;
        font-weight: bold;
        text-align: justify;
        text-decoration: underline;
    }
    p {
        font-size: 14px;
        color: #3b3a3a;
        text-align: justify;
    }
</style>