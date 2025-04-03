<template>
    <section class="counter" aria-label="Contador de itens no carrinho">
        <button class="counter__delete" @click="$emit('decrement')"
            :aria-label="quantity > 1 ? 'Diminuir quantidade' : 'Remover item do carrinho'">
            <UnnnicIcon :icon="quantity > 1 ? 'subtract-1' : 'bin-1-1'" scheme="weni-600" clickable />
        </button>

        <span class="counter__quantity" aria-live="polite">{{ quantity }}</span>

        <button class="counter__add" @click="$emit('increment')" aria-label="Aumentar quantidade">
            <UnnnicIcon icon="add-1" scheme="weni-600" clickable />
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
        background-color: transparent;
        border: none;
    }
}
</style>