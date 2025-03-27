<template>
    <div class="unnnic-carousel">
        <div class="unnnic-carousel__button unnnic-carousel__button--left">
            <UnnnicIcon icon="arrow-left-1-1" size="sm" :scheme="hasPrev ? 'neutral-black' : 'neutral-cleanest'"
                clickable @click="previous" />
        </div>

        <div class="unnnic-carousel__container">
            <div class="unnnic-carousel__track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                <div v-for="(item, index) in items" :key="index" class="unnnic-carousel__slide">
                    <slot :item="item" />
                </div>
            </div>
        </div>
        <div class="unnnic-carousel__button unnnic-carousel__button--right">
            <UnnnicIcon icon="arrow-right-1-1" size="sm" :scheme="hasNext ? 'neutral-black' : 'neutral-cleanest'"
                clickable @click="next" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';

const props = defineProps<{ items: any[] }>();

const currentIndex = ref(0);

const hasPrev = computed(() => currentIndex.value > 0);
const hasNext = computed(() => currentIndex.value < props.items.length - 1);

const next = () => {
    if (hasNext.value) {
        currentIndex.value++;
    }
};

const previous = () => {
    if (hasPrev.value) {
        currentIndex.value--;
    }
};
</script>

<style lang="scss" scoped>
.unnnic-carousel {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    max-width: 600px;
    width: 100%;

    &__container {
        width: 100%;
        overflow: hidden;
    }

    &__track {
        display: flex;
        transition: transform 0.5s ease-in-out;
        width: 100%;
    }

    &__slide {
        flex: 0 0 100%;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    &__button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        background: rgba(255, 255, 255, 0.8);
        border-radius: 50%;
        padding: 10px;
        z-index: 10;
        transition: background 0.3s;

        &:hover {
            background: rgba(255, 255, 255, 1);
        }

        &--left {
            left: 10px;
        }

        &--right {
            right: 10px;
        }
    }
}
</style>