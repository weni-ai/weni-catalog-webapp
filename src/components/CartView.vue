<template>
    <section class="cart">
        <header v-if="innerWidth < 768" class="cart__header">
            <p class="cart__header__title">Meu carrinho</p>
            <UnnnicButton class="cart__header__button" type="tertiary" size="small" @click="clearCart">Limpar carrinho
            </UnnnicButton>
        </header>

        <ul class="cart__items">
            <li class="cart__items__seller" v-for="(sellerItems, seller) in groupedItemsBySeller" :key="seller">
                <p class="cart__items__seller__title">Produtos entregues por {{ seller }}</p>
                <UnnnicDivider />
                <ul class="cart__items__seller__item">
                    <CartItem v-for="item in sellerItems" :key="item.item.id" :product="item" />
                </ul>
            </li>
        </ul>
    </section>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import CartItem from './CartItem.vue';
import { useCartStore } from '../store/cart.store';
import { clearCart } from '../utils/cart';
const cartStore = useCartStore();
const items = computed(() => cartStore.items);
const groupedItemsBySeller = computed(() => {
    return items.value.reduce((acc, item) => {
        const seller = item.item.seller;
        if (!acc[seller]) {
            acc[seller] = [];
        }
        acc[seller].push(item);
        return acc;
    }, {} as Record<string, typeof items.value>);
});
const innerWidth = ref(window.innerWidth);
</script>

<style scoped lang="scss">
.cart {
    display: flex;
    flex-direction: column;
    margin: 1rem;
    font-family: $unnnic-font-family-secondary;

    &__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: $unnnic-spacing-sm;

        &__title {
            color: $unnnic-color-neutral-black;
            font-weight: $unnnic-font-weight-bold;
        }

        :deep(.unnnic-button) {
            color: $unnnic-color-weni-600;
            font-weight: $unnnic-font-weight-bold;
        }
    }

    &__items {
        list-style: none;
        gap: 5rem;

        &__seller {
            border: 1px solid $unnnic-color-neutral-soft;
            border-radius: $unnnic-border-radius-md;
            display: flex;
            flex-direction: column;
            margin-bottom: $unnnic-spacing-sm;

            &__title {
                border-bottom: 1px solid $unnnic-color-neutral-soft;
                margin: 0;
                padding: $unnnic-spacing-sm;
                color: $unnnic-color-neutral-dark;
                font-size: $unnnic-font-size-body-lg;
            }

            &__item {
                display: flex;
                flex-direction: column;
                gap: 1rem;

                &__article {
                    display: flex;
                    gap: 1rem;

                    &__figure {
                        display: flex;
                        gap: 1rem;
                    }
                }

                &__details {
                    display: flex;
                    gap: 1rem;

                    &__price {
                        display: flex;
                        gap: 1rem;
                    }

                    &__quantity {
                        display: flex;
                        gap: 1rem;
                    }

                }
            }
        }


    }
}
</style>