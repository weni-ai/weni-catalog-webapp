<template>
    <div>
        <unnnic-modal ref="unnnic-add-modal" class="add-modal" :showModal="open"
            text="Produto sem estoque" scheme="feedback-green" 
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




