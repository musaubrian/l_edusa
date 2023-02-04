<template>
    <div class="col-span-1 w-full flex flex-col items-center overflow-hidden">
        <img :src=product.thumbnail alt="product thumbnail" class="w-full object-cover md:h-52 h-48">
        <div class="w-full flex flex-col px-5">
            <h1 class="text-2xl md:text-3xl font-bold mt-2 text-start">{{ product.title }}</h1>
        <span class="text-lg w-full inline-flex justify-start">
            <span class="font-black">Kshs:</span>
            300
        </span>
        </div>
        <div class="inline-flex justify-start w-full my-4 px-5 font-semibold">
            <NuxtLink to="#" 
            class="border-2 border-orange-500 px-2 py-3 rounded-full w-3/6 inline-flex items-center justify-center text-gray-700 hover:bg-orange-500 hover:text-gray-100 transition-all">
            Add to cart
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const {product} = defineProps(['product'])
</script>