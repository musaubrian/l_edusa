<template>
      <div class="inline-flex md:hidden justify-around items-center w-full px-3 text-xl text-gray-800">
        <div class="w-1/6 overflow-hidden rounded-xl">
            <img :src=product.thumbnail alt="product thumbnail">
        </div>
        <span class="w-4/6 text-xl">
            <NuxtLink :to="`/store/product/${product.id}`">
                {{ product.title }}
            </NuxtLink>
        </span>
    </div>
</template>

<script setup>
const { product } = defineProps(['product'])
</script>