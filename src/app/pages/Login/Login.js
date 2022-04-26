import * as React from "react";
import API from "../../lib/axios";
import { Container } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo-cut.png";
import { Input } from "../../components/Input/Input";
import { IoMdMail } from "react-icons/io";
import { MdLockOutline } from "react-icons/md";
import { Socials } from "../../components/SocialsLogin/Socials";
import {
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
} from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
//import validateEmail from "../../lib/validateEmail";
import { login } from "../../utils/auth";
import ls from "localstorage-slim";

export const Login = () => {
  const navigate = useNavigate();
  const [responseLoad, setResponseLoad] = React.useState(false);
  const [autoLogin, setAutoLogin] = React.useState(false);

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

  const [authData, setAuthData] = React.useState({
    email: "",
    password: "",
  });

  const handleAuth = async () => {
    if (!authData.email || !authData.password)
      return openSnackbar({
        open: true,
        severity: "info",
        message: "Parece que algum campo não foi digitado.",
      });

    try {
      setResponseLoad(true);

      const { data } = await API.get("/wg/users/authenticate", {
        auth: {
          username: authData.email,
          password: authData.password,
        },
      });

      setResponseLoad(false);
      ls.set("@wg_username", data.username);
      ls.set("@wg_userid", data.id);
      ls.set("@wg_role", data.role);
      login(data.token);

      if (autoLogin) {
        ls.set("@wg_autologin", true);
      }

      return navigate("/feed");
    } catch (error) {
      console.log(error);
      setResponseLoad(false);

      if (error.response.status === 404)
        return openSnackbar({
          open: true,
          severity: "warning",
          message: "Este email não está vinculado a uma conta.",
        });
      if (error.response.status === 401)
        return openSnackbar({
          open: true,
          severity: "warning",
          message: "Senha ou email invalidos.",
        });

      return openSnackbar({
        open: true,
        severity: "error",
        message: "Ocorreu um erro, tente novamente mais tarde.",
      });
    }
  };

  return (
    <>
      <Container>
        <img className="logo" src={logo} alt="Brand" />

        <h1>Minha conta</h1>

        <form>
          <Input
            className="form--input"
            type="email"
            icon={<IoMdMail />}
            placeholder="Email ou usuário"
            onChange={(e) => {
              setAuthData({ ...authData, email: e.target.value });
            }}
          />
          <Input
            className="form--input"
            type="password"
            icon={<MdLockOutline />}
            placeholder="Digite sua senha"
            onChange={(e) => {
              setAuthData({ ...authData, password: e.target.value });
            }}
          />

          <div className="passwordLabels">
            <FormControlLabel
              control={<Checkbox />}
              onChange={() => {
                setAutoLogin(!autoLogin);
              }}
              label="Lembrar-me"
            />
          </div>
        </form>

        <Button
          className="primaryBtn"
          onClick={() => {
            handleAuth();
          }}
          disabled={responseLoad ? true : false}
        >
          {responseLoad ? <CircularProgress /> : "Acessar"}
        </Button>

        <div className="sign">
          <p>Ainda não é cadastrado?</p>
          <Link to="/sign">Cadastre-se agora</Link>
        </div>

        <Socials />
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
