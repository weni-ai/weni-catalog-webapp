<template>
    <BottomDrawer :isOpen="isOpen">
        <div class="data">
            <div class="data__title">Subtotal</div>
            <div class="data__values">
                <div class="data__values__total">R$ {{ totalValue }}</div>
                <div class="data__values__count"> / {{ itemCount }} itens</div>
            </div>
        </div>
        <div class="button">
            <UnnnicButton iconLeft="messaging-whatsapp-1">
                Finalizar pedido
            </UnnnicButton>
        </div>
    </BottomDrawer>
</template>

<script lang="ts" setup>
import BottomDrawer from './BottomDrawer.vue';


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
    background: white;
    box-shadow: 0px -4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    animation: slide-up 0.3s ease forwards;
    display: flex;
    flex-direction: column;
    padding: $unnnic-spacing-sm;
    font-family: $unnnic-font-family-secondary;

    &__content {
        display: flex;
        width: 100%;

        &__data {
            display: flex;
            flex-direction: column;
            width: 100%;
            gap: $unnnic-spacing-nano;

    &__title {
        font-size: $unnnic-font-size-body-gt;
        color: var(--color-neutral-clean, #9CACCC);
        font-weight: $unnnic-font-weight-black;
    }

            &__values {
                display: flex;
                align-items: center;
                flex-direction: row;
                gap: $unnnic-spacing-xs;

        &__total {
            font-size: $unnnic-font-size-body-lg;
            color: var(--color-neutral-black, #272B33);
        }

        &__count {
            font-size: $unnnic-font-size-body-gt;
            color: var(--color-neutral-clean, #9CACCC);
        }
    }
}

        &__button {
            :deep(.unnnic-button) {
                background-color: $unnnic-color-aux-green-500;
            }
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