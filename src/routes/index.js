import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	routes: [
		{
			path: '/',
			redirect: '/login'
		},
		{
			path: '/login',
			component: () => import('@/views/LoginPage.vue')
		},
		{
			path: '/signup',
			component: () => import('@/views/SignupPage.vue')
		},
		{
			path: '/main',
			component: () => import('@/views/MainPage.vue'),
			meta: { auth: true }
		},
		{
			path: '/add',
			component: () => import('@/views/PostAddPage.vue'),
			meta: { auth: true }
		},
		// Dynamic Route Matching
		{
			path: '/post/:id',
			component: () => import('@/views/PostEditPage.vue'),
			meta: { auth: true }
		},
		{
			path: '*',
			component: () => import('@/views/NotFoundPage.vue')
		}
	]
});

router.beforeEach((to, from, next) => {
	// to => 이동 페이지
	// from => 현재 페이지 이동
	// next => 다음 페이지 이동

	if (to.meta.auth && !store.getters.isLogin) {
		console.log('인증이 필요합니다.');
		next('/login');
		return;
	}

	next();
	// console.log('to', to);
	// console.log('from', from);
	// console.log('next', next);
});

export default router;
