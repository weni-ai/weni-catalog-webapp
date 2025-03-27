<template>
    <div v-if="isOpen" class="drawer" @click.stop>
        <div class="drawer__content">
            <slot />
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    isOpen: boolean
}>()
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
    animation: slide-up 0.3s ease forwards;
    padding: 16px;
    font-family: $unnnic-font-family-secondary;

    &__content{
        display: flex;
        width: 100%;
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
