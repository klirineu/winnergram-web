import React, { Suspense } from "react";
import { loggedIn, initWelcome } from "./app/utils/auth";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import WithMenu from "./app/components/BottomMenu/Menu";
import { Spinner } from "./app/components/Spinner/Spinner";

const Init = React.lazy(() =>
  import("./app/pages/init/Init").then((module) => ({
    default: module.Init,
  }))
);

const AndroidParser = React.lazy(() =>
  import("./app/pages/init/androidParser").then((module) => ({
    default: module.AndroidParser,
  }))
);

const Confirm = React.lazy(() =>
  import("./app/pages/confirmEmail/Confirm").then((module) => ({
    default: module.Confirm,
  }))
);

const Sign = React.lazy(() =>
  import("./app/pages/sign/sign").then((module) => ({
    default: module.Sign,
  }))
);
const Personal = React.lazy(() =>
  import("./app/pages/personal/Personal").then((module) => ({
    default: module.Personal,
  }))
);
const Login = React.lazy(() =>
  import("./app/pages/Login/Login").then((module) => ({
    default: module.Login,
  }))
);
const Feed = React.lazy(() =>
  import("./app/pages/feed/feed").then((module) => ({
    default: module.Feed,
  }))
);
const Me = React.lazy(() =>
  import("./app/pages/profile/Profile").then((module) => ({
    default: module.Me,
  }))
);

const Member = React.lazy(() =>
  import("./app/pages/profile/Member/Profile").then((module) => ({
    default: module.Member,
  }))
);

const NewGoal = React.lazy(() =>
  import("./app/pages/newGoal/NewGoal").then((module) => ({
    default: module.NewGoal,
  }))
);
const NewPost = React.lazy(() =>
  import("./app/pages/newPost/NewPost").then((module) => ({
    default: module.NewPost,
  }))
);
const Explore = React.lazy(() =>
  import("./app/pages/explore/Explore").then((module) => ({
    default: module.Explore,
  }))
);
const Rank = React.lazy(() =>
  import("./app/pages/rank/Rank").then((module) => ({
    default: module.Rank,
  }))
);

const Chat = React.lazy(() =>
  import("./app/pages/chat/Chat").then((module) => ({
    default: module.Chat,
  }))
);
const Conversation = React.lazy(() =>
  import("./app/pages/chat/dms/dms").then((module) => ({
    default: module.Conversation,
  }))
);
const Welcome = React.lazy(() =>
  import("./app/pages/welcome/Welcome").then((module) => ({
    default: module.Welcome,
  }))
);
const Coments = React.lazy(() =>
  import("./app/pages/coments/Coments").then((module) => ({
    default: module.Coments,
  }))
);

const PrivateRoute = ({ children }) =>
  loggedIn() ? children : <Navigate to="/" />;

const WelcomeScreen = ({ children }) =>
  initWelcome() ? children : <Navigate to="/welcome" />;

const Routing = () => {
  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
      if (error.message === "Error: Request failed with status code 401") {
        setInterval(() => {
          window.location.href("/login");
        }, 1000);
      }
      if (error.message === "Request failed with status code 404") {
        setInterval(() => {
          window.location.href("/feed");
        }, 1000);
      }
      return { hasError: true };
    }

    render() {
      if (this.state.hasError) {
        return <h1>:( Houve um Erro.</h1>;
      }

      return this.props.children;
    }
  }

  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route
            path="/"
            element={
              <WelcomeScreen>
                <Init />
              </WelcomeScreen>
            }
          />
          <Route path="/device/parser/:pushtoken" element={<AndroidParser />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/confirm/:secret/:id" element={<Confirm />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/login" element={<Login />} />
          <Route path="/rank" element={<Rank />} />

          <Route
            path="/direct/r/:roomid"
            element={
              <ErrorBoundary>
                <Suspense fallback={<Spinner />}>
                  <PrivateRoute>
                    <Conversation />
                  </PrivateRoute>
                </Suspense>
              </ErrorBoundary>
            }
          />

          <Route
            path="/coments/:postid"
            element={
              <ErrorBoundary>
                <Suspense fallback={<Spinner />}>
                  <PrivateRoute>
                    <Coments />
                  </PrivateRoute>
                </Suspense>
              </ErrorBoundary>
            }
          />

          <Route element={<WithMenu />}>
            <Route
              path="/feed"
              element={
                <ErrorBoundary>
                  <Suspense fallback={<Spinner />}>
                    <PrivateRoute>
                      <Feed />
                    </PrivateRoute>
                  </Suspense>
                </ErrorBoundary>
              }
            />
            <Route
              path="/me/:username/*"
              element={
                <ErrorBoundary>
                  <Suspense fallback={<Spinner />}>
                    <PrivateRoute>
                      <Member />
                    </PrivateRoute>
                  </Suspense>
                </ErrorBoundary>
              }
            />

            <Route
              path="/me/*"
              element={
                <Suspense fallback={<Spinner />}>
                  <PrivateRoute>
                    <Me />
                  </PrivateRoute>
                </Suspense>
              }
            />
            <Route
              path="/direct"
              element={
                <ErrorBoundary>
                  <Suspense fallback={<Spinner />}>
                    <PrivateRoute>
                      <Chat />
                    </PrivateRoute>
                  </Suspense>
                </ErrorBoundary>
              }
            />

            <Route
              path="/settings/*"
              element={
                <Suspense fallback={<Spinner />}>
                  <PrivateRoute>
                    <Me />
                  </PrivateRoute>
                </Suspense>
              }
            />

            <Route
              path="/newGoal/*"
              element={
                <Suspense fallback={<Spinner />}>
                  <PrivateRoute>
                    <NewGoal />
                  </PrivateRoute>
                </Suspense>
              }
            />
            <Route
              path="/newPost"
              element={
                <Suspense fallback={<Spinner />}>
                  <PrivateRoute>
                    <NewPost />
                  </PrivateRoute>
                </Suspense>
              }
            />

            <Route
              path="/explore/*"
              element={
                <Suspense fallback={<Spinner />}>
                  <PrivateRoute>
                    <Explore />
                  </PrivateRoute>
                </Suspense>
              }
            />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routing;
