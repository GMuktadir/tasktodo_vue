<script setup>
  import {reactive, ref} from 'vue';

  // const count=ref(10);
  // const cnt=ref(5);
  const count=reactive({
    cnt1:0,
    cnt2:0
  
  });

  function increment(){
    count.cnt1++;
    count.cnt2++;
  }
   function decrement(){
    count.cnt2--;
    count.cnt1++;
  }
</script>

<template>
<h1>Counter {{ count.cnt1 }}</h1>
<br>
<h1>Counter {{ count.cnt2 }}</h1>
<br>
<button @click="increment()">increment</button>
<button @click="decrement()">decrement</button>

</template>

<style scoped>

</style>
