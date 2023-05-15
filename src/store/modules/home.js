import { defineStore } from 'pinia'
import { getHomeCategoriesAPI, getHomeHotSuggestsAPI, getHotSuggestionsAPI, getHouseList } from '@/api/modules/home.js'


const useHome = defineStore('home', {
	state: () => ({
		hotCity: {},
		price: [],
		houseSuggests: [],
		categoriesList: {},
		houseList: [],
		currentPage: 1,
		isShowLoading:false,
	}),
	actions: {
		async gethotCity() {
			let res = await getHotSuggestionsAPI()
			this.hotCity = res.data
		},
		async getHomeHotSuggestsFN() {
			const res = await getHomeHotSuggestsAPI()
			this.houseSuggests = res.data
		},
		async getHomeCategoriesFN() {
			const res = await getHomeCategoriesAPI()
			this.categoriesList = res.data
		},
		async getHouseListFN() {
			const res = await getHouseList(this.currentPage)
			this.houseList.push(...res.data.data)
			this.currentPage++
		}
		
		
	}
})
export default useHome;
