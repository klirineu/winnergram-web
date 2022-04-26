import styled from "styled-components";

export const Container = styled.div`
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;

  .search {
    width: 75%;
    margin: 10px auto;
    svg {
      color: #000;
    }
    input {
      font-size: 1rem;
      font-weight: 500;
    }
  }
  .friends,
  .chats {
    width: 90%;
    margin: 10px auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    & > div {
      margin: 20px 0 0;
    }
  }
  .chats {
    height: 50%;
    margin-bottom: 0;
    flex: 1;
    & > div {
      flex: 1;
    }
  }
  .friends--list {
    width: 100%;
    display: flex;
    overflow: auto;
    ::-webkit-scrollbar {
      display: none;
    }
  }
  .user {
    margin: 0 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
      background-color: #00000080;
      border-radius: 50%;
    }
    p {
      color: black;
      margin-top: 5px;
      font-size: 12px;
      line-height: 1;
      max-width: 60px;
      max-height: 2rem;
      overflow: auto;
      overflow-wrap: break-word;
    }
  }
  .chats--list {
    height: 100%;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }
  .userChat {
    width: 100%;
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
      background-color: #00000080;
      border-radius: 50%;
    }
    h5 {
      width: 30%;
      color: #999999;
      font-size: 12px;
      text-decoration: none;
      text-align: center;
    }
    h3 {
      color: #1e1e1e;
      text-decoration: none;
      text-align: start;
    }
    .last {
      width: 60%;
      height: 50px;
      overflow: hidden;
      line-height: 1;
      margin-left: 10px;
      margin-right: auto;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      p {
        color: #4d4d4d;
        text-decoration: none;
        text-align: start;
      }
    }
  }
`;
