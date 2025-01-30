<template>
    <div class="details">
        <div class="details__search">
            <UnnnicInput v-model="searchInput" iconLeft="search-1" placeholder="Procurar produto" />
        </div>
        <div class="details__images">
            <Carousel :items="images">
                <template #default="{ item }">
                    <img :src="item.src" :alt="item.alt" class="carousel-img" />
                </template>
            </Carousel>
        </div>
        <div class="details__about">
            <div class="details__about__title">
                {{ selectedItem.title }}
            </div>
            <div class="details__about__description">
                {{ selectedItem.description }}
            </div>
        </div>
    </div>
    <BottomDrawer :isOpen="true">
        <div class="drawer">
            <div class="drawer__text">
                <div class="drawer__text__from">
                    de R${{ selectedItem.oldValue }},00 por
                </div>
                <div class="drawer__text__to">R${{ selectedItem.value }},00</div>
            </div>
            <div class="drawer__button">
                <div class="drawer__button__add">
                    <UnnnicButton iconRight="add-1" size="small" @click="handleAddToCart">Add ao carrinho</UnnnicButton>
                </div>
                <div v-if="quantityInCart" class="drawer__button__counter">
                    <ItemCounter :quantity="quantityInCart" @increment="incrementQuantity"
                        @decrement="decrementQuantity">
                    </ItemCounter>
                </div>
            </div>
        </div>
    </BottomDrawer>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import Carousel from '../components/Carousel.vue';
import { useItemsStore } from '../store/items.store';
import BottomDrawer from '../components/BottomDrawer.vue';
import ItemCounter from '../components/ItemCounter.vue';
import { addToCart } from '../utils/cart';
import { useCartStore } from '../store/cart.store';



const images = ref([
    { src: "../src/assets/model.png", alt: "Imagem 1" },
    { src: "../src/assets/model.png", alt: "Imagem 1" },
    { src: "../src/assets/model.png", alt: "Imagem 1" },
]);

const searchInput = ref('');

const itemsStore = useItemsStore();
const cartStore = useCartStore();

const selectedItem = itemsStore.getSelectedItem;

function handleAddToCart() {
    addToCart(selectedItem);
}

const quantityInCart = computed(() => {
    const item = cartStore.items.find(i => i.id === selectedItem.id);
    return item ? item.qtd : 0;
});
function incrementQuantity() {
    addToCart(selectedItem);
}

function decrementQuantity() {
    const item = cartStore.items.find(i => i.id === selectedItem.id);
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
.details {
    display: flex;
    width: 100%;
    height: calc(100vh - 60px);
    overflow-y: auto;
    flex-direction: column;
    padding: 0px 24px;
    padding-bottom: 118px;
    font-family: $unnnic-font-family-secondary;
    -ms-overflow-style: none;
    scrollbar-width: 0;

    &::-webkit-scrollbar {
        width: 0;
        display: none;
    }

    &__about {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 16px;

        &__title {
            font-size: $unnnic-font-size-body-gt;
            font-weight: $unnnic-font-weight-bold;
        }

        &__description {
            font-size: $unnnic-font-size-body-md;
            color: var(--color-neutral-cloudy, #67738B);
        }
    }

    &__search {
        margin: 16px;

        @media (min-width: 768px) {
            margin: 24px 32px 0 32px;
        }
    }
}

.drawer {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 8px;

    &__text {
        display: flex;
        flex-direction: row;
        gap: 8px;
        justify-content: center;
        align-items: center;

        &__from {
            font-size: $unnnic-font-size-body-md;
            color: var(--color-neutral-clean, #9CACCC);
            text-decoration: line-through;
        }

        &__to {
            font-size: $unnnic-font-size-body-lg;
        }

    }

    &__button {
        display: flex;
        width: 100%;
        justify-content: center;
        gap: 8px;

        &__add {
            display: flex;
            width: 100%;
            :deep(.unnnic-button) {
                width: 100%;
            }
        }

        &__counter{
            display: flex;
            width: 100%;
        }

    }
}
</style>