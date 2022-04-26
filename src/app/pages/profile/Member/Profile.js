import React, { Suspense, useState } from "react";
import { Container } from "../styles";
import { Link, useParams } from "react-router-dom";
import { Header } from "../../../components/header/Header";
import useSWR from "swr";

import API from "../../../lib/axios";
import { Route, Routes } from "react-router-dom";
import { Spinner } from "../../../components/Spinner/Spinner";
import Skeleton from "@mui/material/Skeleton";
import useUser from "../../../hooks/useUser";
import { Avatar } from "../../../components/Avatar";
import { CircularProgress } from "@mui/material";
import { IoMdPersonAdd } from "react-icons/io";
import { MdPersonOff } from "react-icons/md";

const Feed = React.lazy(() =>
  import("./Feed").then((module) => ({
    default: module.Feed,
  }))
);
// const Infos = React.lazy(() => import('./Infos').then(module => ({
//    default: module.Infos
// })))
const Achievements = React.lazy(() =>
  import("../achievements/achievements").then((module) => ({
    default: module.Achievements,
  }))
);
const Header2 = React.lazy(() =>
  import("../achievements/achievements").then((module) => ({
    default: module.Header2,
  }))
);

export const Member = () => {
  const { username } = useParams();
  const capitalize = ([first, ...rest]) =>
    first.toUpperCase() + rest.join("").toLowerCase();
  const { user } = useUser(username.toLowerCase());
  const { Personal } = user;

  if (!user) return null;
  return (
    <>
      <Container>
        <header>
          <Header
            title={
              capitalize(Personal.fname) + " " + capitalize(Personal.lname)
            }
            back={true}
            showBtns={false}
          />

          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<Header1 />} />
              <Route path="/achievements" element={<Header2 />} />
            </Routes>
          </Suspense>
        </header>

        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<Feed />} />
            <Route path="/achievements" element={<Achievements />} />
          </Routes>
        </Suspense>
      </Container>
    </>
  );
};

const Header1 = () => {
  const { username } = useParams();
  const { user, error, isValidating, mutate } = useUser(username.toLowerCase());
  const [isFollow, setIsFollow] = useState(null);
  const { Followers, Follows } = user._count;
  const [responseLoad, setResponseLoad] = useState(null);

  useSWR(`/wg/social/profile/${user.id}/isFollow`, async (url) => {
    const { data } = await API.get(url);

    setIsFollow(data.meta);
    return data;
  });

  const handleFollow = async () => {
    mutate(
      {
        ...user,
        _count: { ...user._count, Followers: user._count.Followers + 1 },
      },
      false
    );
    setIsFollow(true);

    try {
      await API.patch(`/wg/social/profile/${user.id}/follow`);

      setIsFollow(true);
      setResponseLoad(false);
    } catch (error) {
      setIsFollow(true);
      setResponseLoad(false);
    }
  };

  const handleunFollow = async () => {
    mutate(
      {
        ...user,
        _count: { ...user._count, Followers: user._count.Followers - 1 },
      },
      false
    );

    try {
      await API.delete(`/wg/social/profile/${user.id}/unfollow`);

      setIsFollow(false);
      setResponseLoad(false);
    } catch (error) {
      setIsFollow(false);
      setResponseLoad(false);
    }
  };

  if (error) return "Error Aguardando <SNACKBAR>";
  if (!user) return null;

  return (
    <>
      <div className="header header1">
        <Avatar className="userAvatar" username={username.toLowerCase()} />

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
          <Link to="#">
            {isFollow ? (
              <button
                onClick={() => {
                  handleunFollow() && setResponseLoad(true);
                }}
                disabled={responseLoad ? "disabled" : ""}
              >
                {" "}
                {responseLoad ? <CircularProgress /> : <MdPersonOff />}{" "}
              </button>
            ) : (
              <button
                onClick={() => {
                  handleFollow() && setResponseLoad(true);
                }}
                disabled={responseLoad ? "disabled" : ""}
              >
                {" "}
                {responseLoad ? <CircularProgress /> : <IoMdPersonAdd />}{" "}
              </button>
            )}
          </Link>
        </div>
      </div>
    </>
  );
};
