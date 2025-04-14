<template>
    <div v-if="props.isOpen" class="drawer" @click.stop @touchstart="startDrag" @touchmove="onDrag" @touchend="endDrag"
        :style="{ transform: `translateY(${dragOffset}px)` }">
        <div class="drawer__handle"></div>
        <div class="drawer__content">
            <slot />
        </div>
    </div>
</template>


<script lang="ts" setup>
import { ref } from 'vue';

const props = defineProps<{
    isOpen: boolean
    itemCount: number
    totalValue: number
}>()

const emit = defineEmits(['close'])

const dragOffset = ref(0);
let startY = 0;
let currentY = 0;

const startDrag = (e: TouchEvent) => {
    startY = e.touches[0].clientY;
    currentY = dragOffset.value;
};

const onDrag = (e: TouchEvent) => {
    const deltaY = e.touches[0].clientY - startY;
    dragOffset.value = Math.max(0, Math.min(currentY + deltaY, window.innerHeight * 0.8));
};

const endDrag = () => {
    const wasDragged = Math.abs(dragOffset.value - currentY) > 10;

    if (!wasDragged) {
        dragOffset.value = currentY;
        return;
    }

    if (dragOffset.value > window.innerHeight * 0.4) {
        dragOffset.value = window.innerHeight * 0.8;
    } else {
        dragOffset.value = 0;
        emit('close');
    }
};

</script>

<style lang="scss" scoped>
.drawer {
    position: fixed;
    bottom: 0;
    width: 100%;
    left: 0;
    max-height: 80%;
    background: white;
    box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    padding: 16px;
    font-family: $unnnic-font-family-secondary;
    border-radius: 16px 16px 0 0;
    transition: transform 0.3s ease;
    overflow-y: scroll;

    &__handle {
        width: 40px;
        height: 4px;
        background-color: #E5E5E5;
        border-radius: 2px;
        margin: 0 auto 16px;
    }

    &__content {
    &__content {
        display: flex;
        width: 100%;
    }
}
}

@keyframes slide-up {
    from {
        transform: translateY(100%);
    }

    to {
        transform: translateY(0);
    }
}
</style>
