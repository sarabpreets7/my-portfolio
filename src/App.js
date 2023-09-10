import React,{ useEffect }  from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import {  materialTealTheme,materialDarkTheme } from "./theme";
import { GlobalStyles } from "./global";
import { useState } from "react";
import ReactGA from 'react-ga';

function App() {
  const [chosenTheme,setTheme] = useState(materialTealTheme)
  useEffect(() => {
    ReactGA.initialize('G-QZ749QPNW3');
    ReactGA.pageview(window.location.pathname + window.location.search)

    document.title = 'My Page';
  }, []);
  

  const changeTheme =(themeName)=>{
   
  setTheme(themeName)
  }
  return (
    <ThemeProvider theme={chosenTheme}>
      <>
        <GlobalStyles />
        <div>
          
          <Main changeTheme={changeTheme}  theme={chosenTheme} />
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
