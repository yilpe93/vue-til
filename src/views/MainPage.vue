<template>
	<div>
		<div class="main list-container contents">
			<h1 class="page-header">Today I Learned</h1>
			<LoadingSpinner v-if="isLoading"></LoadingSpinner>
			<ul v-else>
				<PostListItem
					v-for="postItem in postItems"
					:key="postItem._id"
					:postItem="postItem"
					@refresh="fetchData"
				></PostListItem>
			</ul>
		</div>
		<router-link to="/add" class="create-button">
			<i class="ion-md-add"></i>
		</router-link>
	</div>
</template>

<script>
import PostListItem from '@/components/posts/PostListItem.vue';
import LoadingSpinner from '@/components/common/LoadingSpinner.vue';
import { fetchPosts } from '@/api/posts';

export default {
	components: {
		PostListItem,
		LoadingSpinner
	},
	data() {
		return {
			isLoading: false,
			postItems: []
		};
	},
	methods: {
		async fetchData() {
			this.isLoading = true;
			const { data } = await fetchPosts();
			this.isLoading = false;
			this.postItems = data.posts;
		}
	},
	created() {
		this.fetchData();
	}
};
</script>

<style>
/* .post-wrapper ul {
	display: flex;
}

.post-wrapper ul li {
	width: 330px;
	height: 330px;
	text-align: center;
	background: yellow;
}

.post-wrapper ul li:nth-child(3n - 1) {
	margin: 0 10px;
} */
</style>
