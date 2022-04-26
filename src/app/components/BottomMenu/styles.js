import styled from 'styled-components';

export const Container = styled.div`

display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-around;

width: 100%;
height: 50px;

background-image: radial-gradient(circle at 50% 3px, transparent 34px, #ffffff 35px);
border-radius: 30px 30px 0px 0px;
position: fixed;
bottom: 0;
right: 0;
z-index: 100;


&::before{
   content: '';
   display: block;
   position: absolute;
   bottom: 11px;
   left: 50%;
   transform: translateX(-50%);
   width: 70px;
   height: 70px;
   border-radius: 50%;
   z-index: 2;
   clip-path: polygon(100% 45%, 100% 100%, 0 100%, 0 45%);
   border: 2px solid #E2E2E2;
   box-sizing: border-box;
}

.border{
   position: absolute;
   bottom: 50px;
   &::before{
      content: "";
      position: absolute;
      left: 0;
      margin-left: 34px;
      width: calc(50vw - 34px);
      height: 52px;
      background-color: #fff;
      border: 2px solid #E2E2E2;
      border-left: none;
      z-index: -1;
      border-radius: 0 30px 0 0;
   }
   &::after{
      content: "";
      height: 52px;
      position: absolute;
      right: 0;
      margin-right: 34px;
      width: calc(50vw - 34px);
      background-color: #fff;
      border: 2px solid #E2E2E2;
      border-right: none;
      z-index: -1;
      border-radius: 30px 0 0 0;
   }
}

svg {
   font-size: 20px;
   margin: 13.5px 0;
   color: ${props => props.theme.primary};
}

a{
   height: 100%;
}

a.active svg{
   stroke-width: 0.5;
}

a:nth-child(4) svg {
   font-size: 22px;
}

.addIcon--container{
   position: relative;
   bottom: 50%;
}

.addIcon {
   width: 55px;
   height: 55px;
   background: ${props => props.theme.primary};
   border-radius: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   position: absolute;
   left: 0;
   transform: translateX(-50%);
   z-index: 100;
   &.active svg{
      stroke-width: 0;
   }
   svg{
      margin: 0;
      font-size: 32px;
      color: #fff;
   }
}
`;