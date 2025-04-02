<template>
    <div class="home">
        <div class="home__search">
            <UnnnicInput v-model="searchInput" iconLeft="search-1" placeholder="Procurar produto" />
        </div>
        <div class="home__items">
            <ItemsList/>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import ItemsList from '../components/ProductsList.vue';

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