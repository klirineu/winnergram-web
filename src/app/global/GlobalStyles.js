import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   text-decoration: none;
   font-family: 'Nunito', sans-serif;
   text-align: center;
   :focus{
      outline: none;
   }
}
body{
   min-height: 100vh;
   overflow-x: hidden;
}
#root{
   min-height: 100vh;
}
button{
   border: none;
   cursor: pointer;
}
img{
   display: block;
}
.logo{
   height: 35vh;
}
h1, h2, h3{
   font-weight: 600;
}


/* width */
#root ::-webkit-scrollbar {
  width: 1px;
}

#root .MuiSnackbar-root.MuiSnackbar-anchorOriginBottomLeft{
   bottom: 85px;
}

${props => props.theme.fadeTransition};
${props => props.theme.scaleTransition};

@keyframes slide {
   from {
      transform: translateX(50vw);
   }
   to {
      transform: translateX(0);
   }
}

#root .primaryBtn{
   background-color: ${props => props.theme.primary};
   color: #fff;
   font-size: 1rem;
   border-radius: 10px;
   transition: .2s ease-in;
   &:hover{
      background-color: ${props => props.theme.primary};
   }
}
`