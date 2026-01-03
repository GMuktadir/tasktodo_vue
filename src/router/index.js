import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Profile from '../views/Profile.vue'
import Post from '../views/Post.vue'
import { createRouter,createWebHistory } from "vue-router"
import Registration from '../views/Registration.vue'
import Login from '../views/Login.vue'
import { useAuthStore } from '@/stores/auth'
import Dashboard from '@/views/admin/Dashboard.vue';

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
    },
    {
        path:'/admin/dashboard',
        name:'Dashboard',
        component: Dashboard,
        meta: { requireAuth: true }
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})
//checking auth for protected routes
router.beforeEach((to, from, next) => {
    // const isAuthenticated = localStorage.getItem('access_token') ? true : false;
    const authStore = useAuthStore();
    if (to.meta.requireAuth && !authStore.isAuthenticated) {
        next('/login');
    } else {
        next();
    }
});
export default router