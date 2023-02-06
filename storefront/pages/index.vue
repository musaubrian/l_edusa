<template>
  <div class="px-4">
    <div class="p-3 w-full inline-flex items-center justify-center my-2">
      <Hero/>
    </div>
    <div class="flex flex-row flex-nowrap w-full px-2 items-center justify-center overflow-hidden">
      <div v-for="product in products.products" :key="product.id" class="w-3/6 inline-flex">
      <Categories :categories="product.collection"/>
    </div>
    </div>
  <div class="grid md:grid-cols-3 lg:grid-col-3 gap-4 grid-cols-1 px-3 my-3">
    <div v-for="product in products.products" :key="product.id"
    class="bg-slate-100 text-center rounded-lg overflow-hidden my-2 shadow-lg">
      <ProductCard :product="product"/>
    </div>
  </div>
</div>
</template>
<script setup>
definePageMeta({
  layout: 'default'
})
  const {data: products} = await useFetch("http://localhost:9000/store/products/")
</script>