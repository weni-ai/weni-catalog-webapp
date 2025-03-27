<template>
    <div>
        <h2>Meu carrinho</h2>
        <div v-for="item in items" :key="item.id">
            <img :src="item.image" :alt="item.name" />
            <div>
                <strong>{{ item.name }}</strong>
                <p>por {{ item.seller }}</p>
                <p>R$ {{ item.price.toFixed(2).replace('.', ',') }}</p>
                <p>Quantidade: {{ item.quantity }}</p>
            </div>
        </div>

        <div class="subtotal">
            <p>Subtotal</p>
            <p>
                R$
                {{
                    items.reduce((acc, item) => acc + item.price * item.quantity, 0)
                        .toFixed(2)
                        .replace('.', ',')
                }}
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    items: {
        id: string
        name: string
        price: number
        originalPrice: number
        quantity: number
        image: string
        discountLabel: string
        seller: string
    }[]
}>()
</script>