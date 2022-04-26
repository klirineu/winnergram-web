import styled from 'styled-components';

export const Container = styled.header`
   width: 100%;
   padding: 30px 5% 10px;
   display: flex;
   justify-content: space-between;
   & > div{
      display: flex;
      align-items: center;
      h3{
         font-weight: 600;
      }
   }
   svg.add{
      font-size: 1.4rem;
   }
   svg{
      margin: 0 4px;
      font-size: 1.2rem;
      cursor: pointer;
   }
`;