<template>
    <article class="card">
        <header class="card__discount">
            {{ discountTitle }}
        </header>

        <figure class="card__image">
            <img src="../assets/model.png" :alt="$t('product_card.image.alt')" />
        </figure>

        <section class="card__description">
            <p class="card__description__title">{{ product.title }}</p>
            <p class="card__description__owner">{{ product.owner }}</p>
            <p class="card__description__old_value">{{ oldValueTitle }}</p>
            <p class="card__description__new_value">{{ newValue }}</p>
            <p class="card__description__seller">{{ selledBy }}</p>
        </section>

        <footer class="card__button">
            <UnnnicButton class="card__button__add" v-if="!quantityInCart" iconLeft="add" @click="addToCart(props.product)">
                {{ $t('product_card.add_to_cart') }}
            </UnnnicButton>

            <ItemCounter class="card__button__counter" v-else :quantity="quantityInCart" @increment="addToCart(props.product)"
                @decrement="decrementQuantity(props.product)" />
        </footer>
    </article>
</template>


<script lang="ts" setup>
import type { ProductItem } from '../types/Cart';
import { addToCart, decrementQuantity } from '../utils/cart';
import ItemCounter from '../components/ItemCounter.vue'
import { computed } from 'vue';
import { useCartStore } from '../store/cart.store';
import { useI18n } from 'vue-i18n';


const { t } = useI18n();

const props = defineProps<{
    product: ProductItem
}>()

const discountTitle = `${props.product.discount}% ${t('discount')}`
const oldValueTitle = ` ${t('from')} ${t('currency')} ${props.product.oldValue},00`
const newValue = `${t('currency')} ${props.product.value},00`
const selledBy = `${t('selled_by')} ${props.product.seller}`

const cartStore = useCartStore();

const quantityInCart = computed(() => {
    const item = cartStore.items.find(i => i.id === props.product.id);
    return item ? item.qtd : 0;
});

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
    border: $unnnic-border-width-thinner solid $unnnic-color-neutral-soft;
    font-family: $unnnic-font-family-secondary;

    &__image {
        align-self: center;
    }

    &__discount {
        display: flex;
        padding: $unnnic-spacing-nano $unnnic-border-radius-md;
        justify-content: center;
        align-items: center;
        border-radius: 0 0 $unnnic-border-radius-md $unnnic-border-radius-md;
        background: $unnnic-color-aux-green-100;
        font-size: $unnnic-font-size-body-md;
        color: $unnnic-color-aux-green-900;
        align-self: flex-end;
        width: 100%;
    }

    &__description {
        flex: 1;

        &__title {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-overflow: ellipsis;
            color: $unnnic-color-neutral-black;
            white-space: normal;
            font-size: $unnnic-font-size-body-md;
        }

        &__owner,
        &__seller {
            color: $unnnic-color-neutral-clean;
            font-size: $unnnic-font-size-body-md;
        }

        &__old_value {
            color: $unnnic-color-neutral-cloudy;
            font-size: $unnnic-font-size-body-md;
            text-decoration: line-through;
        }

        &__new_value {
            color: $unnnic-color-weni-600;
            font-size: $unnnic-font-size-body-lg;
            font-weight: $unnnic-font-weight-bold;
        }
    }

    &__button {
        display: flex;
        width: 100%;

        &__add {
            width: 100%;
        }

        &__counter {
            width: 100%;
        }
    }
}
</style>
