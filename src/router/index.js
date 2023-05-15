import { createWebHashHistory, createRouter } from 'vue-router'


const router = createRouter({
	history: createWebHashHistory(),
	routes: [
		{
			path: '/',
			redirect: '/home',
		},
		{
			path: '/home',
			component: () => import('../views/home/index.vue'),
			meta: {showTab: true}
			
		},
		{
			path: '/favor',
			component: () => import('../views/favor/index.vue'),
			meta: {showTab: true}
			
		},
		{
			path: '/order',
			component: () => import('../views/order/index.vue'),
			meta: {showTab: true}
			
		},
		{
			path: '/message',
			component: () => import('../views/message/index.vue'),
			meta: {showTab: true}
			
		},
		{
			path: '/city',
			component: () => import('../views/city/index.vue'),
			meta: {showTab: false}
		},
		{
			path: '/keySearch',
			component: () => import('../views/keySearch/index.vue'),
			meta: {showTab: false}
		},
		{
			path: '/hotelSearch',
			component: () => import('../views/hotelSearch/index.vue'),
			meta: {showTab: false}
		},
		{
			path: '/detail/:id',
			component: () => import('../views/detail/index.vue'),
			meta: {showTab: false}
		},
	]
})
export default router;
