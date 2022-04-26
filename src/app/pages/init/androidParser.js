import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import ls from "localstorage-slim";
// import { Container } from './styles';

export const AndroidParser = () => {
  const { pushtoken } = useParams();
  const navigate = useNavigate();

  if (pushtoken) {
    ls.set("@wg_pushtoken", pushtoken);
    setTimeout(() => {
      navigate("/");
    }, 500);
  }

  return <div />;
};
