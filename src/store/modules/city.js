import { defineStore } from 'pinia'
import { getCityListAPI } from '@/api/modules/home.js'


const useCity = defineStore('city', {
	state() {
		return {
			currentCity: {
				cityName: '四川',
			},
			homeHotCityList: [],
		}
	},
	actions: {
		async getCityListFN() {
			// const res = await getCityListAPI();
			// this.homeHotCityList=res.data
		}
	}
})
export default useCity;
