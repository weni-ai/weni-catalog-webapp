<template>
    <div class="items" >
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