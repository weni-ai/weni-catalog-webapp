<template>
    <section class="details">
        <header class="details__search">
            <UnnnicInput v-model="searchInput" iconLeft="search-1" placeholder="Procurar produto"
                aria-label="Campo de busca de produto" />
        </header>

        <nav class="details__breadcrumb" aria-label="Navegação por categorias">
            <UnnnicBreadcrumb :crumbs="breadcrumbItems" @crumbClick="redirectTo" />
        </nav>

        <main class="details__container">
            <section class="details__container__images" aria-label="Imagens do produto">
                <Carousel :items="selectedItem.images">
                    <template #default="{ item }">
                        <img :src="item.src" :alt="item.alt" class="carousel-img"
                            style="max-height: 100%; max-width: 440px; object-fit: cover;" />
                    </template>
                </Carousel>
            </section>

            <section class="details__container__about" aria-label="Informações do produto">
                <h1 class="details__container__about__title">
                    {{ selectedItem.title }}
                </h1>

                <div class="details__container__about__price">
                    <p class="details__container__about__price__old">
                        {{ $t('item_card.from') }} {{ $t('currency') }}{{ selectedItem.oldValue }},00
                    </p>
                    <p class="details__container__about__price__new">
                        {{ $t('item_card.to') }} {{ $t('currency') }}{{ selectedItem.value }},00
                    </p>
                </div>

                <p class="details__container__about__description">
                    {{ selectedItem.description }}
                </p>

                <footer class="details__container__about__button" v-if="!isWideScreen">
                    <UnnnicButton iconRight="add-1" size="small" @click="addToCart(selectedItem)">
                        {{ $t('item_card.add_to_cart') }}
                    </UnnnicButton>

                    <ItemCounter class="details__container__about__button__counter" :quantity="quantityInCart"
                        @increment="addToCart(selectedItem)" @decrement="reduceFromCart(selectedItem)" />
                </footer>
            </section>
        </main>

        <BottomDrawer v-if="isWideScreen" :isOpen="true">
            <aside class="drawer" aria-label="Resumo de compra">
                <div class="drawer__text">
                    <p class="drawer__text__from">
                        de R${{ selectedItem.oldValue }},00 por
                    </p>
                    <p class="drawer__text__to">
                        R${{ selectedItem.value }},00
                    </p>
                </div>

                <div class="drawer__button">
                    <div class="drawer__button__add">
                        <UnnnicButton iconRight="add-1" size="small" @click="addToCart(selectedItem)">
                            {{ $t('item_card.add_to_cart') }}
                        </UnnnicButton>
                    </div>

                    <div v-if="quantityInCart" class="drawer__button__counter">
                        <ItemCounter :quantity="quantityInCart" @increment="addToCart(selectedItem)"
                            @decrement="reduceFromCart(selectedItem)" />
                    </div>
                </div>
            </aside>
        </BottomDrawer>
    </section>
</template>


<script lang="ts" setup>
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';

import Carousel from '../components/Carousel.vue';
import BottomDrawer from '../components/BottomDrawer.vue';
import ItemCounter from '../components/ItemCounter.vue';

import { addToCart, reduceFromCart } from '../utils/cart';
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

const windowWidth = ref(window.innerWidth);
window.addEventListener('resize', () => {
    windowWidth.value = window.innerWidth;
});

const tabletWidth = 768;

const isWideScreen = computed(() => windowWidth.value < tabletWidth);

const quantityInCart = computed(() => {
    const item = cartStore.items.find(i => i.item.id === selectedItem.id);
    return item ? item.qtd : 0;
});

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
    padding-bottom: 100px;
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

        @media (min-width: $tablet-width) {
            margin: 24px 24px 0;
        }
    }

    &__container {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin: 24px;

        @media (min-width: $tablet-width) {
            flex-direction: row;
            height: 100%;
        }

        &__images {
            display: flex;
            width: 100%;
            justify-content: center;
            align-items: center;
            margin: 0;

            @media (min-width: $tablet-width) {
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

            @media (min-width: $tablet-width) {
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

            @media (min-width: $tablet-width) {
                flex-direction: column;
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
