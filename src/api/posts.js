import { posts } from './index';

// 학습 노트 조작관 관련된 CRUD API

// 학습 노트 데이터 조회 API
function fetchPosts() {
	return posts.get('/');
}

// 특정 학습 노트를 조회하는 API
function fetchPost(postId) {
	return posts.get(postId);
}

// 학습 노트 데이터 생성 API
function createPost(postData) {
	return posts.post('/', postData);
}

// 학습 노트 데이터를 삭제하는 API
function deletePost(postId) {
	return posts.delete(postId);
}

// 학습 노트 데이터를 수정하는 API
function editPost(postId, postData) {
	return posts.put(postId, postData);
}

// CREATE - posts
// POST - posts
// PUT - posts {id}
// DELETE - posts {id}

export { fetchPosts, fetchPost, createPost, deletePost, editPost };
