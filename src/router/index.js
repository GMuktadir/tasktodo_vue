import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Profile from '../views/Profile.vue'
import Post from '../views/Post.vue'
import { createRouter,createWebHistory } from "vue-router"
import Registration from '../views/Registration.vue'
import Login from '../views/Login.vue'

const routes = [
    {
        path:'/',
        name:'Home',
        component: Home
    },
    {
        path:'/about',
        name:'About',
        component: About
    },
    {
        path:'/profile',
        name:'Profile',
        component: Profile
    },
    {
        path:'/post',
        name:'Post',
        component: Post
    },
    {
        path:'/registration',
        name:'Registration',
        component: Registration
    },
    {
        path:'/login',
        name:'Login',
        component: Login
    }

]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router