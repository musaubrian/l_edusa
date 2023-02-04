<template>
    <div
    class="p-2 mr-3  bg-slate-200 w-full rounded-full inline-flex justify-center items-center text-lg font-semibold">
        {{ category }}
        Category
    </div>
</template>
<script setup>
const { category } = defineProps(['categories'])
</script>