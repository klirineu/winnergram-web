import React, { useState, useRef, useEffect } from "react";
import { Container } from "./styles";
import { FriendText, MeText } from "../../../components/dms/ChatText";
import { userconfig } from "../../../configs/userconfig";
import { decrypt } from "../../../utils/aes";

export const Viewport = ({ socket, prevMessages, room }) => {
  const messageRef = useRef();
  const [messages, setMessages] = useState(prevMessages);

  useEffect(() => {
    if (socket) {
      socket.emit("wg_join", room);
      socket.on("wg_callback", (data) => {
        let temp = messages;

        temp.push({
          id: data.id,
          room: data.room,
          author: data.author,
          message: data.message,
        });

        setMessages([...temp]);
      });

      return () => {
        socket.off("wg_callback");
      };
    }
  }, [messages, room, socket]);

  const scrollToBottom = () => {
    messageRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
  };

  useEffect(scrollToBottom, [messages]);
  return (
    <Container>
      <div className="wrap">
        <h4>
          Todas suas mensagens são encriptadas. Nem mesmo o <b>Winnergram</b>
          pode ler ou ouvi-las.
        </h4>
        {messages.map((message) => {
          if (message.author === userconfig.userid) {
            return (
              <MeText
                key={message.id}
                text={decrypt(message.message, room)}
                username={message.author}
              />
            );
          }
          return (
            <FriendText
              key={message.id}
              text={decrypt(message.message, room)}
              username={message.author}
            />
          );
        })}
        <div ref={messageRef} />
      </div>
    </Container>
  );
};
