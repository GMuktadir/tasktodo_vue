<script setup>
import { reactive, watch } from 'vue';
const formData=reactive({
  name:'',
  email:'',
  password:''
});
const errors=reactive({
  name:'',
  email:'',
  password:''
});
  // Name validation
watch(()=> formData.name, (newVal)=>{
  if(newVal.length < 5){
    errors.name='Name must be at least 5 characters long.';
  } else {
    errors.name='';
  }
});
// Email validation
watch(()=>formData.email,(newVal)=>{
const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if(newVal.length===0){
  errors.email='Email is required.';
}else if(!emailPattern.test(newVal)){
  errors.email='Invalid email format.';
}else{
  errors.email='';
}
});
// Password validation
watch(()=>formData.password,(newVal)=>{
  if(newVal.length<8){
    errors.password='Password must be at least 8 characters long.';
  }else{
    errors.password='';
  }
});
</script>

<template>
  <div>
 <div>
  <h2>Registration</h2>
  <label for="">Name</label>
  <input v-model="formData.name" type="text" placeholder="your name">
  <p v-if="errors.name">msg:{{ errors.name }}</p>
  </div>
  <br> <div>
  <label for="">Email</label>
  <input v-model="formData.email" type="text" placeholder="your email">
  <p v-if="errors.email">msg:{{ errors.email }}</p>
  </div>
  <br>
  <div>
  <label for="">Password</label>
  <input v-model="formData.password" type="password" placeholder="your password">
  <p v-if="errors.password">msg:{{ errors.password }}</p>
  <br>
  <button type="submit">Submit</button>
  </div>
 </div>



</template>

<style scoped>

</style>
