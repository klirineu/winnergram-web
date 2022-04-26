import React, { useEffect } from "react";
import { Container } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import ls from "localstorage-slim";

import logo from "../../../assets/logo-cut.png";
import { IoMdMail } from "react-icons/io";
import { Socials } from "../../components/SocialsLogin/Socials";
import { Button } from "@mui/material";

export const Init = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (ls.get("@wg_autologin") === true) {
      navigate("/feed");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <img className="logo" src={logo} alt="Brand" />

      <section className="enter">
        <div className="welcome">
          <h1>Bem-vindo(a)</h1>
          <p>Vamos começar</p>
        </div>

        <Link to="/login">
          <Button className="button primaryBtn">
            <IoMdMail /> Acessar usando e-mail
          </Button>
        </Link>

        <div className="sign">
          <p>Ainda não é cadastrado?</p>
          <Link to="/sign">Cadastre-se agora</Link>
        </div>
      </section>

      <Socials />
    </Container>
  );
};
