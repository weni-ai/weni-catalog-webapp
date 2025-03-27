import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Details from "../views/Details.vue";
import CartView from "../components/CartView.vue";
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
            path: '/cart',
            name: 'cart',
            component: CartView,
            props: () => {
                return {
                    items: [
                        {
                            id: 1,
                            title: "Cloridrato de Sertralina 25mg 30 comprimidos Eurofarma Genérico",
                            description: "A Sertralina é um antidepressivo da classe dos inibidores seletivos da recaptação de serotonina (ISRS), indicado para o tratamento da depressão, transtorno de ansiedade generalizada, transtorno do pânico, TOC e estresse pós-traumático. Atua aumentando os níveis de serotonina no cérebro, promovendo melhora do humor e alívio dos sintomas da ansiedade.",
                            image: '',
                            owner: 'Europharma',
                            discount: 5,
                            seller: 'Farma X',
                            value: 164,
                            oldValue: 169,
                            quantity: 1
                        },
                    ]
                }
            }
        }
    ]
});

export default router;
