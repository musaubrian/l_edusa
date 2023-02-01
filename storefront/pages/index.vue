<template>
  <NavBar/>
  <div>
    Hero section
  </div>
  <div class="grid md:grid-cols-3 gap-4 grid-cols-1 my-3 px-4">
    <div v-for="product in products.products" :key="product.id"
    class="bg-slate-200 text-center rounded-lg overflow-hidden my-2 shadow-lg">
      <ProductCard :product="product"/>
    </div>
  </div>
</template>
<script setup>
  const {data: products} = await useFetch("http://localhost:9000/store/products/")
 </script>