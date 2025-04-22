<template>
    <section class="counter" :aria-label="$t('counter')">
        <button class="counter__delete" @click="$emit('decrement')"
            :aria-label="quantity > 1 ? $t('decrement') : $t('remove')">
            <UnnnicIcon :icon="quantity > 1 ? 'remove' : 'delete'" scheme="weni-600" clickable />
        </button>

        <p class="counter__quantity" aria-live="polite">{{ quantity }}</p>

        <button class="counter__add" @click="$emit('increment')" :aria-label="$t('increment')">
            <UnnnicIcon icon="add" scheme="weni-600" clickable />
        </button>
    </section>
</template>


<script setup lang="ts">
defineProps<{
    quantity: number,
}>()
</script>

<style lang="scss">
.counter {
    display: flex;
    width: 100%;
    padding: $unnnic-spacing-xs;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: $unnnic-border-radius-sm;
    border: $unnnic-border-width-thinner solid $unnnic-color-neutral-soft;
    color: $unnnic-color-neutral-black;
    font-weight: $unnnic-font-weight-bold;
    

    &__delete,
    &__add {
        display: flex;
        align-items: center;
        cursor: pointer;
        background-color: transparent;
        border: none;
    }
}
</style>