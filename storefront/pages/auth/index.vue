<template>
   <div class="w-full h-[90vh] flex flex-col items-center justify-center">
      <Login v-if="authStore.login"/>
      <Register v-if="authStore.login === false"/>
   
   </div>
</template>
<script setup>
import { useAuthStore } from '~~/store/authStore';

const authStore = useAuthStore();
definePageMeta({
   layout: 'auth'
})
</script>
