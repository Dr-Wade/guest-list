<template>
	<div id="app" class="min-h-screen w-full text-gray-900 bg-gray-200 flex flex-col space-y-5 py-8 px-4">
		<h1 class="text-center text-xl">Guest List</h1>
		<SearchBox />
		<div class="py-5">
			<h1 class="text-center text-2xl mb-2">{{selectedGuest ? selectedGuest.Name : 'Aucune sélection' }}</h1>
			<p class="text-center text-xl font-bold">{{selectedGuest ? 'Table ' + selectedGuest.Table : '&nbsp;'}}</p>
		</div>
		<div class="relative">
			<img class="absolute inset-0 object-cover" :src="require('@/assets/img/background.png')">
			<img v-for="table in Tables" :key="'table-' + table" 
				:class="selectedGuest && selectedGuest.Table == table + 1 ? 'opacity-100' : 'opacity-0'"
				class="absolute inset-0 object-cover transition-opacity duration-500"
				:src="require(`@/assets/img/${table + 1}.png`)">
		</div>
	</div>
</template>
<script>
import { mapGetters, mapState } from 'vuex'
import SearchBox from '@/components/SearchBox.vue'
export default {
	components: {
		SearchBox
	},
	computed: {
		...mapState(['selectedGuest']),
		...mapGetters(['searchResults']),
		Tables() {
			return Array.from(Array(19).keys())
		}
	}
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style