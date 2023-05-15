import axios from 'axios'
import useHome from '@/store/modules/home.js'


const homeStore = useHome()
//数据请求
export const request = axios.create({
	baseURL: 'http://codercba.com:1888/api',
	timeout: 5000,
})
//地理位置请求（网络连接ip）
export const location = axios.create({
	baseURL: 'https://api.bigdatacloud.net',
	timeout: 5000
})
//请求拦截器
request.interceptors.request.use((config) => {
	homeStore.isShowLoading = true
	return config
}, (err) => {
	homeStore.isShowLoading = true
	return err
})
//响应
request.interceptors.response.use((config) => {
	homeStore.isShowLoading = false
	return config
}, (err) => {
	return err
})

