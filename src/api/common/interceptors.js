import store from '@/store';

export function setInterceptors(instance) {
	instance.interceptors.request.use(
		function(config) {
			config.headers.Authorization = store.state.token;
			return config;
		},
		function(error) {
			return Promise.reject(error);
		}
	);

	instance.interceptors.response.use(
		function(reseponse) {
			return reseponse;
		},
		function(error) {
			return Promise.reject(error);
		}
	);

	return instance;
}
