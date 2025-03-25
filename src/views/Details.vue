<template>
    <div class="details">
        <div class="details__search">
            <UnnnicInput
                v-model="searchInput"
                iconLeft="search-1"
                placeholder="Procurar produto"
            />
        </div>

        <div class="details__breadcrumb">
            <UnnnicBreadcrumb
                :crumbs="breadcrumbItems"
                @crumbClick="redirectTo"
            />
        </div>

        <div class="details__container">
            <div class="details__container__images">
                <Carousel :items="images">
                    <template #default="{ item }">
                        <img :src="item.src" :alt="item.alt" class="carousel-img" style="max-height: 100%; max-width: 440px; object-fit: cover;" />
                    </template>
                </Carousel>
            </div>

            <div v-if="!isWideScreen" class="details__container__about">
                <div class="details__container__about__title">
                    {{ selectedItem.title }}
                </div>

                <div class="details__container__about__price">
                    <div class="details__container__about__price__old">
                        de R${{ selectedItem.oldValue }},00 por
                    </div>
                    <div class="details__container__about__price__new">
                        R${{ selectedItem.value }},00
                    </div>
                </div>

                <div class="details__container__about__description">
                    {{ selectedItem.description }}
                </div>
                
                <div class="details__container__about__button">
                    <UnnnicButton iconRight="add-1" size="small" @click="handleAddToCart">
                        Adicionar ao carrinho
                    </UnnnicButton>
                    <ItemCounter class="details__container__about__button__counter" :quantity="quantityInCart" @increment="incrementQuantity" @decrement="decrementQuantity" />
                </div>
            </div>
        </div>
    </div>

    <div v-if="isWideScreen">
        <BottomDrawer :isOpen="true">
            <div class="drawer">
                <div class="drawer__text">
                    <div class="drawer__text__from">
                        de R${{ selectedItem.oldValue }},00 por
                    </div>
                    <div class="drawer__text__to">
                        R${{ selectedItem.value }},00
                    </div>
                </div>

                <div class="drawer__button">
                    <div class="drawer__button__add">
                        <UnnnicButton
                            iconRight="add-1"
                            size="small"
                            @click="handleAddToCart"
                        >
                            Add ao carrinho
                        </UnnnicButton>
                    </div>

                    <div v-if="quantityInCart" class="drawer__button__counter">
                        <ItemCounter
                            :quantity="quantityInCart"
                            @increment="incrementQuantity"
                            @decrement="decrementQuantity"
                        />
                    </div>
                </div>
            </div>
        </BottomDrawer>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

import Carousel from '../components/Carousel.vue';
import BottomDrawer from '../components/BottomDrawer.vue';
import ItemCounter from '../components/ItemCounter.vue';

import { addToCart } from '../utils/cart';
import { useItemsStore } from '../store/items.store';
import { useCartStore } from '../store/cart.store';

const router = useRouter();

const searchInput = ref('');
const itemsStore = useItemsStore();
const cartStore = useCartStore();

const selectedItem = itemsStore.getSelectedItem;

const breadcrumbItems = ref({
    0: { name: 'Home', path: '/' },
    1: { name: 'Página de produto', path: '/details' },
});

const images = ref([
    { src: "../src/assets/model.png", alt: "Imagem 1" },
    { src: "../src/assets/model.png", alt: "Imagem 1" },
    { src: "../src/assets/model.png", alt: "Imagem 1" },
]);

const windowWidth = ref(window.innerWidth);
window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth;
});
const isWideScreen = computed(() => windowWidth.value < 768);

const quantityInCart = computed(() => {
    const item = cartStore.items.find(i => i.id === selectedItem.id);
    return item ? item.qtd : 0;
});

function handleAddToCart() {
    addToCart(selectedItem);
}

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

function redirectTo(crumb: any) {
    router.push(crumb.path);
}
</script>

<style lang="scss" scoped>
.details {
    display: flex;
    width: 100%;
    height: calc(100vh - 60px);
    overflow-y: auto;
    flex-direction: column;
    padding: 0 24px 118px;
    font-family: $unnnic-font-family-secondary;
    -ms-overflow-style: none;
    scrollbar-width: 0;

    &::-webkit-scrollbar {
        width: 0;
        display: none;
    }

    &__search,
    &__breadcrumb {
        margin: 16px;

        @media (min-width: 768px) {
            margin: 24px 24px 0;
        }
    }

    &__container {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin: 24px;

        @media (min-width: 768px) {
            flex-direction: row;
            height: 100%;
        }

        &__images {
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
            margin: 0;

            @media (min-width: 768px) {
                .carousel-img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
        }

        &__about {
            display: flex;
            flex-direction: column;
            gap: 8px;
            margin-top: 16px;

            @media (min-width: 768px) {
                height: 100%;
                align-self: center;
                margin-top: 8px;
            }

            &__title {
                font-size: $unnnic-font-size-body-gt;
                font-weight: $unnnic-font-weight-bold;
            }

            &__price {
                display: flex;
                flex-direction: column;

                &__old {
                    font-size: $unnnic-font-size-body-md;
                    color: var(--color-neutral-cloudy, #67738B);
                    text-decoration: line-through;
                }

                &__new {
                    font-size: $unnnic-font-size-body-lg;
                    font-weight: $unnnic-font-weight-bold;
                    color: #028380;
                }
            }

            &__description {
                font-size: $unnnic-font-size-body-md;
                color: var(--color-neutral-cloudy, #67738B);
            }

            &__button {
                display: flex;
                flex-direction: row;
                gap: 8px;

                :deep(.unnnic-button) {
                    width: 100%;
                }

                &__counter {
                    display: flex;
                    width: 191px;
                }
            }
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

        &__counter {
            display: flex;
            width: 100%;
        }
    }
}
</style>
