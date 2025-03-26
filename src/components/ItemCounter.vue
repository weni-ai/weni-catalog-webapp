<template>
    <div class="counter">
        <div class="counter__delete">
            <Subtract v-if="quantity > 1" :color="'#00A49F'" @click="$emit('decrement')" />
            <Trash v-else :color="'#00A49F'" @click="$emit('decrement')" />
        </div>
        <div class="counter__quantity">{{ quantity }}</div>
        <div class="counter__add">
            <Add :color="'#00A49F'" @click="$emit('increment')" />
        </div>
    </div>
</template>

<script setup lang="ts">
import Trash from '../assets/icons/Trash.vue';
import Subtract from '../assets/icons/Subtract.vue';
import Add from '../assets/icons/Add.vue';
defineProps<{
    quantity: number,
}>()
</script>

<style lang="scss">
.counter {
    display: flex;
    width: 100%;
    height: 38px;
    padding: 8px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    border-radius: 4px;
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