<template>
    <div class="inventory-item">
        <div class="inventory-item__content">
            <CartItem :product="{ item, qtd: 0 }" />
        </div>
    </div>
</template>

<script setup lang="ts">
import CartItem from './CartItem.vue';
import type { ProductItem } from '../types/Cart';

defineProps<{
    item: ProductItem
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

