import React, { useEffect } from "react";
import { Container } from "./styles";
import usePosts from "../../hooks/usePosts";
import { Post } from "../../components/Post/Post";
import { Header } from "../../components/header/Header";
import { Empty } from "../../components/Empty/Empty";
import ls from "localstorage-slim";
import { useNavigate } from "react-router-dom";
import useUser from "../../hooks/useUser";
import API from "../../lib/axios";
import { getToken } from "../../utils/auth";

export const Feed = () => {
  const userconfig = {
    username: ls.get("@wg_username"),
  };
  const navigate = useNavigate();

  const { posts, isValidating, isError } = usePosts(
    `/wg/users/${userconfig.username}/feed`
  );

  if (isError) {
    navigate("/login");
  }

  const [validateEmail, setOpen] = React.useState(false);
  const closeEmail = () => {
    setOpen(false);
  };
  const { user } = useUser(userconfig.username);

  const handleRegistrationMail = () => {
    if (user.verified === false) {
      setOpen(true);
    }
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    handleRegistrationMail();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!Feed) return null;
  return (
    <Container email={validateEmail ? true : false}>
      {validateEmail ? <EmailWarning close={closeEmail} /> : null}
      <Header title="Oque está Rolando?" back={false} showBtns={true} />
      <div className={`posts ${posts.code ? "empty" : null} `}>
        {posts.code ? (
          <Empty />
        ) : (
          posts.map((data) => (
            <Post
              loading={isValidating}
              key={data.id}
              post={data}
              url={`/wg/users/${userconfig.username}/feed`}
              posts={posts}
            />
          ))
        )}
      </div>
    </Container>
  );
};

const EmailWarning = (props) => {
  const { close } = props;

  const [submited, setSubmit] = React.useState(false);
  const token = { headers: { auth: getToken() } };
  const handleSubmit = async () => {
    setSubmit(true);

    await API.post("/wg/users/register/resend-email", token);

    const timer = setTimeout(() => {
      close();
      clearTimeout(timer);
    }, 3000);
  };

  return (
    <div className={`emailwarning ${submited ? "submited" : null}`}>
      {submited ? (
        <p>Email enviado!</p>
      ) : (
        <>
          <p>Sua conta ainda não foi verificada</p>
          <button onClick={() => handleSubmit()}>Reenviar Email</button>
        </>
      )}
    </div>
  );
};
