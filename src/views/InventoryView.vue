<template>
    <div>
        <p>Este produto possui poucos itens em estoque</p>
        <p>Se faltar, o que você deseja fazer?</p>

        <div v-for="product in similarProducts" :key="product.id">
            <CartItem :product="{ item: { ...product, availableQuantity: product.availableQuantity ?? 0, category: product.category ?? '' }, qtd: 0 }" />
        </div>
    </div>
</template>

<script setup lang="ts">
import CartItem from '../components/CartItem.vue';
import type { CartItem as CartItemType } from '../types/Cart';
import { getSimilarProducts } from '../utils/cart';

const props = defineProps<{
    product: CartItemType
}>()

const similarProducts = getSimilarProducts(props.product.item);
</script>

<style scoped>

</style>