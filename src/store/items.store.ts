// store/cart.ts
import { defineStore } from 'pinia';
import type { ProductItem } from '../types/Cart';


export const useItemsStore = defineStore('items', {
    state: () => ({
        selectedItem: {} as ProductItem
    }),
    actions: {
        selectItem(value: ProductItem){
            this.selectedItem = value
        }
    },
});

