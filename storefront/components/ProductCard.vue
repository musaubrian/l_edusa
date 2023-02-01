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

        <div class="my-3 px-5 text-justify flex flex-col justify-center items-evenly">
            <p class="my-1">{{ product.description }}</p>
            <p>
                <span class="font-semibold text-lg my-1">Material:</span> 
                {{ product.material }}
            </p>
            <div class="inline-flex justify-end w-full mt-4">
                <span 
            class="bg-orange-500 p-2 rounded-xl w-3/6 inline-flex items-center justify-center text-gray-100">Add to cart</span>
            </div>          


        </div>
    </div>
</template>

<script setup>
const {product} = defineProps(['product'])
</script>