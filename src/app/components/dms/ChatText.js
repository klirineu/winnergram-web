import React from "react";
import { Avatar } from "../Avatar";

export const FriendText = (props) => {
  const { text, username } = props;
  return (
    <div className="chatFriend">
      <Avatar username={username} className="avatar" />
      <div className="text" style={{ maxWidth: "100%" }}>
        <h3>{text}</h3>
      </div>
    </div>
  );
};

export const MeText = (props) => {
  const { text, username } = props;
  return (
    <div className="chatMe">
      <div className="text" style={{ maxWidth: "100%" }}>
        <h3>{text}</h3>
      </div>
      <Avatar username={username} className="avatar" />
    </div>
  );
};
