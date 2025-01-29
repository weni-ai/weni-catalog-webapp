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

            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Carousel from '../components/Carousel.vue';

const images = ref([
    { src: "../src/assets/model.png", alt: "Imagem 1" },
    { src: "../src/assets/model.png", alt: "Imagem 1" },
    { src: "../src/assets/model.png", alt: "Imagem 1" },
]);

const searchInput = ref('');

</script>

<style lang="scss" scoped>
.details {
    display: flex;
    flex-direction: column;
    padding: 0px 16px;
    &__search {
        margin: 16px;

        @media (min-width: 768px) {
            margin: 24px 32px 0 32px;
        }
    }
}
</style>