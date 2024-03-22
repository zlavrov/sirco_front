import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Language from '../views/Language.vue'
import Course from '@/views/Course.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
        meta: {
            title: "Home",
            requiresAuth: false,
        },
    },
    {
        path: '/language/:id',
        name: 'Language',
        component: Language,
        props: true,
        meta: {
            title: "View Language Page",
            requiresAuth: false,
        }
    },
    {
        path: '/course',
        name: 'Course',
        component: Course,
        props: true,
        meta: {
            title: "View Course Page",
            requiresAuth: false,
        }
    },
    {
        path: '/about',
        name: 'about',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
