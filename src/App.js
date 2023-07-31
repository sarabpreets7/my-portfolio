import React,{ useEffect }  from "react";
import "./App.css";
import Main from "./containers/Main";
import { ThemeProvider } from "styled-components";
import {  materialTealTheme,materialDarkTheme } from "./theme";
import { GlobalStyles } from "./global";
import { useState } from "react";

function App() {
  const [chosenTheme,setTheme] = useState(materialTealTheme)
  useEffect(() => {
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
