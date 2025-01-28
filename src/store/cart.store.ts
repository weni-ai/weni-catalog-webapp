// store/cart.ts
import { defineStore } from 'pinia';
import type { CartItem } from '../types/Cart';


export const useCartStore = defineStore('cart', {
    state: () => ({
        items: [] as CartItem[],
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
        removeItem(id: string | number) {
            this.items = this.items.filter(item => item.id !== id);
        },
    },
});

