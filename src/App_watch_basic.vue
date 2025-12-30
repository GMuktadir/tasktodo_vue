<script setup>
import { watch,ref } from 'vue';

const name=ref('');
watch(name, (newVal, oldVal)=>{
  console.log(`name changed from ${oldVal} to ${newVal}`);
});
</script>

<template>
 <div>
  <h2>Enter your name:</h2>
  <input v-model="name" type="text" placeholder="your name">
  <p>Your name is {{ name }}</p>
 </div>



</template>

<style scoped>

</style>
