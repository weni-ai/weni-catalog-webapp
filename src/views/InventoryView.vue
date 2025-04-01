<template>
    <section class="inventory-view">
        <header class="inventory-view__header">
            <p class="inventory-view__header__title">Este produto possui poucos itens em estoque</p>
            <p class="inventory-view__header__subtitle">Se faltar, o que você deseja fazer?</p>
        </header>

        <section class="inventory-view__content">
            <article
                v-if="similarProducts.length > 0"
                class="inventory-view__content__items"
                v-for="item in similarProducts"
                :key="item.id"
            >
                <header class="inventory-view__content__items__title">
                    <unnnicRadio class="inventory-view__content__items__title__radio" :value="item.id" v-model="selectedItem">
                        <p class="inventory-view__content__items__title__radio__text">Alterar produto para</p>
                    </unnnicRadio>
                </header>
                <CartItem :product="{ item, qtd: 0 }" />
            </article>
        </section>

        <section class="inventory-view__replace">
            <div class="inventory-view__replace__radio">
                <unnnicRadio value="leave" v-model="selectedItem" />
                <p class="inventory-view__replace__title">Deixar a loja substituir</p>
            </div>
            <p class="inventory-view__replace__subtitle">A loja vai substituir por um produto similar</p>
        </section>

        <section class="inventory-view__refund">
            <div class="inventory-view__refund__radio">
                <unnnicRadio value="refund" v-model="selectedItem" />
                <p class="inventory-view__refund__title">Reembolsar valor</p>
            </div>
            <p class="inventory-view__refund__subtitle">A loja vai reembolsar o valor do produto</p>
        </section>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { CartItem as CartItemType } from '../types/Cart';
import type { ProductItem } from '../types/Cart';
import CartItem from '../components/CartItem.vue';
import { getSimilarProducts } from '../utils/cart';

const props = defineProps<{
    product: CartItemType
}>()

const similarProducts = getSimilarProducts(props.product.item);

const selectedItem = ref<ProductItem>(props.product.item);
</script>

<style scoped lang="scss">
.inventory-view {
    display: flex;
    flex-direction: column;
    gap: 16px;
    font-family: $unnnic-font-family-secondary;
    height: 100%;

    &__header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 8px;

        @media (min-width: $tablet-width) {
            align-items: flex-start;
        }

        &__title {
            font-size: 16px;
            font-weight: 600;
            color: $unnnic-color-neutral-black;
        }

        &__subtitle {
            font-size: 14px;
            color: $unnnic-color-neutral-dark;
        }
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: 16px;

        @media screen and (min-width: $tablet-width) {
            flex-direction: row;
        }

        &__items {
            display: flex;
            flex: 1;
            flex-direction: column;
            padding: 16px;
            border: 1px solid $unnnic-color-neutral-soft;
            border-radius: $unnnic-border-radius-sm;

            &__item {
                display: flex;
                flex-direction: column;
                gap: 16px;
            }

            &__title {
                display: flex;

                &__radio {
                    &__text {
                        font-weight: bold;
                        color: $unnnic-color-neutral-black;
                    }
                }

                @media (min-width: $tablet-width) {
                    display: flex;
                }
            }
        }
    }

    &__replace,
    &__refund {
        display: flex;
        flex-direction: column;
        border: 1px solid $unnnic-color-neutral-soft;
        border-radius: $unnnic-border-radius-sm;
        padding: $unnnic-spacing-xs;

        &__radio {
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        &__title {
            font-size: $unnnic-font-size-body-gt;
            font-weight: bold;
            color: $unnnic-color-neutral-darkest;
        }

        &__subtitle {
            font-size: $unnnic-font-size-body-md;
            color: $unnnic-color-neutral-cloudy;
            padding-left: 40px;

            @media (min-width: $tablet-width) {
                display: flex;
            }
        }
    }
}
</style>