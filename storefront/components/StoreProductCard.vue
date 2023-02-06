<template>
    <div class="col-span-1 w-full flex flex-col items-center overflow-hidden">
        <img :src=product.thumbnail alt="product thumbnail" class="w-full object-cover md:h-52 h-48">
        <div class="w-full flex flex-col px-5">
            <h1 class="text-2xl md:text-3xl font-bold mt-2 text-start">{{ product.title }}</h1>
        <span class="text-lg w-full inline-flex items-start">
            <span class="font-black">Kshs: 300</span>
        </span>
        </div>
        <div class="inline-flex justify-around items-center px-5 w-full my-4 font-semibold">
            <NuxtLink to="#" 
            class="border-2 border-orange-500 p-3 rounded-full w-2/6 inline-flex items-center justify-center text-gray-700 hover:bg-orange-500 hover:text-gray-100 hover:opacity-70 active:bg-orange-600 active:opacity-100 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.0" stroke="currentColor" class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            </NuxtLink>
            
            <NuxtLink to="#" 
            class="bg-orange-500 text-lg text-gray-100 px-3 py-4 rounded-full w-3/6 inline-flex items-center justify-center active:bg-orange-600 transition-all">
            Buy now
            </NuxtLink>
        </div>
    </div>
</template>

<script setup>
const {product} = defineProps(['product'])
</script>