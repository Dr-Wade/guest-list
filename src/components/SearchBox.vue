<template>
    <div class="mt-1 relative">
        <input type="text" v-model="searchQuery" class="w-full rounded-md border border-gray-300 bg-white py-2 pl-3 pr-12 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
        <button @click="selectedGuest = null, searchQuery = ''" class="absolute inset-y-0 right-5 flex items-center px-2 pt-1">
            <i class="h-5 w-5 text-gray-400 fas fa-times"></i>
        </button>
        <button @click="optionsOpen = !optionsOpen" class="absolute inset-y-0 right-0 a flex items-center pr-2">
            <svg class="h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
        </button>
        <ul ref="target" class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-100 rounded-md py-1 ring-1 ring-black ring-opacity-5 overflow-x-visible overflow-y-scroll focus:outline-none text-lg" tabindex="-1"
            :class="optionsOpen ? 'visible': 'invisible'">
            <li v-if="searchResults.length == 0" class="cursor-default select-none relative py-2 pl-3 pr-4 overflow-x-clip text-left text-xl">
                <span>Aucun résultat</span>
            </li>
            <li v-for="(option, i) in searchResults" :key="option.Name + option.Category" class="cursor-default select-none relative py-2 pl-3 pr-4 overflow-x-clip text-left text-xl hover:bg-gray-100" :class="{ 'border-t': i > 0 }" @click="handleSelect(option)">
                <div class="flex justify-between">
                    <span>{{option.Name}}</span>
                    <span class="text-gray-500">{{option.Table}}</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
import { mapFields } from '@/models/mapFields'
import { mapGetters } from 'vuex'
export default {
    data: () => ({
        optionsOpen: false,
    }),
    computed: {
        ...mapFields(['searchQuery', 'selectedGuest']),
        ...mapGetters(['searchResults'])
    },
    methods: {
        handleSelect(option) {
            this.selectedGuest = option
            this.searchQuery = option.Name
            setTimeout(() => { this.optionsOpen = false }, 10)
        }
    },
    watch: {
        searchQuery() {
            if (this.searchQuery.length) this.optionsOpen = true
        }
    }
}
</script>