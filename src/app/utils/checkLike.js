import usePosts from "../app/hooks/usePosts";

export default (postid, url, userid) => {
  const { posts, error } = usePosts(url);

  if (!posts) return null;
  return posts;
};
