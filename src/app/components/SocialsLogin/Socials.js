import React, { useEffect } from "react";
import { Container } from "./styles";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { FaFacebookSquare, FaGoogle } from "react-icons/fa";
import { Button } from "@mui/material";
import API from "../../lib/axiosOAuth";
import base from "../../configs/settings.json";
import ls from "localstorage-slim";
import { login } from "../../utils/auth";

export const Socials = () => {
  const navigate = useNavigate();


  useEffect(() => {
    let currentURL = window.location.href;
    const params = new URLSearchParams(currentURL);
    const idToken = params.get("id_token");
    if (idToken) {
      API.post("/wg/users/auth/google-oauth", { idToken: idToken }).then(
        ({ data }) => {
          ls.set("@wg_username", data.username);
          ls.set("@wg_userid", data.id);
          ls.set("@wg_role", data.role);

          login(data.token);

          return navigate("/feed");
        }
      );
    }
  }, [navigate]);

  const responseFacebook = (response) => {
    console.log(response);
  }

  return (
    <Container>
      <p>
        <span>Ou continue usando</span>
      </p>
      <div>
        <GoogleLogin
          clientId={base.GoogleClientID}
          buttonText="Google Auth"
          uxMode={"redirect"}
          redirectUri={base.redirectUrl}
          cookiePolicy={"single_host_origin"}
          render={(renderProps) => (
            <Button
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              className="primaryBtn"
            >
              <FaGoogle />
            </Button>
          )}
        />

        {/* <FacebookLogin
            appId={base.FacebookAppID}
            autoLoad={true}
            uxMode={"redirect"}
            fields="name,email,picture"
            redirectUri={base.redirectUrl}
            callback={responseFacebook}
            
         />, */}
      
        <Button className="primaryBtn">
          <Link to="/">
            <FaFacebookSquare />{" "}
          </Link>
        </Button>
      </div>
    </Container>
  );
};
