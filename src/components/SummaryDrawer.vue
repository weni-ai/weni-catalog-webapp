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
.data {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 4px;

    &__title {
        font-size: $unnnic-font-size-body-gt;
        color: var(--color-neutral-clean, #9CACCC);
        font-weight: $unnnic-font-weight-black;
    }

    &__values {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 8px;

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

.button {
    :deep(.unnnic-button) {
        background-color: var(--Green-color-aux-green-500, #38A169);
        width: 160px;
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