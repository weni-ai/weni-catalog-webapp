<template>
    <div class="home">
        <div class="home__search">
            <UnnnicInput v-model="searchInput" iconLeft="search-1" placeholder="Procurar produto" />
        </div>
        <div class="home__items" :style="{ paddingBottom: isDrawerOpen ? `${drawerHeight/2}px` : '16px' }">
            <ItemsList @showInventoryModal="showInventoryModal" />
        </div>
        <SummaryDrawer v-if="isMobile" :isOpen="isDrawerOpen" :itemCount="itemCount" :totalValue="totalValue" />
    </div>
    <InventoryModal v-if="pageType === 'desktop'" :product="{ item: inventoryProduct, qtd: 0 }" :open="open" @toggleModal="toggleModal" />
    <BottomDrawer v-if="pageType === 'mobile'" :isOpen="open" :itemCount="itemCount" :totalValue="totalValue" @close="toggleModal" >
        <InventoryView :product="{ item: inventoryProduct, qtd: 0 }" />
    </BottomDrawer>
</template>


<script lang="ts" setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { useCartStore } from '../store/cart.store';
import ItemsList from '../components/ItemsList.vue';
import SummaryDrawer from '../components/SummaryDrawer.vue';
import type { ProductItem } from '../types/Cart';
import InventoryModal from '../components/InventoryModal.vue';
import BottomDrawer from '../components/BottomDrawer.vue';
import InventoryView from '../views/InventoryView.vue';


const isMobile = ref(window.innerWidth < 768);
const open = ref(false);
const inventoryProduct = ref<ProductItem>({} as ProductItem);

const updateScreenSize = () => {    
    isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
    window.addEventListener('resize', updateScreenSize);
});

onUnmounted(() => {
    window.removeEventListener('resize', updateScreenSize);
});

const pageType = computed(() => (isMobile.value ? 'mobile' : 'desktop'));

const showInventoryModal = (product: ProductItem) => {
    inventoryProduct.value = product;
    open.value = true;
}

const searchInput = ref('');

const cartStore = useCartStore();

const cartItems = computed(() => cartStore.items);

const isDrawerOpen = computed(() => cartItems.value.length > 0);

const drawerHeight = 200; 

const itemCount = computed(() => {
    return cartItems.value.reduce((total, item) => total + item.qtd, 0);
});

const totalValue = computed(() => {
    return cartItems.value.reduce((total, item) => total + item.item.value * item.qtd, 0);
});

const toggleModal = () => {
    open.value = !open.value;
}
</script>


<style lang="scss">
.home{
    &__search{
        margin: $unnnic-spacing-xs;
        @media (min-width: $tablet-width) {
            margin: $unnnic-spacing-md $unnnic-spacing-lg 0 $unnnic-spacing-lg;
        }
    }
}
</style>