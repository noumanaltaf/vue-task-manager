import { createRouter, createWebHistory } from 'vue-router';

import About from '../components/views/About';
import Home from '../components/views/Home';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
];

export default createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});
