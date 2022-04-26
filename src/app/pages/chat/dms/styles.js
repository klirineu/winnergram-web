import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;

  .container2 {
    flex: 1;
    overflow: auto;
    width: 90%;
    margin: 0 auto;
    display: flex;

    .wrap {
      margin-top: auto;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    h4 {
      margin: 25px 0;
      color: #6d6d6d;
      font-size: 13px;
      opacity: 0.9;
    }

    .chatFriend {
      margin: 5px 0;
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;

      img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
      }
      .text {
        max-width: 80%;
        margin-right: auto;
      }
      h3 {
        margin-left: 10px;
        color: #2d2c2c;
        font-size: 15px;
        text-align: start;
      }
    }

    .chatMe {
      margin: 5px 0;
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;

      img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
      }
      .text {
        max-width: 80%;
        margin-left: auto;
      }
      h3 {
        margin-right: 10px;
        color: #2d2c2c;
        font-size: 15px;
        text-align: end;
      }
    }
  }

  .filesAdd {
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 10px;
    border-radius: 100%;

    background-color: #3caefc;

    svg {
      color: #ffffff;
      font-size: 20px;
    }
  }

  .textInput {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    & > div {
      justify-content: center;
    }
    input {
      border: 2px solid #afafaf;
      border-radius: 20px;
      background-color: #fff;
      width: 80%;
      height: 40px;
      margin-left: -50px;
    }
    svg {
      margin-left: -70px;
    }
  }
`;
