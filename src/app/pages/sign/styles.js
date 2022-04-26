import styled from "styled-components";

export const Container = styled.div`
  * {
    font-family: "Rubik", sans-serif;
  }
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: fade 0.5s linear;

  ${(props) => props.theme.fadeTransition}

  h1 {
    font-size: 1.8rem;
  }

  form {
    margin: 20px 0;
    margin-top: 20px;
    min-width: 300px;
    max-width: 425px;
    width: 75%;
    display: flex;
    flex-direction: column;
    .form--input {
      svg {
        color: ${(props) => props.theme.placeholder};
        opacity: 0.7;
      }
    }
  }

  button {
    min-width: 150px;
    margin: 20px 0;
    margin-top: 10px;
    padding: 10px 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    span.MuiCircularProgress-root {
      color: #fff;
      width: 24px !important;
      height: 24px !important;
    }
    &:hover {
      background-color: ${(props) => props.theme.primaryHover};
    }
  }

  .login {
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    a {
      font-weight: 500;
      color: ${(props) => props.theme.primary};
      transition: 0.2s ease-in;
      &:hover {
        color: ${(props) => props.theme.primaryHover};
      }
    }
  }
`;
