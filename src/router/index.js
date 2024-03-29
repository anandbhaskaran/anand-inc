import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: 'home',
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/Home.vue'),
        meta: {
            layout: 'content',
        },
    },
    {
        path: '/assets/current-assets',
        name: 'current-assets',
        component: () => import('@/views/assets/CurrentAssets.vue'),
        meta: {
            layout: 'content',
        },
    },
    {
        path: '/assets/fixed-deposits',
        name: 'fixed-deposits',
        component: () => import('@/views/assets/FixedDeposits.vue'),
        meta: {
            layout: 'content',
        },
    },
    {
        path: '/assets/stocks',
        name: 'stocks',
        component: () => import('@/views/assets/Stocks.vue'),
        meta: {
            layout: 'content',
        },
    },
    {
        path: '/assets/mutual-funds',
        name: 'mutualFunds',
        component: () => import('@/views/assets/MutualFunds.vue'),
        meta: {
            layout: 'content',
        },
    },
    {
        path: '/assets/pms',
        name: 'pms',
        component: () => import('@/views/assets/PMS.vue'),
        meta: {
            layout: 'content',
        },
    },
    {
        path: '/login',
        name: 'auth-login',
        component: () => import('@/views/Login.vue'),
        meta: {
            layout: 'blank',
        },
    },
    {
        path: '*',
        redirect: 'error-404',
    },
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
});

export default router;
