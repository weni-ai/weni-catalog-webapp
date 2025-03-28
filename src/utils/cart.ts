// utils/cartUtils.ts
import { useCartStore } from '../store/cart.store';
import type { ProductItem, CartItem } from '../types/Cart';

export function addToCart(product: ProductItem) {
    const cartStore = useCartStore();

    const existingItem = cartStore.items.find(item => item.item.id === product.id);

    if (existingItem) {
        cartStore.updateItemQuantity(product.id, 1);
    } else {
        const newItem: CartItem = {
            item: product,
            qtd: 1,
        };

        cartStore.addItemToCart(newItem);
    }
}

export function reduceFromCart(product: ProductItem) {
    const cartStore = useCartStore();
    const existingItem = cartStore.items.find(item => item.item.id === product.id);

    if (existingItem && existingItem.qtd > 1) {
        cartStore.updateItemQuantity(product.id, -1);
    } else {
        cartStore.removeItem(product.id);
    }
}

export function clearCart() {
    const cartStore = useCartStore();
    cartStore.items = [];
}
