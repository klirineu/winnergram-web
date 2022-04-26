import React, { useState } from "react";
import { Container } from "./styles";

import love from "../../../../assets/love.svg";
import console from "../../../../assets/console.svg";
import dumbbell from "../../../../assets/dumbbell.svg";
import educacao from "../../../../assets/educacao.svg";
import esporte from "../../../../assets/esporte.svg";
import fotos from "../../../../assets/fotos.svg";
import gastronomia from "../../../../assets/gastronomia.svg";
import ideia from "../../../../assets/ideia.svg";
import moneyBag from "../../../../assets/moneyBag.svg";
import monitor from "../../../../assets/monitor.svg";
import musica from "../../../../assets/musica.svg";
import penguin from "../../../../assets/penguin.svg";
import questionMark from "../../../../assets/questionMark.svg";
import sweater from "../../../../assets/sweater.svg";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

export const Categories = (props) => {
  const { handleCategory, dataPost } = props;
  const navigate = useNavigate();
  const [selectedCategory, setCategory] = useState(dataPost.category);

  const handlegetCategory = () => {
    handleCategory(selectedCategory);
    navigate("/newGoal");
  };

  return (
    <Container>
      <div className="cards">
        <div
          className={`${selectedCategory === "amor" ? "active" : ""} card love`}
        >
          <div onClick={() => setCategory("amor")}>
            <img className="love" src={love} alt="love" />
          </div>

          <h3>Amor</h3>
        </div>

        <div
          className={`${
            selectedCategory === "gastronomia" ? "active" : ""
          } card gast`}
        >
          <div onClick={() => setCategory("gastronomia")}>
            <img className="gastronomia" src={gastronomia} alt="gastro" />
          </div>

          <h3>Gastronomia</h3>
        </div>

        <div
          className={`${selectedCategory === "foto" ? "active" : ""} card pic`}
        >
          <div onClick={() => setCategory("foto")}>
            <img className="fotos" src={fotos} alt="fotos" />
          </div>

          <h3>Foto</h3>
        </div>

        <div
          className={`${
            selectedCategory === "esporte" ? "active" : ""
          } card esp`}
        >
          <div onClick={() => setCategory("esporte")}>
            <img className="esporte" src={esporte} alt="esporte" />
          </div>
          <h3>Esporte</h3>
        </div>

        <div
          className={`${
            selectedCategory === "entreterimento" ? "active" : ""
          } card ent`}
        >
          <div onClick={() => setCategory("entreterimento")}>
            <img className="monitor" src={monitor} alt="monitor" />
          </div>
          <h3>Entretenimento</h3>
        </div>

        <div
          className={`${
            selectedCategory === "financas" ? "active" : ""
          } card fin`}
        >
          <div onClick={() => setCategory("financas")}>
            <img className="moneyBag" src={moneyBag} alt="moneyMoney" />
          </div>
          <h3>Finanças</h3>
        </div>

        <div
          className={`${
            selectedCategory === "educacao" ? "active" : ""
          } card edu`}
        >
          <div onClick={() => setCategory("educacao")}>
            <img className="educacao" src={educacao} alt="education" />
          </div>
          <h3>Educação</h3>
        </div>

        <div
          className={`${
            selectedCategory === "musica" ? "active" : ""
          } card mus`}
        >
          <div onClick={() => setCategory("musica")}>
            <img className="musica" src={musica} alt="music" />
          </div>
          <h3>Música</h3>
        </div>

        <div
          className={`${selectedCategory === "jogos" ? "active" : ""} card jog`}
        >
          <div onClick={() => setCategory("jogos")}>
            <img className="console" src={console} alt="console" />
          </div>
          <h3>Jogos</h3>
        </div>

        <div
          className={`${
            selectedCategory === "animais" ? "active" : ""
          } card ani`}
        >
          <div onClick={() => setCategory("animais")}>
            <img className="penguin" src={penguin} alt="penguin" />
          </div>
          <h3>Animais</h3>
        </div>

        <div
          className={`${
            selectedCategory === "fitnes" ? "active" : ""
          } card fit`}
        >
          <div onClick={() => setCategory("fitnes")}>
            <img className="dumbbell" src={dumbbell} alt="dumbbell" />
          </div>
          <h3>Fitness</h3>
        </div>

        <div
          className={`${selectedCategory === "moda" ? "active" : ""} card mod`}
        >
          <div onClick={() => setCategory("moda")}>
            <img className="sweater" src={sweater} alt="agua" />
          </div>
          <h3>Moda</h3>
        </div>

        <div
          className={`${
            selectedCategory === "criatividade" ? "active" : ""
          } card cri`}
        >
          <div onClick={() => setCategory("criatividade")}>
            <img className="ideia" src={ideia} alt="noidea" />
          </div>
          <h3>Criatividade</h3>
        </div>

        <div
          className={`${
            selectedCategory === "outros" ? "active" : ""
          } card out`}
        >
          <div onClick={() => setCategory("outros")}>
            <img className="questionMark" src={questionMark} alt="card" />
          </div>
          <h3>Outros</h3>
        </div>
      </div>

      <div className="bottom">
        <Button className="primaryBtn" onClick={() => handlegetCategory()}>
          Selecionar
        </Button>
      </div>
    </Container>
  );
};
