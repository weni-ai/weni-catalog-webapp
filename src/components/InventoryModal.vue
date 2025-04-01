<template>
    <div>
        <unnnic-modal ref="unnnic-add-modal" class="add-modal" :showModal="open"
            text="Poucos itens em estoque" scheme="feedback-green" 
            @close="toggleModal" @click.stop>
            <template #message>
                <InventoryView :product="product" />
            </template>
        </unnnic-modal>
    </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import type { CartItem as CartItemType } from '../types/Cart';
import InventoryView from '../views/InventoryView.vue';

const emit = defineEmits(['toggleModal'])

defineProps<{
    product: CartItemType,
    open: boolean
}>()

function toggleModal() {
    emit('toggleModal') 
}

</script>

<style scoped lang="scss">
:deep(.unnnic-modal-container-background) {
    width: 100%;
    min-width: 800px;
    max-height: 80vh;
}

:deep(.unnnic-modal-container-background-body-title) {
    display: flex;
    align-items: flex-start;
}


</style>




