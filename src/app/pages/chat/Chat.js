import React, { useState } from "react";
import { Header } from "../../components/header/Header";
import { Input } from "../../components/Input/Input";
import { Container } from "./styles";
import { Avatar } from "../../components/Avatar";
import useFollowing from "../../hooks/useFollowing";
import { IoMdSearch } from "react-icons/io";
import { userconfig } from "../../configs/userconfig";
import useUser from "../../hooks/useUser";
import useDirectList from "../../hooks/useDirectList";
import timeAgo from "../../utils/timeAgo";
import { decrypt } from "../../utils/aes";
import { Empty } from "../../components/Empty/Empty";

export const Chat = () => {
  const [search, setSearch] = useState("");
  const { following } = useFollowing(userconfig.username);
  const { data } = useDirectList("/wg/users/direct/get-actives");

  const imLastMessage = (id) => {
    if (id === userconfig.userid) {
      return true;
    }
    return false;
  };

  if (!following) return null;
  return (
    <Container>
      <Header title="Inbox" back={true} showBtns={true} />

      <div className="search">
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          icon={<IoMdSearch />}
          placeholder="Pesquisar conversas"
        />
      </div>
      {following.Follows < 1 ? null : (
        <div className="friends">
          <h3>Seguindo</h3>
          <div className="friends--list">
            {following.Follows.map((follow) => (
              <User
                username={follow.member}
                room={follow.room}
                key={follow.id}
              />
            ))}
          </div>
        </div>
      )}

      <div className="chats">
        <h3>Conversas</h3>

        {data.length < 1 ? (
          <Empty />
        ) : (
          <div className="chats--list">
            {data
              .filter((direct) =>
                imLastMessage(direct.author)
                  ? direct.m_name.includes(search)
                  : direct.a_name.includes(search)
              )
              .map((chat) => {
                return (
                  <a href={`/direct/r/${chat.room}`} key={chat.id}>
                    <UserChat
                      message={decrypt(chat.Messages.message, chat.room)}
                      username={
                        imLastMessage(chat.author) ? chat.member : chat.author
                      }
                      name={
                        imLastMessage(chat.author) ? chat.m_name : chat.a_name
                      }
                      date={
                        timeAgo(chat.Messages.created_at) === "1 minuto atrás"
                          ? "Agora mesmo"
                          : timeAgo(chat.Messages.created_at)
                      }
                      key={chat.id}
                    />
                  </a>
                );
              })}
          </div>
        )}
      </div>
    </Container>
  );
};

const User = (props) => {
  const { username, room } = props;
  const { user } = useUser(username);
  const capitalize = ([first, ...rest]) =>
    first.toUpperCase() + rest.join("").toLowerCase();
  if (!user) return null;
  return (
    <a href={"/direct/r/" + room}>
      <div className="user">
        <Avatar username={username} />
        <p>
          {capitalize(user.Personal.fname)} {capitalize(user.Personal.lname)}
        </p>
      </div>
    </a>
  );
};

const UserChat = (props) => {
  const { message, username, name, date } = props;
  return (
    <div className="userChat">
      <Avatar username={username} />
      <div className="last">
        <h3>{name}</h3>
        <p>{message}</p>
      </div>
      <h5 className="date">{date}</h5>
    </div>
  );
};
