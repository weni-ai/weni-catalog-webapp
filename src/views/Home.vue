<template>
    <div class="home">
        <section class="home__search">
            <UnnnicInput v-model="searchInput" iconLeft="search-1" placeholder="Procurar produto" />
        </section>
        <section class="home__items">
            <ProductsList/>
        </section>
        <SummaryDrawer v-if="isMobile" :isOpen="isDrawerOpen" :itemCount="itemCount" :totalValue="totalValue" />
    </div>      
</template>


<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useCartStore } from '../store/cart.store';
import ProductsList from '../components/ProductsList.vue';
import SummaryDrawer from '../components/SummaryDrawer.vue';

const isMobile = ref(window.innerWidth < 768);

const updateScreenSize = () => {
    isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
    window.addEventListener('resize', updateScreenSize);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateScreenSize);
});


const searchInput = ref('');

const cartStore = useCartStore();

const cartItems = computed(() => cartStore.items);

const isDrawerOpen = computed(() => cartItems.value.length > 0);

const drawerHeight = 200; 

const itemCount = computed(() => {
    return cartItems.value.reduce((total, item) => total + item.qtd, 0);
});

const totalValue = computed(() => {
    return cartItems.value.reduce((total, item) => total + item.price * item.qtd, 0);
});
</script>


<style lang="scss">
.home{
    &__search{
        margin: $unnnic-spacing-sm;
        @media (min-width: $tablet-width) {
            margin: $unnnic-spacing-md $unnnic-spacing-lg 0 $unnnic-spacing-lg;
        }
    }
}
</style>