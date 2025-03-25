<template>
    <header class="header">
        <div class="header__title">
            <img class="header__title__logo" src="../assets/weni-logo.svg" alt="" />
            <p class="header__title__text">Weni Store</p>
        </div>
        <div class="header__cart">
            <img src="../assets/shopping_cart.svg" alt="" @click="teste" />
        </div>
    </header>
</template>

<script setup lang="ts">
const teste = () => {
    console.log("teste");
};
</script>

<style lang="scss">
.header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 16px;
    background-color: #00a49f;
    font-family: $unnnic-font-family-secondary;
    font-weight: bold;
    color: white;
    position: relative;

    @media (min-width: 768px) {
        justify-content: center;
        padding: 24px 32px;
        gap: 32px;
        align-self: stretch;
    }

    &__title {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        @media (min-width: 768px) {
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }

        &__logo {
            width: 24px;
        }

        &__text {
            margin-left: 8px;
        }
    }

    &__cart {
        margin-left: auto;

        @media (min-width: 768px) {
            position: absolute;
            right: 16px;
        }
    }
}
</style>