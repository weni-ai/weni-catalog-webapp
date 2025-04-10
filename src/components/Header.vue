<template>
    <header class="header">
        <section class="header__title">
            <img class="title__logo" src="../assets/weni-logo.svg" alt="Weni logo" />
            <p class="title__text">{{ $t('header.title') }}</p>
        </section>
        <section class="header__cart">
            <img src="../assets/shopping_cart.svg" alt="" @click="toggleOpenCart" />
        </section>
    </header>
</template>

<script setup lang="ts">
const toggleOpenCart = () => {};
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
        gap: $unnnic-spacing-xs;

        @media (min-width: $tablet-width) {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
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