<script setup>

 import { useAuthStore } from '@/stores/auth';
 import { ref } from 'vue';
const auth = useAuthStore();

const email = ref('');
const password = ref('');

 const handleLogin = async () => {
    const loginData = {
        email: email.value,
        password: password.value
    };

    await auth.login(loginData);
 }

</script>


<template>
    <div>
        <h2>Login Page</h2>
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Login here</h5>
                <form @submit.prevent="handleLogin">
                    <div class="mb-3">
                        <label for="exampleInputEmail1" class="form-label">Email address</label>
                        <input 
                        type="email" 
                        class="form-control" 
                        v-model="email">
                        <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div class="mb-3">
                        <label for="exampleInputPassword1" class="form-label">Password</label>
                        <input 
                        type="password" 
                        class="form-control"
                        v-model="password">
                    </div>
                    
                    <button type="submit" class="btn btn-primary">Login</button>
                </form>
            </div>

        </div>
    </div>
</template>

<style scoped>

</style>