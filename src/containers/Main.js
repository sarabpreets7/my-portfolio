import React from "react";
import {
  Route,
  Switch,
  HashRouter,
  useHistory,
  useLocation,
} from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Education from "../pages/education/EducationComponent";
import Experience from "../pages/experience/Experience";
import Opensource from "../pages/opensource/Opensource";
import Contact from "../pages/contact/ContactComponent";
import Projects from "../pages/projects/Projects";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";
import ThemePicker from "./themePicker/themePicker";
import "./main.css";

function Main({ theme, changeTheme }) {
  const settings = { isSplash: true }; // Replace this with your actual settings object

  const isMobileDevice = () => {
    return window.innerWidth <= 768; 
  };
  return (
    <div className="container" style={{ marginTop: "20px" }}>
      {/* Theme Picker */}
      {!isMobileDevice() && (<ThemePicker changeTheme={changeTheme} />)}

      <HashRouter basename="/">
        <Switch>
          {/* Routes */}
          <Route exact path="/">
            {/* <Splash theme={theme} /> */}
            <Home changeTheme={changeTheme} theme={theme} />
          </Route>
          <Route path="/home">
            <Home changeTheme={changeTheme} theme={theme} />
          </Route>
          <Route exact path="/experience">
            <Experience changeTheme={changeTheme} theme={theme} />
          </Route>
          <Route path="/education">
            <Education changeTheme={changeTheme} theme={theme} />
          </Route>
          {/* <Route path="/opensource">
            <Opensource theme={theme} />
          </Route> */}
          <Route path="/contact">
            <Contact  changeTheme={changeTheme} theme={theme} />
          </Route>
          {/* {!settings.isSplash && (
            <Route path="/splash">
              <Splash theme={theme} />
            </Route>
          )} */}
          <Route path="/projects">
            <Projects  changeTheme={changeTheme} theme={theme} />
          </Route>
          <Route path="*">
            <Error404  changeTheme={changeTheme} theme={theme} />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default Main;