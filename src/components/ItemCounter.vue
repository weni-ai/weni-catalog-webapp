<template>
    <div class="counter">
        <div class="counter__delete">
            <UnnnicIcon v-if="quantity > 1" icon="subtract-1" scheme="weni-600" @click="$emit('decrement')" clickable/>
            <UnnnicIcon v-else icon="bin-1-1" scheme="weni-600" @click="$emit('decrement')" clickable/>
        </div>
        <div class="counter__quantity">{{ quantity }}</div>
        <div class="counter__add">
            <UnnnicIcon icon="add-1" scheme="weni-600" @click="$emit('increment')" clickable/>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    quantity: number,
}>()
</script>

<style lang="scss">
.counter {
    display: flex;
    padding: $unnnic-spacing-xs;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: $unnnic-border-radius-sm;
    border: 1px solid $unnnic-color-neutral-soft;
    color: $unnnic-color-neutral-black;
    font-weight: $unnnic-font-weight-bold;

    &__delete,
    &__add {
        display: flex;
        align-items: center;
        cursor: pointer;
    }
}
</style>