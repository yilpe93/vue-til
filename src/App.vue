<template>
	<div>
		<app-header />
		<div>
			<router-view></router-view>
		</div>
	</div>
</template>

<script>
import AppHeader from '@/components/common/AppHeader.vue';

export default {
	components: {
		AppHeader
	}
};
</script>

<style>
@import './css/reset.css';
@import './css/common.css';
</style>
