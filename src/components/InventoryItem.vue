<template>
    <div class="inventory-item">
        <div class="inventory-item__content" v-for="item in items" :key="item.id">
            <CartItem :product="{ item, qtd: 0 }" />
        </div>
    </div>
</template>

<script setup lang="ts">
import CartItem from './CartItem.vue';
import type { ProductItem } from '../types/Cart';

defineProps<{
    items: ProductItem[]
}>()

</script>

<style scoped lang="scss">
.inventory-item {
    display: flex;
    flex-direction: column;

    &__content {
        display: flex;
        flex-direction: column;
        width: 100%;

        &__title {
            display: flex;
            align-items: center;
        }
    }
}
</style>

