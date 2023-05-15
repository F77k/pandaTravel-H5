import { defineStore } from 'pinia'
import { getHotelDetailsAPI } from '@/api/modules/home.js'


const useDetails = defineStore('details', {
	state: () => ({
		detailList: {},
	}),
	actions: {
		async getHouseDetailsFN(id) {
			const res = await getHotelDetailsAPI(id)
			this.detailList = res.data.data
		}
	}
})
export default useDetails;
