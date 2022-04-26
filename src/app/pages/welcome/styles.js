import styled from 'styled-components';

export const Container = styled.div`
height: 100vh;
width: 90%;
margin: 0 auto;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
.fade{
   animation: fade .4s ease-in;
}
.title{
   color: ${props => props.theme.primary};
   font-weight: 700;
}
.text{
   display: flex;
   flex-direction: column;
   justify-content: center;
   p{
      margin: 10px 0;
   }
   &.enter{
      animation: enter .4s linear;
   }
   &.fade{
      animation: slidein .4s linear;
   }
}
@keyframes slidein {
   from{
      transform: translateX(50%);
   }
   to{
      transform: translateX(0%);
   }
}
@keyframes enter {
   from{
      transform: scale(0.7)
   }
   to{
      transform: scale(1);
   }
}
.dots {
   display: flex;
   justify-content: center;
   .active{
      background-color: ${props => props.theme.primary};
   }
   .dot{
      margin: 0 5px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: 2px solid ${props => props.theme.primary};
      transition: .2s ease-in;
   }
}
& > button{
   padding: 10px 0;
   width: 90%;
   background-color: ${props => props.theme.primary};
   color: #fff;
   font-size: 1.2rem;
   font-weight: 600;
   border-radius: 25px;
   span.MuiCircularProgress-root{
      color: #fff;
      width: 24px !important;
      height: 24px !important;
   }
}
`;