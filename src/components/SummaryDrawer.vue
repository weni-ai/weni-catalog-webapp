<template>
    <aside
        v-if="isOpen"
        class="drawer"
        role="complementary"
        :aria-label="$t('summary_drawer.aria_label')"
        @click.stop
    >
        <div class="drawer__container">
            <header class="drawer__header">
                <h2 class="drawer__title">{{ $t('summary_drawer.total') }}</h2>
                <p class="drawer__values" aria-live="polite">
                    <span class="drawer__total">
                        {{ $t('currency') }} {{ totalValue }}
                    </span>
                    <span class="drawer__count">
                        / {{ itemCount }} {{ $t('summary_drawer.items') }}
                    </span>
                </p>
            </header>

            <footer class="drawer__footer">
                <UnnnicButton iconLeft="messaging-whatsapp-1">
                    {{ $t('summary_drawer.finish_order') }}
                </UnnnicButton>
            </footer>
        </div>
    </aside>
</template>

<script lang="ts" setup>
defineProps<{
    isOpen: boolean,
    itemCount: number,
    totalValue: number
}>()
</script>

<style lang="scss" scoped>
.drawer {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    max-height: 80%;
    background-color: $unnnic-color-neutral-white;
    box-shadow: 0px -4px $unnnic-spacing-sm rgba(0, 0, 0, 0.2);
    z-index: 1000;
    animation: slide-up 0.3s ease forwards;
    padding: $unnnic-spacing-sm;
    font-family: $unnnic-font-family-secondary;
    display: flex;
    flex-direction: column;

    &__container {
        display: flex;
        flex-direction: row;
        width: 100%;
        gap: $unnnic-spacing-md;
        justify-content: space-between;
    }

    &__header {
        display: flex;
        flex-direction: column;
        gap: $unnnic-spacing-nano;
    }

    &__title {
        font-size: $unnnic-font-size-body-gt;
        color: $unnnic-color-neutral-clean;
        font-weight: $unnnic-font-weight-black;
    }

    &__values {
        display: flex;
        gap: $unnnic-spacing-xs;
        align-items: center;
    }

    &__total {
        font-size: $unnnic-font-size-body-lg;
        color: $unnnic-color-neutral-darkest;
    }

    &__count {
        font-size: $unnnic-font-size-body-gt;
        color: $unnnic-color-neutral-clean;
    }

    &__footer {
        display: flex;
        justify-content: center;
        width: 50%;
        :deep(.unnnic-button) {
            background-color: $unnnic-color-aux-green-500;
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
