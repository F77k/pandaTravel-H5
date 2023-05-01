import { defineStore } from 'pinia'

const useCity = defineStore('city',{
	state() {
		return {
			cityName:'四川',
			homeHotCityList: [],
		}
	},
	actions: {
	}
})
export default useCity;
