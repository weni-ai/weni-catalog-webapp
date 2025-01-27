import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import ItemsList from "../components/ItemsList.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '/items',
            name: 'items-list',
            component: ItemsList,
        }
    ]
});

export default router;
