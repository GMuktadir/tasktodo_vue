<script setup>
  import {reactive, ref} from 'vue';
  const firstName=ref('Golam');
  const lastName=ref('Muktadir');

  const fullName= ()=> {
    console.log('without computed');
    return `${firstName.value} ${lastName.value}`;
  };

</script>

<template>
  <h1>{{ fullName()}}</h1>
  <br>
  <h1>{{ fullName()}}</h1>
  <br>
  <h1>{{ fullName()}}</h1>

</template>

<style scoped>

</style>
