import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Post } from '../../../components/Post/Post';
import usePosts from '../../../hooks/usePosts';
import { Empty } from "../../../components/Empty/Empty";

export const Feed = () => {
	const { username } = useParams()
	const navigate = useNavigate();
	const { posts, isValidating, isError } = usePosts(`/wg/users/${username}/posts`);

	if (isError) {
		navigate('/login');
	}	

	if (!posts) return null
	return (
		<main>
		<h2>Meus Post's</h2>
			<div className="posts">
				{posts.code ? <Empty /> 
				:
				posts.map((data) => ( 
					<Post loading={isValidating} key={data.id} post={data} url={`/wg/users/${username}/posts`} posts={posts} /> 
				))
				}
			</div>
		</main>
	)
}