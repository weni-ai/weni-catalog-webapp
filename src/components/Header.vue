<template>
    <header class="header">
        <header class="header__title" @click="redirectToHome">
            <img class="header__title__logo" src="../assets/weni-logo.svg" alt="" />
            <p class="header__title__text">{{ $t('header.title') }}</p>
        </header>
        <section class="header__cart">
            <img src="../assets/shopping_cart.svg" alt="" @click="toggleOpenCart" />
        </section>
    </header>

    <UnnnicDrawer :modelValue="isOpenCart" :title="$t('cart.title')" :showCloseButton="true" @update:modelValue="isOpenCart = $event" @close="isOpenCart = false">
        <template #content>
            <CartView />
        </template>
    </UnnnicDrawer>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'; 
import { computed, ref } from 'vue';
import CartView from './CartView.vue';

const router = useRouter();
const isOpenCart = ref(false);
const innerWidth = computed(() => window.innerWidth);
const toggleOpenCart = () => {
    if(innerWidth.value < 768) {
        router.push('/cart');
    } else {
        isOpenCart.value = !isOpenCart.value;
    }
};

const redirectToHome = () => {
    router.push('/');
};
</script>

<style lang="scss">
.header {
    display: flex;
    align-items: center;
    gap: $unnnic-spacing-xs;
    padding: $unnnic-spacing-sm;
    background-color: $unnnic-color-weni-600;
    font-family: $unnnic-font-family-secondary;
    font-weight: $unnnic-font-weight-bold;
    color: $unnnic-color-neutral-white;
    position: relative;

    @media (min-width: $tablet-width) {
        justify-content: center;
        padding: $unnnic-spacing-md $unnnic-spacing-lg;
        gap: $unnnic-spacing-lg;
        align-self: stretch;
    }

    &__title {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        @media (min-width: $tablet-width) {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }

        &__logo {
            width: 24px;
        }

        &__text {
            margin-left: $unnnic-spacing-xs;
        }
    }

    &__cart {
        margin-left: auto;

        @media (min-width: $tablet-width) {
            position: absolute;
            right: $unnnic-spacing-md;
        }
    }
}
</style>