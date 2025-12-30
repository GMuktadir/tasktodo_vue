<script setup>
  import {computed, reactive, ref} from 'vue';
  const firstName=ref('Golam');
  const lastName=ref('Muktadir');

  const fullName= computed(()=> {
    console.log('using computed');
    return `${firstName.value} ${lastName.value}`;
  });

</script>

<template>
  <h1>{{ fullName}}</h1>
  <br>
  <h1>{{ fullName}}</h1>
  <br>
  <h1>{{ fullName}}</h1>

</template>

<style scoped>

</style>
