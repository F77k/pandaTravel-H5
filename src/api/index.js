import axios from 'axios'
//数据请求
export const request=axios.create({
	baseURL:'http://codercba.com:1888/api',
	timeout: 5000,
})
//地理位置请求（网络连接ip）
export const location=axios.create({
     baseURL:'https://api.bigdatacloud.net',
	timeout : 5000
})
