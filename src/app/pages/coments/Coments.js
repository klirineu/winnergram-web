import React, { useEffect, useState } from "react";
import { Header } from "../../components/header/Header";
import { Container } from "./styles";
import { Post } from "../../components/Post/Post";
import { useParams } from "react-router-dom";
import usePosts from "../../hooks/usePosts";
import { Avatar } from "../../components/Avatar";
import { HiArrowNarrowRight } from "react-icons/hi";
import { userconfig } from "../../configs/userconfig";
import timeAgo from "../../utils/timeAgo";
import API from "../../lib/axios";
import useUser from "../../hooks/useUser";
import { useNavigate } from "react-router-dom";

export const Coments = () => {
  const { postid } = useParams();
  const { posts, isValidating } = usePosts(`/wg/social/feed/post/${postid}`);
  const [coments, setComents] = useState([]);
  const [content, setContent] = useState("");
  const { user } = useUser(userconfig.username);
  const navigate = useNavigate();

  useEffect(() => {
    setComents(posts.Comments);
  }, [posts]);

  const handleComment = async () => {
    if (!content.length) return null;

    try {
      setComents([
        ...coments,
        {
          content: content,
          id: 100,
          fname: user.Personal.fname,
          lname: user.Personal.lname,
          username: userconfig.username,
          commentedAt: new Date(),
        },
      ]);

      setContent("");
      await API.put(`/wg/social/feed/post/create-newcomment`, {
        postid: postid,
        content: content,
      });
    } catch (e) {
      if (e.response.status === 401) {
        navigate("/login");
      }
    }
  };

  if (!posts) return null;
  return (
    <Container>
      <Header title="Comentários" back={true} showBtns={true} />
      <section>
        <div className="main">
          <Post
            loading={isValidating}
            key={posts.id}
            post={posts}
            url={`/wg/users/${userconfig.username}/feed`}
            posts={posts}
            isComents={true}
          />
          <h3>Comentários (3)</h3>
          <div className="comentsArea">
            {coments.map((comment) => (
              <Comment
                liked={true}
                key={comment.id}
                comments={posts}
                commentedAt={comment.commentedAt}
                text={comment.content}
                user={comment.username}
                name={comment.fname + " " + comment.lname}
              />
            ))}
          </div>
        </div>

        <div className="inputArea">
          <Avatar
            className="userAvatar"
            username={userconfig.username}
            alt="Profile"
          />
          <div className="box">
            <input
              type="text"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              placeholder="Adicionar comentário"
            />
            <button
              onClick={(e) => {
                handleComment();
              }}
            >
              {" "}
              <HiArrowNarrowRight />{" "}
            </button>
          </div>
        </div>
      </section>
    </Container>
  );
};

const Comment = (props) => {
  const { text, name, user, commentedAt } = props;

  return (
    <div className="coment">
      <Avatar className="userAvatar" username={user} alt="Profile" />
      <div className="content">
        <p>
          <strong>{name}</strong>
          <strong> ‧ </strong>
          <span>
            <small> {timeAgo(Date.parse(commentedAt))}</small>
          </span>
        </p>
        <p className="text">{text}</p>
      </div>
    </div>
  );
};
