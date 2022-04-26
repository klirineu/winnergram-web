import styled from "styled-components";

export const Container = styled.div`
  .post {
    width: 100%;
    background-color: rgba(246, 246, 246, 0.7);

    border-radius: 10px;

    margin: 30px 0 15px;

    * {
      animation: fade 0.3s ease-in;
    }
  }

  .userInfos {
    padding: 10px 0;

    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .userInfos img {
    display: inline;

    width: 40px;
    height: 40px;
    border-radius: 100%;
    border: 1px solid #1a1a1a;

    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
  }

  .userInfo p {
    margin-left: 5px;

    text-align: start;
    font-size: 12px;
  }

  .userInfo {
    display: inline-block;
  }

  .userName {
    color: black;
    text-decoration: none;
    font-weight: bold;
  }

  .options--btn {
    margin-left: auto;
    font-size: 1.4rem;
    position: relative;
    svg {
      margin-right: 10px;
      cursor: pointer;
    }
  }
  .options {
    position: absolute;
    top: 20px;
    right: 5px;
    list-style: none;
    background: #fff;
    border-radius: 5px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    z-index: 5;
    animation: fade 0.2s ease-in;
    li {
      cursor: pointer;
      padding: 8px 20px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }
    .options--delete {
      background-color: #db4224;
      color: #fff;
    }
  }

  .postImage {
    width: 100%;
    border-radius: 18px;
  }

  .postDescription {
    padding: 15px 20px 10px 20px;

    font-size: 12px;
    font-family: "Roboto", sans-serif;
    font-weight: normal;
    text-align: start;
    color: #363636;
    overflow-wrap: break-word;
  }

  .postTags {
    margin-left: 20px;
    margin-top: 20px;
    padding-bottom: 14px;

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .postTags div {
    margin: 2px;
    padding: 5px 12px;
    background-color: #3caefc;
    border-radius: 20px;

    font-size: 10.5px;
    color: white;
    font-weight: bold;
  }

  .postInfos {
    display: flex;
    margin: 10px 0px 0px 0px;
  }

  .postInfos svg,
  .postComments svg {
    vertical-align: bottom;
    margin-right: 5px;
    font-size: 20px;
    color: ${(props) => (props.load ? "rgba(0, 0, 0, 0.11)" : "#3caefc")};
  }

  .postLikes svg {
    animation: fade 0.2s ease-in;
  }

  .postComments {
    a {
      display: flex;
      align-items: flex-start;
    }
    svg {
      font-size: 18px;
    }
  }

  .postComments,
  .postLikes {
    display: flex;
    align-items: center;
    button {
      background: none;
    }
  }

  .postLikes p,
  .postComments p {
    font-family: Roboto;
    font-weight: 400;
    margin-right: 25px;
    font-size: 12px;
    display: inline;
    color: #363636;
  }
`;
