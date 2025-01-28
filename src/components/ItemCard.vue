<template>
    <div class="card">
        <div class="card__discount">
            {{ discountTitle }}
        </div>
        <div class="card__image">
            <img src="../assets/model.png" alt="">
        </div>
        <div class="card__description">
            <div class="card__description__title">{{ product.title }}</div>
            <div class="card__description__owner">{{ product.owner }}</div>
            <div class="card__description__old_value">{{ oldValueTitle }}</div>
            <div class="card__description__new_value">{{ newValue }}</div>
            <div class="card__description__seller">{{ selledBy }}</div>
        </div>
        <div class="card__button">
            <UnnnicButton v-if="!quantityInCart" iconLeft="add-1" @click="handleAddToCart">Adicionar</UnnnicButton>
            <ItemCounter v-else :quantity="quantityInCart" @increment="incrementQuantity"
                @decrement="decrementQuantity"></ItemCounter>
        </div>
    </div>
</template>

<script lang="ts" setup>
import type { ProductItem } from '../types/Cart';
import { addToCart } from '../utils/cart';
import ItemCounter from '../components/ItemCounter.vue'
import { computed } from 'vue';
import { useCartStore } from '../store/cart.store';

const props = defineProps<{
    product: ProductItem
}>()

const discountTitle = `${props.product.discount}% de desconto`
const oldValueTitle = ` de R$${props.product.oldValue},00`
const newValue = `R$${props.product.value},00`
const selledBy = `Vendido por ${props.product.seller}`

const cartStore = useCartStore();

const quantityInCart = computed(() => {
    const item = cartStore.items.find(i => i.id === props.product.id);
    return item ? item.qtd : 0;
});

function handleAddToCart() {
    addToCart(props.product);
}

function incrementQuantity() {
    addToCart(props.product);
}

function decrementQuantity() {
    const item = cartStore.items.find(i => i.id === props.product.id);
    if (item) {
        if (item.qtd > 1) {
            cartStore.updateItemQuantity(item.id, -1);
        } else {
            cartStore.removeItem(item.id);
        }
    }
}
</script>

<style lang="scss" scoped>
.card {
    display: flex;
    padding: 0 8px 16px;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;
    border-radius: 4px;
    border: 1px solid var(--color-neutral-soft, #E2E6ED);

    &__discount {
        display: flex;
        padding: 4px var(--border-radius-md, 8px);
        justify-content: center;
        align-items: center;
        border-radius: 0 0 var(--border-radius-md, 8px) var(--border-radius-md, 8px);
        background: var(--Green-color-aux-green-100, #C6F6D5);
        font-size: 10px;
        width: 100%;
    }

    &__description {
        &__title {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            color: var(--color-neutral-black, #272B33);
            white-space: normal;
            font-size: 14px;
            font-weight: 400;
            line-height: 22px;
        }

        &__owner,
        &__seller {
            color: var(--color-neutral-clean, #9CACCC);
            font-size: 12px;
            font-weight: 400;
            line-height: 20px;
        }

        &__old_value {
            color: var(--color-neutral-cloudy, #67738B);
            font-size: 10px;
            font-weight: 400;
            line-height: 20px;
            text-decoration: line-through;
        }

        &__new_value {
            color: #028380;
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;
        }
    }

    &__button {
        width: 100%;

        :deep(.unnnic-button) {
            width: 100%;
        }
    }
}
</style>
