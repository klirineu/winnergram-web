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

  & > h1 {
    margin-bottom: 20px;
    font-weight: 500;
  }

  form {
    min-width: 300px;
    max-width: 425px;
    width: 80%;
    & > :nth-child(2) {
      margin-bottom: 5px;
    }
    .form--input {
      svg {
        color: ${(props) => props.theme.placeholder};
        opacity: 0.7;
      }
    }
    .passwordLabels {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .MuiFormControlLabel-label,
      a {
        font-size: 16px;
      }
      .Mui-checked {
        color: #3caefc;
      }
      svg {
        font-size: 20px;
      }
      a {
        color: #3caefc;
      }
    }
  }

  & > button {
    margin: 20px 0;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    span.MuiCircularProgress-root {
      margin: 5px 0;
      color: #fff;
      width: 24px !important;
      height: 24px !important;
    }
    &:hover {
      background-color: ${(props) => props.theme.primaryHover};
    }
  }

  .sign {
    margin: 10px 0;

    display: flex;
    flex-direction: column;
    a {
      font-weight: 500;
      color: ${(props) => props.theme.primary};
    }
  }
`;
