import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Container } from "./styles";

import { Alert, Snackbar } from "@mui/material";
import { Intro } from "./Intro/Intro";
import { Categories } from "./categories/categories";
import { Header } from "../../components/header/Header";

export const NewGoal = () => {
  const [title, setTitle] = useState("Nova Meta");
  const [alertOpen, setAlertOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    if (location.pathname === "/newGoal") {
      navigate("/feed");
    } else if (location.pathname === "/newGoal/2") {
      navigate("/newGoal");
    } else if (location.pathname === "/newGoal/3") {
      navigate("/newGoal");
    }
  };
  useEffect(() => {
    if (
      location.pathname === "/newGoal" ||
      location.pathname === "/newGoal/3"
    ) {
      setTitle("Nova Meta");
    } else if (location.pathname === "/newGoal/2") {
      setTitle("Categorias");
    }
  }, [location.pathname]);

  // global obj to receive infos
  const [dataPost, setDataPost] = useState({
    category: "",
    goalName: "",
    description: "",
    file: "",
    notifies: {
      finalDate: "",
      reminderBoll: false,
      // true or false
      reminderDate: "",
    },
  });

  // receive category from his page
  const handleCategory = (value) => {
    setDataPost({
      ...dataPost,
      category: value,
    });
  };

  // toggle alert
  const handleAlertOpen = () => {
    setAlertOpen(true);
  };
  const handleAlertclose = () => {
    setAlertOpen(false);
  };

  return (
    <Container>
      <Snackbar
        open={alertOpen}
        autoHideDuration={3000}
        onClose={handleAlertclose}
      >
        <Alert severity="warning" variant="filled" sx={{ width: "100%" }}>
          Parece que algum campo não foi digitado.
        </Alert>
      </Snackbar>
      <Header title={title} handleBack={() => goBack()} back={true} />
      <Routes>
        <Route
          path="/"
          element={
            <Intro
              dataPost={dataPost}
              handleAlert={handleAlertOpen}
              setDataPost={setDataPost}
            />
          }
        />
        <Route
          path="/2"
          element={
            <Categories handleCategory={handleCategory} dataPost={dataPost} />
          }
        />
      </Routes>
    </Container>
  );
};
