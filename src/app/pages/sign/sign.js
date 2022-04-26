import * as React from "react";
import API from "../../lib/axios";
import { Container } from "./styles";
import logo from "../../../assets/logo-cut.png";
import { Input } from "../../components/Input/Input";
import { IoMdMail } from "react-icons/io";
import { IoPersonCircle } from "react-icons/io5";
import { MdLockOutline } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { Button, CircularProgress } from "@mui/material";
import validateEmail from "../../utils/validateEmail";
import { login } from "../../utils/auth";
import ls from "localstorage-slim";

export const Sign = () => {
  const navigate = useNavigate();
  const [responseLoad, setResponseLoad] = React.useState(false);
  const [userData, setUserData] = React.useState({
    email: "",
    username: "",
    pass: "",
    pushToken: ls.get("@wg_pushtoken") ? ls.get("@wg_pushtoken") : "nothing",
    retype: "",
  });

  const Alert = React.forwardRef((props, ref) => {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [state, openSnackbar] = React.useState({
    open: false,
    severity: "success",
    message: "This is a default message of snackbar",
  });

  const { open, severity, message } = state;

  const handleClose = () => {
    openSnackbar({ ...state, open: false });
  };

  const handleRegister = async () => {
    if (
      !userData.username ||
      !userData.email ||
      !userData.pass ||
      !userData.retype
    )
      return openSnackbar({
        open: true,
        severity: "info",
        message: "Parece que algum campo não foi digitado.",
      });
    if (!validateEmail(userData.email))
      return openSnackbar({
        open: true,
        severity: "info",
        message: "O formato de email digitado é inválido.",
      });
    if (userData.pass !== userData.retype)
      return openSnackbar({
        open: true,
        severity: "info",
        message: "As senhas digitadas não conhecidem.",
      });

    try {
      setResponseLoad(true);

      const { data } = await API.post("/wg/users/register", userData);
      ls.set("@wg_username", data.username);
      ls.set("@wg_userid", data.id);
      ls.set("@wg_role", data.role);

      login(data.token);

      setResponseLoad(false);
      return navigate("/personal");
    } catch (e) {
      setResponseLoad(false);

      console.log(e);
      if (e.response.data.meta === "username")
        return openSnackbar({
          open: true,
          severity: "warning",
          message: "Este usuario já está em uso.",
        });
      if (e.response.data.meta === "email")
        return openSnackbar({
          open: true,
          severity: "warning",
          message: "Este email já está em uso.",
        });

      return openSnackbar({
        open: true,
        severity: "error",
        message: "Erro ao registrar, tente novamente em breve.",
      });
    }
  };

  return (
    <>
      <Container>
        <img className="logo" src={logo} alt="Brand" />

        <h1>Criar minha conta</h1>

        <form>
          <Input
            className="form--input"
            icon={<IoMdMail />}
            placeholder="Digite seu email"
            type="email"
            onChange={(e) => {
              setUserData({ ...userData, email: e.target.value });
            }}
          />
          <Input
            className="form--input"
            icon={<IoPersonCircle />}
            placeholder="Digite seu nome de usuário"
            type="text"
            onChange={(e) => {
              setUserData({ ...userData, username: e.target.value });
            }}
          />
          <Input
            className="form--input"
            icon={<MdLockOutline />}
            type="password"
            placeholder="Digite sua senha"
            onChange={(e) => {
              setUserData({ ...userData, pass: e.target.value });
            }}
          />
          <Input
            className="form--input"
            icon={<MdLockOutline />}
            type="password"
            placeholder="Digite sua senha novamente"
            onChange={(e) => {
              setUserData({ ...userData, retype: e.target.value });
            }}
          />
        </form>

        <Button
          className="primaryBtn"
          onClick={() => {
            handleRegister();
          }}
          disabled={responseLoad ? true : false}
        >
          {responseLoad ? <CircularProgress /> : "Criar conta"}
        </Button>

        <div className="login">
          <p>Ja é cadastrado?</p>
          <Link to="/login">Acesse sua conta agora!</Link>
        </div>
      </Container>

      <Snackbar
        open={open}
        autoHideDuration={3500}
        ContentProps={{ "aria-describedby": "message-id" }}
        onClose={handleClose}
      >
        <Alert severity={severity} sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </>
  );
};
