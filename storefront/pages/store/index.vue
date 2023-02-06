<template>
  <div class="grid md:grid-cols-3 lg:grid-col-3 gap-4 grid-cols-1 px-3 my-3">
    <div v-for="product in products.products" :key="product.id"
    class="bg-slate-100 text-center rounded-lg overflow-hidden my-2 shadow-lg">
      <StoreProductCard :product="product"/>
    </div>
  </div>
  </template>
<script setup>
definePageMeta({
  layout: 'default'
})
const {data: products} = await useFetch("http://localhost:9000/store/products/")
</script>