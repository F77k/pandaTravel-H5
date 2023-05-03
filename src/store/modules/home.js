import { defineStore } from 'pinia'
import { getHotSuggestionsAPI } from '@/api/modules/home.js'


const useHome = defineStore('home', {
	state() {
		return {
			hotCity: {},
			price:[],
		
		}
	},
	actions: {
		async gethotCity() {
			let res = await getHotSuggestionsAPI()
			this.hotCity=res.data
		}
	}
})
export default useHome;
