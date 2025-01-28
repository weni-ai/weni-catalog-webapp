<template>
    <div class="counter">
        <div class="counter__trash">
            <UnnnicButtonIcon icon="bin-1-1" type="tertiary" size="small" @click="$emit('decrement')"/>
        </div>
        <div class="counter__quantity">{{ quantity }}</div>
        <div class="counter__add">
            <UnnnicButtonIcon icon="add-1" type="tertiary" size="small"  @click="$emit('increment')"/>
        </div>
    </div>
</template>

<script script setup lang="ts">
defineProps<{
    quantity: number,
}>()
</script>

<style lang="scss">
.counter {
    display: flex;
    height: 38px;
    padding: 8px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 4px;
    border: 1px solid var(--color-neutral-soft, #E2E6ED);

    &__trash{
        color: #00A49F
    }
}
</style>