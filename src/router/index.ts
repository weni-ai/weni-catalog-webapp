import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ProductsList from "../components/ProductsList.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/products',
            name: 'products-list',
            component: ProductsList,
        }
    ]
});

export default router;
