<template>
	<div class="contents">
		<div class="form-wrapper form-wrapper-sm">
			<form @submit.prevent="submitForm" class="form">
				<div>
					<label for="username">id:</label>
					<input id="username" type="text" v-model="username" />
					<p class="validation-text">
						<span class="warning" v-if="!isUsernameValid && username">
							Please enter an email address
						</span>
					</p>
				</div>
				<div>
					<label for="password">pw:</label>
					<input id="password" type="text" v-model="password" />
				</div>
				<button
					:disabled="!isUsernameValid || !password"
					type="submit"
					class="btn"
					:class="!isUsernameValid || !password ? 'disabled' : null"
				>
					로그인
				</button>
			</form>
			<p class="log">{{ logMessage }}</p>
		</div>
	</div>
</template>

<script>
import { validateEmail } from '@/utils/validation';

export default {
	data() {
		return {
			// form values
			username: '',
			password: '',
			// log
			logMessage: ''
		};
	},
	computed: {
		isUsernameValid() {
			return validateEmail(this.username);
		}
	},
	methods: {
		initForm() {
			this.username = '';
			this.password = '';
		},
		async submitForm() {
			try {
				const userData = {
					username: this.username,
					password: this.password
				};

				/* 
					# Action 처리 
					const { data } = await loginUser(userData);

					this.$store.commit('setToken', data.token);
					this.$store.commit('setUsername', data.user.username);

					// Cook
					saveAuthToCookie(data.token);
					saveUserToCookie(data.user.username);
				*/

				await this.$store.dispatch('LOGIN', userData);
				this.$router.push('/main');
			} catch (error) {
				this.logMessage = error.response.data;
			} finally {
				this.initForm();
			}
		}
	}
};
</script>

<style>
.btn {
	color: white;
}
</style>
