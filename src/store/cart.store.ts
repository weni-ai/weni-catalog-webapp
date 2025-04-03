import { defineStore } from 'pinia';
import type { CartItem } from '../types/Cart';

interface CartState {
    items: CartItem[];
}

export const useCartStore = defineStore('cart', {
    state: (): CartState => ({
        items: [],
    }),
    actions: {
        addItemToCart(item: CartItem) {
            this.items.push(item);
        },
        updateItemQuantity(id: string | number, quantity: number) {
            const existingItem = this.items.find(item => item.id === id);
            if (existingItem) {
                existingItem.qtd += quantity;
            }
        },
    },
});
