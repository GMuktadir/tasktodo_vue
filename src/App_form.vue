<script setup>
import { reactive } from 'vue';

const formData=reactive({
  userName:'',
  password:''
});
function onSubmit(){
  console.log(formData);
}
</script>

<template>
 <form @submit.prevent="onSubmit()">
  <h3>Login</h3>
  <label>User Name: {{ formData.userName }}</label> <br>
  <input v-model="formData.userName" type="text" placeholder="your name"> <br>
  <label>Password: {{ formData.password }}</label> <br>
  <input v-model="formData.password" type="password" placeholder="password">
  <br>
  <button type="submit">Submit</button>

 </form>

</template>

<style scoped>

</style>
