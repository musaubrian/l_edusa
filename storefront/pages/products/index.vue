<template>
    <div v-for="product in products.products" key=product.id>
        <h1>{{ product.title }}</h1>
        {{ product }}
      </div>
  </template>
  <script setup>  
  const {data: products} = await useFetch("http://localhost:9000/store/products/")
  </script>