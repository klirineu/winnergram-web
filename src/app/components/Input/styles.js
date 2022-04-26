import styled from 'styled-components';

export const Container = styled.div`

   margin-bottom: 15px;

   width: 100%;
   display: flex;

   background-color: ${props => props.theme.input};
   color: ${props => props.theme.primary};
   padding: 10px;
   border-radius: 10px;

   svg{
      margin-left: 10px;
      font-size: 1.7rem;
   }
   input, textarea{
      margin-left: 5px;

      width: 100%;
      padding: 0 10px;
      border: none;
      background: none;
      outline: none;
      text-align: start;
      &::placeholder{
         color: ${props => props.theme.placeholder};
         
         text-align: start;
      }
   }
   textarea{
      resize: none;
   }
`;