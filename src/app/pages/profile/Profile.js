import React, { Suspense } from "react";
import { Container } from "./styles";
import { Link, useLocation } from "react-router-dom";
import { Header } from "../../components/header/Header";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Spinner } from "../../components/Spinner/Spinner";
import Skeleton from "@mui/material/Skeleton";
import { Avatar } from "../../components/Avatar";
import ls from "localstorage-slim";

// Hooks
import useUser from "../../hooks/useUser";

const Feed = React.lazy(() =>
  import("./Feed").then((module) => ({
    default: module.Feed,
  }))
);
const Infos = React.lazy(() =>
  import("./Infos").then((module) => ({
    default: module.Infos,
  }))
);
const Achievements = React.lazy(() =>
  import("./achievements/achievements").then((module) => ({
    default: module.Achievements,
  }))
);
const Header2 = React.lazy(() =>
  import("./achievements/achievements").then((module) => ({
    default: module.Header2,
  }))
);
const userconfig = {
  username: ls.get("@wg_username"),
  userid: ls.get("@wg_userid"),
  usertoken: ls.get("@wg_usertoken"),
};

export const Me = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const goBack = () => {
    if (location.pathname === "/me") {
      navigate("/feed");
    } else if (
      location.pathname === "/settings/infos" ||
      location.pathname === "/settings/achievements"
    ) {
      navigate("/me");
    }
  };
  const { user, isError } = useUser(userconfig.username);
  const { Personal } = user;
  const capitalize = ([first, ...rest]) =>
    first.toUpperCase() + rest.join("").toLowerCase();

  if (isError) {
    navigate("/login");
  }

  if (!user) return null;

  if (!Personal) return navigate("/personal");

  return (
    <Container>
      <header>
        <Header
          title={capitalize(Personal.fname) + " " + capitalize(Personal.lname)}
          handleBack={goBack}
          back={true}
          showBtns={true}
        />

        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Header1 />} />
            <Route path="/infos" element={<Header1 />} />
            <Route path="/achievements" element={<Header2 />} />
          </Routes>
        </Suspense>
      </header>

      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/infos" element={<Infos />} />
          <Route path="/achievements" element={<Achievements />} />
        </Routes>
      </Suspense>
    </Container>
  );
};

const Header1 = () => {
  const { user, error, isValidating } = useUser(userconfig.username);
  const { Followers, Follows } = user._count;

  if (error) return "Error Aguardando <SNACKBAR>";
  if (!user) return null;
  return (
    <div className="header header1">
      <Avatar className="userAvatar" username={userconfig.username} />

      <div className="container2">
        <div>
          <p>Seguidores</p>
          {isValidating ? (
            <Skeleton width={50} height={40} variant="text" />
          ) : (
            <span>{Followers}</span>
          )}
        </div>
        <div>
          <p>Seguindo</p>
          {isValidating ? (
            <Skeleton width={50} height={40} variant="text" />
          ) : (
            <span>{Follows}</span>
          )}
        </div>
        <div>
          <p>Curtidas</p>
          {isValidating ? (
            <Skeleton width={50} height={40} variant="text" />
          ) : (
            <span>0</span>
          )}
        </div>
      </div>

      <div className="container3">
        <Link to="/settings/achievements">
          <button>Estatísticas</button>
        </Link>
      </div>
    </div>
  );
};
