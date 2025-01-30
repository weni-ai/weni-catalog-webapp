import { defineStore } from 'pinia';
import type { ProductItem } from '../types/Cart';

export const useItemsStore = defineStore('items', {
    state: () => ({
        selectedItem: {} as ProductItem
    }),
    getters: {
        getSelectedItem: (state) => state.selectedItem
    },
    actions: {
        selectItem(value: ProductItem) {
            this.selectedItem = value;
        }
    }
});
