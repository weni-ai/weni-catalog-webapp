import { useCartStore } from '../store/cart.store';
import type { ProductItem, CartItem } from '../types/Cart';

export function addToCart(product: ProductItem) {
    const cartStore = useCartStore();

    const existingItem = cartStore.items.find(item => item.id === product.id);

    if (existingItem) {
        cartStore.updateItemQuantity(product.id, 1);
    } else {
        const newItem: CartItem = {
            id: product.id,
            price: product.value,
            qtd: 1,
        };

        cartStore.addItemToCart(newItem);
    }
}
