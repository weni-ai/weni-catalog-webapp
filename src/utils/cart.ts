import { useCartStore } from '../store/cart.store';
import type { ProductItem, CartItem } from '../types/Cart';

export function addToCart(product: ProductItem) {
    const cartStore = useCartStore();

    const existingItem = cartStore.items.find(productItem => productItem.item.id === product.id);

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
    const existingItem = cartStore.items.find(productItem => productItem.item.id === product.id);

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

export function decrementQuantity(product: ProductItem) {
    const cartStore = useCartStore();
    const productItem = cartStore.items.find(productItem => productItem.item.id === product.id);
    if (productItem) {
        if (productItem.qtd > 1) {
            cartStore.updateItemQuantity(productItem.item.id, -1);
        } else {
            cartStore.removeItem(productItem.item.id);
        }
    }
}

export function groupItemsBySeller(items: CartItem[]): Record<string, CartItem[]> {
    return items.reduce((acc, item) => {
        const seller = item.item.seller;
        if (!acc[seller]) {
            acc[seller] = [];
        }
        acc[seller].push(item);
        return acc;
    }, {} as Record<string, CartItem[]>);
}