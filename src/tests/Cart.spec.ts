import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CartView from '../components/CartView.vue'

describe('CartView', () => {
    it('deve exibir os itens do carrinho com nome, preço e quantidade', () => {
        const items = [
            {
                id: '1',
                name: 'Dorflex Max Analgésico e Relaxante Muscular Dipirona 600mg - 16 comp.',
                price: 164,
                originalPrice: 169,
                quantity: 1,
                image: 'https://link.com/dorflex.png',
                discountLabel: '5% de desconto',
                seller: 'Europharma',
            },
            {
                id: '2',
                name: 'Dorflex Max Analgésico e Relaxante Muscular Dipirona 600mg - 16 comp.',
                price: 164,
                originalPrice: 169,
                quantity: 2,
                image: 'https://link.com/dorflex.png',
                discountLabel: '5% de desconto',
                seller: 'Europharma',
            },
        ]

        const wrapper = mount(CartView, {
            props: { items },
        })

        expect(wrapper.text()).toContain('Dorflex Max Analgésico')
        expect(wrapper.text()).toContain('R$ 164,00')
        expect(wrapper.text()).toContain('2')

        expect(wrapper.text()).toContain('R$ 492')
    })
})
