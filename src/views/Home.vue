<template>
    <main class="home">
        <section class="home__search">
            <UnnnicInput v-model="searchInput" iconLeft="search-1" :placeholder="$t('search')" />
        </section>
        <section class="home__items">
            <ProductsList/>
        </section>
    </main>      
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import ProductsList from '../components/ProductsList.vue';

const searchInput = ref('')
</script>

<style lang="scss">
.home{
    &__search{
        margin: $unnnic-spacing-sm;
        @media (min-width: $tablet-width) {
            margin: $unnnic-spacing-md $unnnic-spacing-lg 0 $unnnic-spacing-lg;
        }
    }
}
</style>