import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ProductsList from "../components/ProductsList.vue";
import Details from "../views/Details.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/details',
            name: 'details',
            component: Details
        },
        {
            path: '/products',
            name: 'products-list',
            component: ProductsList,
        }
    ]
});

export default router;
