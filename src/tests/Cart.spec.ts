import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import CartView from '../components/CartView.vue'

const mockItems = [
    {
        id: '1',
        name: 'Dorflex Max Analgésico e Relaxante Muscular Dipirona 600mg - 16 comp.',
        price:  492,
        originalPrice: 467.40,
        discount: 5,
        quantity: 1,
        image: 'https://link.com/dorflex.png',
        discountLabel: '5% de desconto',
        seller: 'Europharma',
    }
]

describe('CartView', () => {
    it('should display cart items with name, price, and quantity', () => {
        const wrapper = mount(CartView, {
            props: { items: mockItems },
        })

        expect(wrapper.text()).toContain('Dorflex Max Analgésico')
        expect(wrapper.text()).toContain('R$ 164,00')
        expect(wrapper.text()).toContain('2')

        expect(wrapper.text()).toContain('R$ 492')
    })

    it('should increment quantity when button is clicked', () => {
        const wrapper = mount(CartView, {
            props: { items: mockItems },
        })

        const incrementButton = wrapper.findComponent({ ref: 'incrementButton' })
        incrementButton.trigger('click')

        expect(wrapper.text()).toContain('3')
    })

    it('should decrement quantity when button is clicked', () => {
        const wrapper = mount(CartView, {
            props: { items: mockItems },
        })

        const decrementButton = wrapper.findComponent({ ref: 'decrementButton' })
        decrementButton.trigger('click')

        expect(wrapper.text()).toContain('1')
    })

    it('should remove item when quantity is 0', () => {
        const wrapper = mount(CartView, {
            props: { items: mockItems },
        })

        const decrementButton = wrapper.findComponent({ ref: 'decrementButton' })
        decrementButton.trigger('click')

        expect(wrapper.text()).toContain('1')

        const removeButton = wrapper.findComponent({ ref: 'removeButton' })
        removeButton.trigger('click')

        expect(wrapper.text()).not.toContain('Dorflex Max Analgésico')
    })

    it('should display total price', () => {
        const wrapper = mount(CartView, {
            props: { items: mockItems },
        })

        expect(wrapper.text()).toContain('R$ 492')
    })

    it('should display total price with discount', () => {
        const wrapper = mount(CartView, {
            props: { items: mockItems },
        })

        expect(wrapper.text()).toContain('R$ 467,40')
    })
})
