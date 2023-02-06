<template>
    <form @submit.prevent="search()"
    class="w-full bg-slate-100 p-3 flex flex-col items-center justify-center">
        <input type="search" name="" id="" placeholder="Search for products" required
        class="w-5/6 px-4 py-3 rounded-xl bg-gray-50 border-2 border-slate-400 text-gray-800 text-lg">
        <button type="submit"
        class="bg-blue-500 opacity-80 my-4 px-2 py-3 w-3/6 rounded-2xl text-xl font-semibold text-gray-200">
            <span v-if="searching === true">Searching...</span>
            <span v-else>Search</span>
        </button>
        <div v-for="product in searchResult.hits" :key="product.id"
        class="flex flex-col items-center my-1 border-top-2">
          <SearchProduct :product="product" />
        </div>

        <button type="submit"></button>
    </form>
</template>
<script>
export default{
    data() {
        return {
            searchWord: '',
            searchResult: '',
            searching: false
        }
    },
    methods: {
        async search(){
            this.searching = true
            const {result, search} = useAlgoliaSearch('products')
            await search({query: this.searchWord})
            this.searchResult = result
            this.searching = false
        }
    }
}
</script>