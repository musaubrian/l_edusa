<template>
    <footer class="w-full bg-gray-300 p-2">
        <h1 class="font-semibold text-2xl text-gray-800 text-center">SomeStore</h1>
        <div class="flex flex-col p-3">
            <h2 class="font-semibold underline text-gray-700 text-xl">Helpful links</h2>
            <ul>
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/store">Explore store</NuxtLink></li>
                <li><NuxtLink to="/cart">Cart</NuxtLink></li>
            </ul>
        </div>
    </footer>
</template>