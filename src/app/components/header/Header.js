import React from "react";
import { Container } from "./styles";

import { BsChat } from "react-icons/bs";
import { IoIosArrowBack } from "react-icons/io";
import { IoSettingsOutline, IoAddCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export const Header = (props) => {
  const { title, back, handleBack, showBtns } = props;
  const navigate = useNavigate();

  return (
    <Container>
      {back ? (
        <div
          className="goBack"
          onClick={handleBack ? () => handleBack() : () => navigate(-1)}
        >
          <IoIosArrowBack />
          <h3>{title}</h3>
        </div>
      ) : (
        <h3>{title}</h3>
      )}
      <div>
        {showBtns ? (
          <>
            <BsChat onClick={() => navigate("/direct")} />
            <IoAddCircleOutline
              className="add"
              onClick={() => navigate("/newPost")}
            />
            <IoSettingsOutline onClick={() => navigate("/settings/infos")} />
          </>
        ) : (
          <></>
        )}
      </div>
    </Container>
  );
};
