import React from "react";
import Routes from "./routes";

import { ThemeProvider } from "styled-components";
import { MainTheme } from "./app/global/Theme";
import { GlobalStyle } from "./app/global/GlobalStyles";

const App = () => {
   return (
      <ThemeProvider theme={MainTheme}>

         <GlobalStyle />

         <Routes />
         
      </ThemeProvider>
   )
}

export default App;