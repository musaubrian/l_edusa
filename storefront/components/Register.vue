<template>
    <form @submit.prevent="" class="flex flex-col flex-nowrap justify-center items-center h-full w-5/6">
        <h1 class="text-4xl font-bold">Welcome</h1>
        <h2 class="text-gray-600 text-xl">Register</h2>
        <div class="w-full md:w-8/12 flex flex-col md:flex-row items-around justify-center">
            <div class="flex flex-col w-full md:pr-2 items-around justify-center">
                <label for="firstName" class="w-full text-left md:w-8/12 mt-3 text-gray-700">First Name:</label>
                <input type="text" required placeholder="John" v-model="firstName"
            class="p-3 w-full border-2 border-gray-400 rounded-xl">
            </div>
            <div class="flex flex-col w-full md:pl-2 justify-center">
                <label for="lastName" class="w-full text-left md:w-8/12 mt-3 text-gray-700">Last Name:</label>
                <input type="text" required placeholder="Doe" v-model="lastName"
            class="p-3 w-full border-2 border-gray-400 rounded-xl">
            </div>
        </div>
        <label for="phone" class="w-full text-left md:w-8/12 mt-3 text-gray-700">Phone Number:</label>
        <input type="tel" placeholder="0700000000" v-model="number" required
            class="w-full border-2 mt-1 p-3 rounded-xl border-gray-400 md:w-8/12 ">
        <label for="email" class="w-full text-left md:w-8/12 mt-3 text-gray-700">Email:</label>
        <input type="email" placeholder="johndoe@gmail.com" v-model="email" required
            class="w-full border-2 mt-1 p-3 rounded-xl border-gray-400 md:w-8/12 ">
        <label for="" class="w-full text-left md:w-8/12 mt-3 text-gray-700">Password:</label>
        <input type="password" name="password" placeholder="supersecretpassword" v-model="password" required
            class="w-full border-2 mt-1 p-3 rounded-xl border-gray-400 md:w-8/12">
        <span class="mt-2 mb-2">Already have an account? <span @click="authstore.login = true"
                class="text-blue-600 cursor-pointer">Login
            </span>
        </span>
        <button type="submit"
            class="bg-orange-500 p-3 rounded-xl font-semibold text-white w-4/12 md:w-3/12 active:bg-orange-600 transition-all">Register</button>
    </form>
</template>
<script setup>
import { useAuthStore } from '~~/store/authStore';

const authstore = useAuthStore()
</script>