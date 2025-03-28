import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import CartView from '../components/CartView.vue'
import CartItem from '../components/CartItem.vue'

vi.mock('../utils/cart.ts', () => ({
    clearCart: vi.fn(),
}))

vi.stubGlobal('window', {
    innerWidth: 500,
    Event: class Event {
        type: string;
        constructor(type: string) {
            this.type = type;
        }
    }
})

const mockItems = [
    {
        item: {
            id: '1',
            name: 'Dorflex Max',
            price: 164,
            originalPrice: 169,
            discount: 5,
            quantity: 1,
            image: 'https://link.com/dorflex.png',
            discountLabel: '5% de desconto',
            seller: 'Farmácias Weni',
        },
    },
    {
        item: {
            id: '2',
            name: 'Dorflex Max',
            price: 164,
            originalPrice: 169,
            discount: 5,
            quantity: 2,
            image: 'https://link.com/dorflex.png',
            discountLabel: '5% de desconto',
            seller: 'Farmácias Weni',
        },
    },
]

function createWrapper() {
    return mount(CartView, {
        global: {
            plugins: [createTestingPinia({
                stubActions: false,
                initialState: {
                    cart: {
                        items: mockItems,
                    },
                },
            })],
            mocks: {
                $t: (key: string) => {
                    const translations = {
                        'cart.clearCart': 'Limpar carrinho',
                        'cart.title': 'Meu carrinho',
                        'cart.productsDeliveredBy': 'Produtos entregues por'
                    } as { [key: string]: string }
                    return translations[key] || key
                }
            }
        },
    })
}

describe('CartView.vue', () => {
    it('should group products by seller and render them', () => {
        const wrapper = createWrapper()
        expect(wrapper.text()).toContain('Produtos entregues por Farmácias Weni')
        expect(wrapper.findAllComponents(CartItem)).toHaveLength(2)
    })

    it('should show the header with "Meu carrinho" and "Limpar carrinho" if innerWidth < 768', () => {
        const wrapper = createWrapper()
        expect(wrapper.find('.cart__header__title').text()).toBe('Meu carrinho')
        expect(wrapper.text()).toContain('Limpar carrinho')
    })
})
