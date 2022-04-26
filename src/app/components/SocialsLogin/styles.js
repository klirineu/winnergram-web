import styled from 'styled-components';

export const Container = styled.section`
height: auto;
margin: 40px 0 60px;
display: flex;
flex-direction: column;
p{
   margin-bottom: 20px;

   width: 80vw;
   position: relative;
   z-index: 1;
   &:before{
         border-top: 1.5px solid #000;
         content: "";
         margin: 0 auto;
         position: absolute;
         top: 50%; left: 0; right: 0; bottom: 0;
         max-width: 425px;
         width: 100%;
         z-index: -1;
   }
   span{
         background-color: #fff;
         padding: 0 10px;
   }
}
div{
   display: flex;
   justify-content: center;
   /* gap: 20px; */
}
div > button{
   margin-right: 10px;
   margin-left: 10px;
   padding: 10px 0;
   a{
      color: #fff;
      display: flex;
      align-items: center;
   }
   svg{
      width: 24px;
      height: 24px;
   }
}
`;