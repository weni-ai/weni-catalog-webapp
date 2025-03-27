<template>
    <div class="card">
        <div class="card__discount">
            {{ discountTitle }}
        </div>
        <div class="card__content" @click="redirectToDetails">
            <div class="card__content__image">
                <img src="../assets/model.png" alt="">
            </div>
            <div class="card__content__description">
                <div class="card__content__description__title">{{ product.title }}</div>
                <div class="card__content__description__owner">{{ product.owner }}</div>
                <div class="card__content__description__old_value">{{ oldValueTitle }}</div>
                <div class="card__content__description__new_value">{{ newValue }}</div>
                <div class="card__content__description__seller">{{ selledBy }}</div>
            </div>
        </div>
        <div class="card__button">
            <UnnnicButton v-if="!quantityInCart" iconLeft="add-1" @click="addToCart(props.product)">{{ $t('item_card.add_to_cart') }}</UnnnicButton>
            <ItemCounter v-else :quantity="quantityInCart" @increment="addToCart(props.product)"
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
import { useRouter } from 'vue-router';
import { useItemsStore } from '../store/items.store';

const props = defineProps<{
    product: ProductItem
}>()

const router = useRouter()
const itemStore = useItemsStore()

function redirectToDetails() {
    itemStore.selectItem(props.product)

    router.push('/details')
}

const discountTitle = `${props.product.discount}% ${t('item_card.discount')}`
const oldValueTitle = ` ${t('item_card.old_value')} ${t('currency')}${props.product.oldValue},00`
const newValue = `${t('currency')}${props.product.value},00`
const selledBy = `${t('item_card.selled_by')} ${props.product.seller}`

const cartStore = useCartStore();

const quantityInCart = computed(() => {
    const item = cartStore.items.find(i => i.id === props.product.id);
    return item ? item.qtd : 0;
});

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
    flex-direction: column;
    gap: $unnnic-spacing-xs;
    padding: 0 $unnnic-spacing-sm $unnnic-spacing-sm;
    flex: 1 0 0;
    height: 100%;
    border-radius: $unnnic-border-radius-sm;
    border: 1px solid $unnnic-color-neutral-soft;
    font-family: $unnnic-font-family-secondary;
    cursor: pointer;



    &__discount {
        display: flex;
        padding: 4px $unnnic-border-radius-md;
        justify-content: center;
        align-items: center;
        border-radius: 0 0 $unnnic-border-radius-md $unnnic-border-radius-md;
        background: $unnnic-color-aux-green-100;
        font-size: $unnnic-font-size-body-md;
        color: $unnnic-color-aux-green-900;
        align-self: flex-end;
        width: 100%;
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: $unnnic-spacing-xs;

        &__description {
            flex: 1;
            gap: $unnnic-spacing-sm;

            &__title {
                flex: 1;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
                text-overflow: ellipsis;
                color: $unnnic-color-neutral-black;
                white-space: normal;
                font-size: $unnnic-font-size-body-lg;
                height: auto;

                @media (min-width: $tablet-width) {
                    min-height: 3em;
                }
            }

            &__owner,
            &__seller {
                color: $unnnic-color-neutral-clean;
                font-size: $unnnic-font-size-body-md;

                @media (min-width: $tablet-width) {
                    justify-self: center;
                }
            }

            &__old_value {
                color: $unnnic-color-neutral-cloudy;
                font-size: $unnnic-font-size-body-md;
                text-decoration: line-through;

                @media (min-width: $tablet-width) {
                    justify-self: center;
                }
            }

            &__new_value {
                color: $unnnic-color-weni-600;
                font-size: $unnnic-font-size-body-lg;
                font-weight: $unnnic-font-weight-bold;

                @media (min-width: $tablet-width) {
                    justify-self: center;
                }
            }
        }

        &__image {
            align-self: center;
        }
    }


    &__button {
        display: flex;
        width: 100%;
        height: 100%;
        align-items: flex-end;

        :deep(.unnnic-button) {
            width: 100%;
        }
    }
}
</style>
