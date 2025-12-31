<script setup>
    import { ref, reactive } from 'vue';
    const username = ref('');
    const email = ref('');  
    const contact = ref('');
    const password = ref('');   
    const confirmPassword = ref('');
    const userImage = ref('');

    const errors = reactive({
        username: '',
        email: '',
        contact: '',
        password: '',
        confirmPassword: '',
        userImage: ''
    });

function handleRegistration() {
  if(!validation()){
    alert('Please fix the errors before submitting the form.');
  }


}
function validation(){
    Object.keys(errors).forEach(key => delete errors[key])

    if(!username.value.trim())  errors.username = 'Username is required.'
    if(!email.value.trim())  errors.email = 'Email is required.' 
    if(!contact.value.trim())  errors.contact = 'Contact is required.' 
    if(!password.value.trim())  errors.password = 'Password is required.'    
    if(!confirmPassword.value.trim())  errors.confirmPassword = 'Confirm Password is required.' 
    if(password.value !== confirmPassword.value) errors.confirmPassword = 'Passwords do not match.', errors.password = 'Passwords do not match.'
    // if(!userImage.value) errors.userImage = 'User image is required.'

    return Object.keys(errors).length === 0;
} 
</script>

<template>
    <div class="mt-4">
        
        <div class="container">
            <div class="row">
                <div class="col-md-6">
                    <div class="card" style="width: 30rem;">
 
                            <div class="card-body">
                                <h5 class="card-title">Registration Here</h5>
                                                <form @submit.prevent="handleRegistration">
                                                    <div class="mb-4">
                                                        <label for="username" class="form-label">Username</label>
                                                        <input v-model="username" type="text" class="form-control" id="username" placeholder="Enter username">
                                                        <small class="text-danger" v-if="errors.username">{{ errors.username }}</small>
                                                    </div>

                                                    <div class="mb-4">
                                                        <label for="email" class="form-label">Email address</label>
                                                        <input v-model="email" type="email" class="form-control" id="email" placeholder="Enter email">
                                                        <small class="text-danger" v-if="errors.email">{{ errors.email }}</small>
                                                    </div>

                                                    <div class="mb-4">
                                                        <label for="contact" class="form-label">Contact</label>
                                                        <input v-model="contact" type="text" class="form-control" id="contact" placeholder="Enter contact">
                                                        <small class="text-danger" v-if="errors.contact">{{ errors.contact }}</small>
                                                    </div>

                                                    <div class="mb-4">
                                                        <label for="password" class="form-label">Password</label>
                                                        <input v-model="password" type="password" class="form-control" id="password" placeholder="Enter password">
                                                        <small class="text-danger" v-if="errors.password">{{ errors.password }}</small>
                                                    </div>
                                                    <div class="mb-4">
                                                        <label for="confirmPassword" class="form-label">Confirm Password</label>
                                                        <input v-model="confirmPassword" type="password" class="form-control" id="confirmPassword" placeholder="Confirm password">
                                                        <small class="text-danger" v-if="errors.confirmPassword">{{ errors.confirmPassword }}</small>
                                                    </div>
                                                    <div class="mb-4">
                                                        <label for="userImage" class="form-label">Image</label>
                                                        <input type="file" class="form-control" id="userImage" @change="fileUpload">
                                                    </div>
                                                    <button type="submit" class="btn btn-primary">Register</button>
                                                </form>
                                </div>
                            </div>


                </div>
            </div>
        </div>


    </div>

</template>

<style scoped>  

</style>