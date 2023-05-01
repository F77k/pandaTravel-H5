import {request,location} from '@/api/index.js'


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
		url : '/data/reverse-geocode-client',
		params
	})
}

