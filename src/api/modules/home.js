import { location, request } from '@/api/index.js'


/**
 * 获取城市数据
 * @return {Promise}
 * **/
export function getCityListAPI() {
	return request({
		url: '/city/all',
		method: 'GET',
	})
}

/**
 * 点击图标获取当前位置信息（是通过网络连接的附近的地址，不是通过GPS）
 * @param params
 * @return {Promise}
 * **/
export function getCurrentPosition(params) {
	return location({
		url: '/data/reverse-geocode-client',
		params
	})
}

/**
 * 热门建议
 * **/
export function getHotSuggestionsAPI() {
	return request({
		url: '/home/hotSuggests'
	})
}

/**
 * 主页热门推荐
 * */
export function getHomeHotSuggestsAPI() {
	return request({
		url: '/home/hotSuggests'
	})
}

/**
 * 推荐类别（首页小图标房子）
 * */
export function getHomeCategoriesAPI() {
	return request({
		url: '/home/categories',
		method: 'GET'
	})
}

/**
 * 获取房屋列表
 * @param currentPage
 * */
export function getHouseList(currentPage = 1) {
	return request({
		url: 'home/houselist',
		params: {
			page: currentPage
		}
	})
}

/**
 * 酒店详情
 * @param houseId 当前点击的房子id
 * */
export function getHotelDetailsAPI(houseId) {
	return request({
		url: '/detail/infos',
		params: {
			houseId
		}
	})
}
