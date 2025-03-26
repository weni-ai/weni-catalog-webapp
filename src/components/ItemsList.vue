<template>
    <div class="items">
        <ItemCard v-for="item in itemsList" :key="item.id" :product="item" />
    </div>
</template>

<script setup lang="ts">
import { itemsList } from '../mocks';
import ItemCard from './ItemCard.vue';


</script>

<style lang="scss">
.items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0px 8px;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;

    @media (min-width: $tablet-width) {
        grid-template-columns: repeat(5, 1fr);
        padding: 24px 32px 0px 32px;
    }
}
</style>