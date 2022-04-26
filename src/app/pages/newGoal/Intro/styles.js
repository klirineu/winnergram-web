import styled from "styled-components";

export const Container = styled.section`
  width: 90%;
  margin: 0 auto;
  animation: slide 0.25s ease-in;
  .inputs {
    display: flex;
    flex-direction: column;
    & > button {
      padding: 12px 25px;
      background-color: ${(props) => props.theme.primary};
      color: #fff;
      border-radius: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        display: flex;
        align-items: center;
      }
      svg {
        font-size: 1.2rem;
      }
    }
    .categoryBtn {
      p {
        font-size: 0.9rem;
        text-transform: none;
        span {
          display: inline;
          border-bottom: 1px solid #fff;
        }
      }
    }
    & > div:nth-child(2) {
      padding: 15px;
    }
    & > button,
    & > div {
      margin: 10px 0;
    }
    & > label {
      width: 50%;
      margin: 20px auto;
      & > div,
      span {
        margin: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      div span {
        margin: 0 5px;
        svg {
          margin: 0;
        }
      }
    }
  }
  .photo {
    margin-top: 40px;
    max-height: 250px;
    border-radius: 20px;
    overflow: hidden;
    display: flex;
    align-items: center;
    position: relative;
    animation: fade 0.4s linear;
    img {
      width: 100%;
    }
    .photo--close {
      position: absolute;
      top: 20px;
      right: 20px;
      z-index: 100;
      color: #fff;
      font-size: 2rem;
      display: flex;
      align-items: center;
      svg {
        filter: drop-shadow(rgba(51, 51, 51, 0.7) 0px 0px 4px);
      }
    }
  }
  .next {
    width: 200px;
    margin: 50px auto;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .reminders {
    & > div {
      margin: 20px 0;
    }
    & > div:nth-child(1),
    & > div:nth-child(3) {
      padding: 15px;
      label {
        width: 40%;
        color: #000;
        font-size: 14px;
        text-align: start;
      }
      input {
        text-align: end;
        ::placeholder {
          color: rgba(0, 0, 0, 0.5);
          text-align: end;
        }
      }
    }
    span.switchBtn {
      width: 65px;
      padding: 5px;
      & .Mui-checked {
        & + .MuiSwitch-track {
          border: 2px solid #278ace;
        }
        & .MuiSwitch-thumb {
          background-color: #278ace;
        }
      }
      & .MuiSwitch-switchBase {
        padding: 10px;
      }
      & .MuiSwitch-track {
        height: 28px;
        background: none;
        border-radius: 20px;
        border: 2px solid #3e3e3e;
      }
      & .MuiSwitch-thumb {
        background-color: #3e3e3e;
        width: 25px;
        height: 18px;
        border-radius: 20px;
        box-shadow: none;
      }
    }
    .switchRow {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        font-size: 1.2rem;
        font-weight: 500;
      }
    }
  }
`;
