import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
   display: flex;

   color: ${props => props.theme.primary};
   padding: 10px;

   svg{
      margin-top: 7px;
      font-size: 1.5rem;
      color: #393838;
   }
   input, textarea{   
       
    border: 2px solid #AFAFAF;
    border-radius: 20px;
    background-color: #fff;

      width: 100%;
      padding: 0 10px;
      border: none;
      background: none;
      outline: none;
      text-align: start;

      
      display: flex;
      flex-direction: row;
      justify-content: center;

      &::placeholder{
         color: ${props => props.theme.placeholder};
         
         text-align: start;
      }
   }
   textarea{
      resize: none;
   }
`;