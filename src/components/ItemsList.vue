<template>
    <div class="items">
        <ItemCard title="Cloridrato de Sertralina 25mg 30 comprimidos Eurofarma Genérico" image="aaaaa"
            owner="Europharma" :discount="5" seller="Farma X" :value="164" :oldValue="169" />
        <ItemCard title="Cloridrato de Sertralina 25mg 30 comprimidos Eurofarma Genérico" image="aaaaa"
            owner="Europharma" :discount="5" seller="Farma X" :value="164" :oldValue="169" />
        <ItemCard title="Cloridrato de Sertralina 25mg 30 comprimidos Eurofarma Genérico" image="aaaaa"
            owner="Europharma" :discount="5" seller="Farma X" :value="164" :oldValue="169" />
        <ItemCard title="Cloridrato de Sertralina 25mg 30 comprimidos Eurofarma Genérico" image="aaaaa"
            owner="Europharma" :discount="5" seller="Farma X" :value="164" :oldValue="169" />
        <ItemCard title="Cloridrato de Sertralina 25mg 30 comprimidos Eurofarma Genérico" image="aaaaa"
            owner="Europharma" :discount="5" seller="Farma X" :value="164" :oldValue="169" />
        <ItemCard title="Cloridrato de Sertralina 25mg 30 comprimidos Eurofarma Genérico" image="aaaaa"
            owner="Europharma" :discount="5" seller="Farma X" :value="164" :oldValue="169" />
        <ItemCard title="Cloridrato de Sertralina 25mg 30 comprimidos Eurofarma Genérico" image="aaaaa"
            owner="Europharma" :discount="5" seller="Farma X" :value="164" :oldValue="169" />
    </div>
</template>

<script setup lang="ts">
import ItemCard from './ItemCard.vue';

</script>

<style lang="scss">
.items {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0px 8px;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
}
</style>