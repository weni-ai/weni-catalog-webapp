<template>
    <article class="cart-item">
        <figure class="cart-item__image">
            <img class="cart-item__image__main" src="../assets/model.png" alt="{{ product.item.title }}">
            <figcaption class="cart-item__image__discount">
                <span class="cart-item__image__discount__text">{{ product.item.discount }}% {{ $t('item_card.discount') }}</span>
            </figcaption>
        </figure>
        <section class="cart-item__description">
            <p class="cart-item__description__title">{{ product.item.title }}</p>
            <address class="cart-item__description__seller">{{ $t('item_card.selled_by') }} {{ product.item.seller }}</address>
            <div class="cart-item__description__buy">
                <div class="cart-item__description__buy__price">
                    <del class="cart-item__description__buy__price__old">{{ $t('currency') }}{{ product.item.oldValue }}</del>
                    <strong class="cart-item__description__buy__price__new">{{ $t('currency') }} {{ product.item.value }}</strong>
                </div>
                <ItemCounter :quantity="quantityInCart" @increment="addToCart(product.item)" @decrement="reduceFromCart(product.item)" />
            </div>
        </section>
    </article>
</template>

<script setup lang="ts">
import ItemCounter from './ItemCounter.vue';
import { useCartStore } from '../store/cart.store';
import { computed } from 'vue';
import type { CartItem } from '../types/Cart';
import { addToCart, reduceFromCart } from '../utils/cart';

const props = defineProps<{
    product: CartItem
}>()

const cartStore = useCartStore();

const quantityInCart = computed(() => {
    const cartItem = cartStore.items.find(i => i.item.id === props.product.item.id);
    return cartItem ? cartItem.qtd : 0;
});

</script>

<style scoped lang="scss">
.cart-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: $unnnic-spacing-xs;
    align-items: center;
    font-family: $unnnic-font-family-secondary;
    margin: 1rem;

    &__image {
        display: flex;
        flex-direction: column;
        padding: $unnnic-spacing-xs;
        align-items: center;
        justify-content: center;
        width: 187px;

        &__main {
            width: 100%;
            height: 100%;
            border-radius: $unnnic-border-radius-md;
        }

        &__discount {
            display: flex;
            width: 100%;
            height: 100%;
            font-size: 10px;
            padding: $unnnic-spacing-xs;
            justify-content: center;
            align-items: center;
            border-radius: 0 0 $unnnic-border-radius-md $unnnic-border-radius-md;
            background-color: $unnnic-color-aux-green-100;
        }
    }

    &__description {
        display: flex;
        width: 100%;
        max-width: 193px;
        flex-direction: column;
        gap: $unnnic-spacing-xs;

        @media (min-width: $tablet-width) {
            max-width: 364px;
        }


        &__title {
            color: $unnnic-color-neutral-black;
        }

        &__seller {
            color: $unnnic-color-neutral-clean;
        }

        &__buy {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            gap: $unnnic-spacing-sm;

            &__price {
                display: flex;
                flex-direction: column;
                min-width: 65px;

                &__old {
                    color: $unnnic-color-neutral-clean;
                    text-decoration: line-through;
                    font-size: $unnnic-font-size-body-md;
                }

                &__new {
                    font-weight: $unnnic-font-weight-bold;
                    color: $unnnic-color-weni-600;
                }
            }
        }
        
        
    }
}
</style>