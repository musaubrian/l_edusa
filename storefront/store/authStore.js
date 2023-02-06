import { defineStore } from "pinia"
import Medusa from "@medusajs/medusa-js"

export const useAuthStore = defineStore('authStore', {
    state: () => ({
        login: true,
        baseUri: 'localhost:9000',
        customer: ''
    }),
    actions: {
        loginCustomer(email, password){
            const medusa = new Medusa({ baseUrl: this.baseUri, maxRetries: 3 })
            if (medusa.auth.exists(email)) {
                medusa.auth.authenticate({
                    email: email,
                    password: password
                }).then(({ customer }) => {
                    this.customer = customer;
                    console.log(this.customer);
                });
            }
        },
        registerCustomer(){

        }
        

    }
})