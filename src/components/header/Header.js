import React, { Component } from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";
import { greeting, settings } from "../../portfolio.js";
import SeoHeader from "../seoHeader/SeoHeader";
import {
  yellowTheme,
  materialDarkTheme,
  materialTealTheme,
} from "../../theme";

const themes = [yellowTheme, materialDarkTheme, materialTealTheme];

const onMouseEnter = (event, color) => {
  const el = event.target;
  el.style.backgroundColor = color;
};

const onMouseOut = (event) => {
  const el = event.target;
  el.style.backgroundColor = "transparent";
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentThemeIndex: 0, // Initial theme index
    };
  }
  adjustButtonBackground = (color) => {
    // Slightly adjust the button background for better contrast
    if (color === "rgb(255, 217, 93)") return "rgb(230, 180, 50)"; // Softer yellow
    if (color === "rgb(38, 50, 56)") return "rgb(50, 70, 80)"; // Slightly lighter teal
    if (color === "rgb(255, 255, 255)") return "rgb(245, 245, 245)"; // Off-white for contrast
    return color; // Fallback
  };
  toggleTheme = () => {
    const { currentThemeIndex } = this.state;
    const nextThemeIndex = (currentThemeIndex + 1) % themes.length; // Cycle through themes
    this.setState({ currentThemeIndex: nextThemeIndex }, () => {
      // Call changeTheme with the updated theme
      this.props.changeTheme(themes[nextThemeIndex]);
    });
  };

  render() {
    const theme = this.props.theme;
    const link = settings.isSplash ? "/splash" : "home";
    const { currentThemeIndex } = this.state;

    return (
      <Fade top duration={1000} distance="20px">
        <SeoHeader />
        <div>
          <header className="header">
            <NavLink to={link} tag={Link} className="logo">
              <span style={{ color: theme.text }}> &lt;</span>
              <span className="logo-name" style={{ color: theme.text }}>
                {greeting.logo_name}
              </span>
              <span style={{ color: theme.text }}>/&gt;</span>
            </NavLink>
            <input className="menu-btn" type="checkbox" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
              <span className="navicon"></span>
            </label>
            <ul className="menu" style={{ backgroundColor: theme.body }}>
              <li>
                <NavLink
                  to="/home"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) =>
                    onMouseEnter(event, theme.highlight)
                  }
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/education"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) =>
                    onMouseEnter(event, theme.highlight)
                  }
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Education
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/experience"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) =>
                    onMouseEnter(event, theme.highlight)
                  }
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Experience
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/projects"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) =>
                    onMouseEnter(event, theme.highlight)
                  }
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Projects
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  tag={Link}
                  activeStyle={{ fontWeight: "bold" }}
                  style={{ color: theme.text }}
                  onMouseEnter={(event) =>
                    onMouseEnter(event, theme.highlight)
                  }
                  onMouseOut={(event) => onMouseOut(event)}
                >
                  Contact Me
                </NavLink>
              </li>

              {/* Add the theme toggle button here for all devices */}
              {/* <li style={{ padding: "18px" }}>
                <span style={{ color: theme.text }}>Choose theme</span>
                <div className="themes">
                  <div
                    className="theme-picker-container"
                    style={{
                      position: "initial",
                      marginLeft: "116px",
                      width: "100%",
                    }}
                  >
                    <div className="theme-picker" style={{ width: "100%" }}>
               <button
  className="toggle-theme-button"
  onClick={this.toggleTheme}
  style={{
    background: this.adjustButtonBackground(themes[currentThemeIndex].body),
    color: themes[currentThemeIndex].text || "#fff",
    border: "none",
    padding: "10px 20px",
    cursor: "pointer",
    fontSize: "16px",
    borderRadius: "5px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // For a subtle shadow effect
  }}
>
  Toggle Theme
</button>
                    </div>
                  </div>
                </div>
              </li> */}
            </ul>
          </header>
        </div>
      </Fade>
    );
  }
}

export default Header;