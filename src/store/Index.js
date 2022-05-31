import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'
import GuestList from '@/data/guests.json'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
    storage: window.localStorage
})

export default new Vuex.Store({
    state: {
        searchQuery: '',
        selectedGuest: null
    },
    mutations: {
        UPDATE_SEARCHQUERY: (state, value) => state.searchQuery = value,
        UPDATE_SELECTEDGUEST: (state, value) => state.selectedGuest = value
    },
    getters: {
        searchResults: (state) => {
            return GuestList.filter((guest) => guest.Name.startsWith(state.searchQuery))
        }
    },
    plugins: [vuexLocal.plugin]
})
