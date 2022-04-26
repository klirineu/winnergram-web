import React from 'react'
import { Post } from '../../components/Post/Post';
import usePosts from '../../hooks/usePosts';
import { Empty } from "../../components/Empty/Empty";
import ls from 'localstorage-slim';
import { useNavigate } from 'react-router-dom';
const userconfig  = {
	username: ls.get('@wg_username'),
	userid: ls.get('@wg_userid'),
	usertoken: ls.get('@wg_usertoken')
 }

export const Feed = () => {
	const navigate = useNavigate();

	const { posts, isValidating, isError } = usePosts(`/wg/users/${userconfig.username}/posts`);

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
					<Post loading={isValidating} key={data.id} post={data} url={`/wg/users/${userconfig.username}/posts`} posts={posts} /> 
				))
				}
			</div>
		</main>
	)
}