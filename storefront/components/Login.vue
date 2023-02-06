<template>
    <form @submit.prevent="customerLogin" class="flex flex-col flex-nowrap justify-center items-center h-full w-5/6">
        <h1 class="text-4xl font-bold">Welcome back</h1>
        <h2 class="text-gray-600 text-xl">LogIn</h2>
        <label for="email" class="w-full text-left md:w-8/12 mt-3 text-gray-700">Email:</label>
        <input type="email" placeholder="johndoe@gmail.com" v-model="userEmail" required
            class="w-full border-2 mt-1 p-3 rounded-xl border-gray-400 md:w-8/12 ">
        <label for="" class="w-full text-left md:w-8/12 mt-3 text-gray-700">Password:</label>
        <input type="password" name="password" placeholder="supersecretpassword" v-model="userPassword" required
            class="w-full border-2 mt-1 p-3 rounded-xl border-gray-400 md:w-8/12">
        <span class="mt-2 mb-2">Don't have an account? <span @click="authStore.login = false"
                class="text-blue-600 cursor-pointer">Register
            </span>
        </span>
        <button type="submit"
            class="bg-orange-500 p-3 rounded-xl font-semibold text-white w-4/12 md:w-3/12 active:bg-orange-600 transition-all">LogIn</button>
    </form>
    <!-- <div class="fixed top-0 left-0 h-10 mt-5 bg-green-30 p-5 flex flex-col w-full items-center justify-center"
        v-if="authStore.signInError === true">
        <h3 class="text-red-500 text-xl">Error logging in</h3>
        <p class="text-red-400 text-md md:text-lg">Try Registering or check your network</p>
    </div> -->
</template>
<script>
import { useAuthStore } from "~~/store/authStore"

export default {
    data(){
        return {
            userEmail: '',
            userPassword: ''
        }
    },
    methods: {
        customerLogin(){
            const authStore = useAuthStore()
            authStore.customerLogin(this.userEmail, this.userPassword)
        }
    },
    setup(){
        const authStore = useAuthStore()
        return {
            authStore
        }
    }
}

</script>
