// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxtjs/algolia',
        '@pinia/nuxt'
    ],
    app: {
        head: {
            title: 'SomeStore',
            meta: [
                { charset: 'utf-8' },
                {name: 'description', content: "Let's get something for your"},
                { name: 'viewport', content: 'width=device-width, initial-scale=1.0'}
            ]
        }
    },
    runtimeConfig: {
        public: {
            STORE_BACKEND: process.env.MEDUSA_BACKEND_URL
        }
    }
})
