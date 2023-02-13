import { defineStore } from "pinia";

export const useSearchStore = defineStore('searchStore', {
    state: () => ({
        searching: false,
        searchResult: ''
    }),
    actions: {
        async search(searchWord) {
            this.searching = true
            const {result, search} = useAlgoliaSearch('products')
            await search({query: searchWord})
            this.searchResult = result
            this.searching = false
        }
    }
})