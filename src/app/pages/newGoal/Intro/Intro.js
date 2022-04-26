import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import { File, Input, Textarea } from "../../../components/Input/Input";

import { MdKeyboardArrowRight, MdCameraAlt, MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { Button, Switch } from "@mui/material";

export const Intro = (props) => {
  const { handleAlert, dataPost, setDataPost } = props;
  const navigate = useNavigate();

  const [photo, setPhoto] = useState(null);
  const [showPhoto, setShowPhoto] = useState(false);
  const [categoryBtn, setCategoryBtn] = useState("");

  // gets user date to placeholder
  const final = new Date();
  final.setDate(final.getDate() + 2);
  const finalPlaceholder = final.toLocaleDateString();
  // increment 1 day to reminder placeholder
  const reminderDate = new Date();
  reminderDate.setDate(reminderDate.getDate() + 1);
  const reminderPlaceholder = reminderDate.toLocaleDateString();

  useEffect(() => {
    if (dataPost.category && dataPost.category.length > 1) {
      setCategoryBtn(dataPost.category);
    }
  }, [dataPost.category]);

  const handlePhoto = (e) => {
    setPhoto(e.target.files[0]);
    setShowPhoto(true);
  };
  const handleRemovePhoto = () => {
    setPhoto(null);
    setShowPhoto(false);
  };

  const maskDate = (value) => {
    return value
      .replace(/\D/g, "")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{2})(\d)/, "$1/$2")
      .replace(/(\d{4})(\d)/, "$1");
  };

  return (
    <Container>
      <div className="inputs">
        <Button
          className="primaryBtn categoryBtn"
          onClick={() => navigate("/newGoal/2")}
        >
          {categoryBtn ? (
            <p>
              Categoria: <span>{categoryBtn}</span>
            </p>
          ) : (
            <p>Selecione a categoria da sua meta</p>
          )}
          <span>
            <MdKeyboardArrowRight />
          </span>
        </Button>
        <Input
          value={dataPost.goalName}
          onChange={(e) =>
            setDataPost({ ...dataPost, goalName: e.target.value })
          }
          placeholder="Digite o nome da sua meta"
        />
        <Textarea
          value={dataPost.description}
          onChange={(e) =>
            setDataPost({ ...dataPost, description: e.target.value })
          }
          className="descricao"
          placeholder="Descrição (resumo da sua meta)"
          rows={3}
        />
        <File
          onChange={handlePhoto}
          id="picture"
          placeholder="Foto"
          accept="image"
          icon={<MdCameraAlt />}
        />
      </div>

      {showPhoto && (
        <div className="photo">
          <img src={URL.createObjectURL(photo)} alt="your selected img" />
          <span className="photo--close" onClick={handleRemovePhoto}>
            <MdClose />
          </span>
        </div>
      )}

      <div className="reminders">
        <Input
          icon={<label htmlFor="start">Data Final:</label>}
          id="start"
          value={dataPost.notifies.finalDate}
          onChange={(e) =>
            setDataPost({
              ...dataPost,
              notifies: {
                ...dataPost.notifies,
                finalDate: maskDate(e.target.value),
              },
            })
          }
          placeholder={finalPlaceholder}
        />

        <div className="switchRow">
          <p>Lembrete</p>
          <Switch
            checked={dataPost.notifies.reminderBoll}
            onChange={(e) =>
              setDataPost({
                ...dataPost,
                notifies: {
                  ...dataPost.notifies,
                  reminderBoll: e.target.checked,
                },
              })
            }
            className="switchBtn"
          />
        </div>

        {dataPost.notifies.reminderBoll && (
          <Input
            icon={<label htmlFor="lembrar">Lembrar em:</label>}
            id="lembrar"
            value={dataPost.notifies.reminder}
            onChange={(e) =>
              setDataPost({
                ...dataPost,
                notifies: {
                  ...dataPost.notifies,
                  reminder: maskDate(e.target.value),
                },
              })
            }
            placeholder={reminderPlaceholder}
          />
        )}
      </div>

      <Button onClick={() => ""} className="next primaryBtn">
        Próximo
      </Button>
    </Container>
  );
};
