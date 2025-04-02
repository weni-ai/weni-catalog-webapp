<template>
    <div class="items">
        <ItemCard v-for="item in itemsList" :key="item.id" :product="{ item: { ...item, availableQuantity: item.availableQuantity ?? 0, category: item.category ?? '' }, qtd: 0 }" @showInventoryModal="showInventoryModal" />
    </div>
</template>

<script setup lang="ts">
import { itemsList } from '../mocks';
import ItemCard from './ItemCard.vue';
import type { ProductItem } from '../types/Cart';
const emit = defineEmits(['showInventoryModal'])

function showInventoryModal(product: ProductItem) {
    emit('showInventoryModal', product)
}
</script>

<style lang="scss">
.items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0px $unnnic-spacing-xs;
    align-items: flex-start;
    gap: $unnnic-spacing-xs;
    align-self: stretch;

    @media (min-width: $tablet-width) {
        grid-template-columns: repeat(5, 1fr);
        padding: $unnnic-spacing-md $unnnic-spacing-lg 0px $unnnic-spacing-lg;
    }
}
</style>