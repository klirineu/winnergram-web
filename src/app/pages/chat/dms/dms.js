// eslint-disable-next-line array-callback-return

import React, { useEffect, useState } from "react";
import { Container } from "./styles";
import { Viewport } from "./Viewport";
import { Input } from "../../../components/chatInput/input";
import { BsArrowRight } from "react-icons/bs";
import { Header } from "../../../components/header/Header";
import useDirect from "../../../hooks/useDirect";
import { userconfig } from "../../../configs/userconfig";
import { useNavigate, useParams } from "react-router-dom";
import io from "socket.io-client";
import settings from "../../../configs/settings.json";
import { encrypt } from "../../../utils/aes";

export const Conversation = () => {
  const { roomid } = useParams();
  const { data, error } = useDirect(`/wg/users/direct/r/${roomid}`);
  const [socket, setSocket] = useState(null);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  if (error) {
    if (error.response.status === 404) {
      navigate("/direct");
    }
    if (error.response.status === 404) {
      navigate("/direct");
    }
  }

  useEffect(() => {
    const newSocket = io(settings.socketUrl);
    setSocket(newSocket);
    return () => newSocket.close();
  }, [setSocket]);

  const headerName = () => {
    if (data.author === userconfig.userid) {
      return data.m_name;
    }
    return data.a_name;
  };

  const newMessage = () => {
    if (message.length) {
      const ans = encrypt(message, roomid);
      socket.emit("wg_newmessage", {
        id: Math.floor(Math.random(444) * (1111 * 1111)) + 1111,
        author: userconfig.userid,
        message: ans,
        room: roomid,
      });
      setMessage("");
    }
  };

  if (!data) return null;
  return (
    <Container>
      <Header title={headerName()} showBtns={true} back />

      <div className="container2">
        <Viewport socket={socket} prevMessages={data.Messages} room={roomid} />
      </div>

      <div className="textInput">
        <Input
          type="text"
          placeholder="Enviar mensagem"
          className="inputChat"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={() => {
            newMessage();
          }}
        >
          <BsArrowRight size={30} />
        </button>
      </div>
    </Container>
  );
};
