<script setup>

 import { useAuthStore } from '@/stores/auth';
const auth = useAuthStore();

 const handleLogin = async () => {
    const loginData = {
        email: 'gmuktadir@gmail.com',
        password: 'password'
    };

    await auth.login(loginData);
 }

</script>


<template>
    <div>
        <h2>Login Page</h2>
        <button type="button" class="btn btn-sm btn-info" @click="handleLogin">Login</button>
    </div>
</template>

<style scoped>

</style>