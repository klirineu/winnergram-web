import React from "react";
import { Container } from "./styles";
import ls from "localstorage-slim";
import { Button, CircularProgress } from "@mui/material";

import img1 from "../../../assets/undraw_note_list_re_r4u9.png";
import img2 from "../../../assets/undraw_my_notifications_re_ehmk.png";
import img3 from "../../../assets/undraw_world_re_768g.png";
import { useNavigate } from "react-router-dom";

export const Welcome = () => {
  const [slider, setSlider] = React.useState(1);
  const [fade, setFade] = React.useState(true);
  const [responseLoad, setResponseLoad] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setFade(false);
      clearTimeout(timer);
    }, 400);
  }, [slider]);

  const handleContinue = () => {
    if (slider === 1) {
      setSlider(2);
      setFade(true);
    } else if (slider === 2) {
      setSlider(3);
      setFade(true);
    }
  };

  const handleJoin = () => {
    ls.set("@wg_welcome", true);
    setResponseLoad(true);

    setTimeout(() => {
      setResponseLoad(false);
      navigate("/");
    }, 2000);
  };

  return (
    <Container>
      {slider === 1 ? (
        <img
          src={img1}
          className={`${fade ? "fade" : ""}`}
          alt="illustration"
        />
      ) : slider === 2 ? (
        <img
          src={img2}
          className={`title ${fade ? "fade" : ""}`}
          alt="illustration"
        />
      ) : (
        <img
          src={img3}
          className={`title ${fade ? "fade" : ""}`}
          alt="illustration"
        />
      )}

      <div>
        {slider === 1 ? (
          <h2 className={`title ${fade ? "fade" : ""}`}>Bem-vindo</h2>
        ) : slider === 2 ? (
          <h2 className={`title ${fade ? "fade" : ""}`}>Winnergram</h2>
        ) : slider === 3 ? (
          <h2 className={`title ${fade ? "fade" : ""}`}>Conquistas</h2>
        ) : (
          ""
        )}
      </div>

      {slider === 1 ? (
        <div className={`text enter`}>
          <p>
            Boas vindas ao nosso aplicativo! Faremos uma breve introdução sobre
            quem somos e quais são nossos objetivos neste app.
          </p>
        </div>
      ) : slider === 2 ? (
        <div className={`text ${fade ? "fade" : ""}`}>
          <p>
            O Winnergram é um aplicativo de metas onde você pode compartilhar o
            seu dia dia juntamente com seus desafios no formato de uma rede
            social!
          </p>
          <p>
            O objetivo é fazer com que todos da comunidade possam se ajudar a
            cumprir suas metas juntos.
          </p>
        </div>
      ) : (
        <div className={`text ${fade ? "fade" : ""}`}>
          <p>
            Ao final de cada meta cumprida, você desbloqueia uma nova conquista
            e assim, disputa com diversas outras pessoas de todos lugares do
            mundo
          </p>
          <p>
            Chame seus amigos e venha fazer parte da nossa comunidade e cumprir
            suas metas!
          </p>
        </div>
      )}

      <div className="dots">
        <div className={`dot ${slider === 1 ? "active" : ""}`}></div>
        <div className={`dot ${slider === 2 ? "active" : ""}`}></div>
        <div className={`dot ${slider === 3 ? "active" : ""}`}></div>
      </div>

      {slider === 3 ? (
        <Button
          className="primaryBtn"
          onClick={() => {
            handleJoin() && setResponseLoad(true);
          }}
          disabled={responseLoad ? true : false}
        >
          {responseLoad ? <CircularProgress /> : "ENTRAR"}
        </Button>
      ) : (
        <button onClick={handleContinue}>Continuar</button>
      )}
    </Container>
  );
};
