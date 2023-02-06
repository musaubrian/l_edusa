<template>
    <div v-for="product in products.product" :key=product.id>
        {{ product }}
    </div>
    
</template>

<script setup>
const { id } = useRoute().params

const { data: products } = await useFetch(`http://localhost:9000/store/products/${id}`)
console.log(products.product)
</script>
