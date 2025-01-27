<template>
    <header class="header">
        <div class="header__title">
            <img class="header__title__logo" src="../assets/weni-logo.svg" alt="">
            <p class="header__title__text">Weni Store</p>
        </div>
        <div class="header__cart">
                <img src="../assets/shopping_cart.svg" alt="" @click="teste">
        </div>
    </header>
</template>

<script setup lang="ts">
const teste = () => {
    console.log('teste')
}
</script>

<style lang="scss">
.header {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 16px 16px 12px 16px;
    background-color: #00A49F;
    font-family: $unnnic-font-family-secondary;
    font-weight: bold;
    color: white;
    justify-content: space-between;

    &__title {
        display: flex;
        flex-direction: row;

        &__logo {
            width: 24px;
        }

        &__text {
            margin-left: 8px;
        }
    }
}

</style>