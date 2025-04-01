<template>
    <div class="inventory-view">
        <div class="inventory-view__header">
            <p class="inventory-view__header__title">Este produto possui poucos itens em estoque</p>
            <p class="inventory-view__header__subtitle">Se faltar, o que você deseja fazer?</p>
        </div>

        <div v-if="similarProducts.length > 0" class="inventory-view__content">
            <div class="inventory-view__content__title">
                <unnnicRadio :value="props.product.item.id" v-model="selectedItem">
                    <p>Alterar produto para</p>
                </unnnicRadio>
            </div>
            <InventoryItem class="inventory-view__items" :items="similarProducts as ProductItem[]" />
        </div>
        <div class="inventory-view__replace">
            <div class="inventory-view__replace__radio">
                <unnnicRadio value="leave" v-model="selectedItem" />
                <p class="inventory-view__replace__title">Deixar a loja substituir</p>
            </div>
            <p class="inventory-view__replace__subtitle">A loja vai substituir por um produto similar</p>
        </div>

        <div class="inventory-view__replace">
            <div class="inventory-view__replace__radio">
                <unnnicRadio value="refund" v-model="selectedItem" />
                <p class="inventory-view__replace__title">Reembolsar valor</p>
            </div>
            <p class="inventory-view__replace__subtitle">A loja vai reembolsar o valor do produto</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import InventoryItem from '../components/InventoryItem.vue';
import type { CartItem as CartItemType } from '../types/Cart';
import type { ProductItem } from '../types/Cart';
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

    &__content {
        display: flex;
        flex-direction: column;
        gap: 16px;
        border: 1px solid $unnnic-color-neutral-soft;
        border-radius: $unnnic-border-radius-sm;
        padding: 16px;

        &__title {
            font-weight: bold;
            color: $unnnic-color-neutral-black;

            p {
                font-weight: bold;
            }
        }
    }


    &__header {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 8px;
        font-family: $unnnic-font-family-secondary;

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

    &__replace {
        display: flex;
        flex-direction: column;
        border: solid 1px $unnnic-color-neutral-soft;
        border-radius: $unnnic-border-radius-sm;
        padding: 16px;

        &__radio {
            display: flex;
            flex-direction: row;
            align-items: center;
        }

        &__title {
            font-size: $unnnic-font-size-body-gt;
            color: $unnnic-color-neutral-darkest;
            font-weight: bold;
        }

        &__subtitle {
            color: $unnnic-color-neutral-cloudy;
            font-size: $unnnic-font-size-body-md;
            padding-left: 40px;
        }

    }
}
</style>