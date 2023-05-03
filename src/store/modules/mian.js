import { defineStore } from 'pinia'

const startDate = new Date()
const endDate = new Date()
endDate.setDate(startDate.getDate() + 1)
const useMian = defineStore('mian', {
	state() {
		return {
			token: '',
			startDate,
			endDate,
		}
	}
})
export default useMian

