import React from "react";
import { Container } from "./styles";
import { BsChat } from "react-icons/bs";
import { FiTrash2 } from "react-icons/fi";
import Skeleton from "@mui/material/Skeleton";
import timeAgo from "../../utils/timeAgo";
import Like from "../../components/Like";
import { Avatar } from "../Avatar";
import { Link } from "react-router-dom";
import { Image } from "./files/Image";
import { Video } from "./files/Video";
import { BsThreeDots } from "react-icons/bs";
import ls from "localstorage-slim";
import { ClickAwayListener } from "@mui/material";

export const Post = (props) => {
  const { post, loading } = props;

  const [openOptions, setOpenOptions] = React.useState(false);

  const me = {
    username: ls.get("@wg_username"),
  };

  const checkname = (name) => {
    if (name === me.username) {
      return true;
    }
  };

  return (
    <Container load={loading} key={post.id}>
      <div className="post">
        <div className="userInfos">
          <Link to={checkname(post.username) ? `/me` : `/me/${post.username}`}>
            <Avatar
              load={loading}
              className="userAvatar"
              username={post.username}
              alt="Profile"
            />
          </Link>

          <div className="userInfo">
            <Link
              to={checkname(post.username) ? `/me` : `/me/${post.username}`}
            >
              <p className="userName">
                {loading ? (
                  <Skeleton width={100} animation="wave" />
                ) : (
                  post.Personal.fname + " " + post.Personal.lname
                )}
              </p>
            </Link>
            {loading ? (
              <p>
                <Skeleton width="70%" animation="wave" />
              </p>
            ) : (
              <p>{timeAgo(Date.parse(post.postedAt))}</p>
            )}
          </div>

          {loading ? null : post.username === me.username ? (
            <ClickAwayListener onClickAway={() => setOpenOptions(false)}>
              <div className="options--btn">
                <BsThreeDots onClick={() => setOpenOptions(true)} />
                {openOptions ? <Dropdown /> : null}
              </div>
            </ClickAwayListener>
          ) : null}
        </div>

        {post.isImage ? (
          <Image
            className="postImage"
            id={post.id}
            load={loading}
            alt="Post Image"
          />
        ) : null}
        {post.isVideo ? (
          <Video
            className="postImage"
            id={post.id}
            load={loading}
            alt="Post Image"
          />
        ) : null}
        {loading ? (
          <p className="postDescription">
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
          </p>
        ) : post.content ? (
          <p className="postDescription">{post.content}</p>
        ) : null}

        <div className="postTags">
          {loading ? (
            <>
              <Skeleton width={50} style={{ marginRight: 10 }} />
              <Skeleton width={50} style={{ marginRight: 10 }} />
              <Skeleton width={50} style={{ marginRight: 10 }} />
            </>
          ) : (
            <>
              {post.hashtags.map((hashtag) => (
                <div key={hashtag}>#{hashtag}</div>
              ))}
            </>
          )}
        </div>
      </div>

      {props.isComents ? null : (
        <div className="postInfos">
          <div className="postLikes">
            <Like
              postData={post}
              key={post.id}
              mutateUrl={props.url}
              posts={props.posts}
            />
            <p>
              {loading ? (
                <Skeleton width="40px" />
              ) : (
                post._count.Likes + " LIKES"
              )}
            </p>
          </div>

          <div className="postComments">
            <Link to={`/coments/${post.id}`}>
              <BsChat />
            </Link>
            <p>
              {loading ? (
                <Skeleton width="40px" />
              ) : (
                post._count.Comments + " COMENTÁRIO"
              )}
            </p>
          </div>
        </div>
      )}
    </Container>
  );
};

const Dropdown = () => {
  return (
    <ul className="options">
      <li className="options--delete">
        <FiTrash2 /> Apagar
      </li>
    </ul>
  );
};
