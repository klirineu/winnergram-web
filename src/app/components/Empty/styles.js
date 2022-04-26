import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & > div {
    display: flex;
    flex-direction: column;
    opacity: 0.75;
    img {
      width: 80%;
      margin: 0 auto 20px;
    }
  }
`;
