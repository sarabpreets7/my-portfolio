import React from 'react';
import './ThemePicker.css'; // Ensure your CSS file is updated with the new styles

// Import all the theme objects
import {
  yellowTheme,
  materialDarkTheme,
  materialTealTheme,
} from '../../theme';

const themes = [
  { theme: yellowTheme, name: "Yellow" },
  { theme: materialDarkTheme, name: "Dark" },
  { theme: materialTealTheme, name: "Teal" },
];

const ThemePicker = (props) => {
  return (
    // <div className="theme-picker-container">
    //   {themes.map(({ theme, name }, idx) => (
    //     <div
    //       key={idx}
    //       className="theme-option"
    //       onClick={() => props.changeTheme(theme)}
    //       style={{ backgroundColor: theme.body }}
    //       title={`Switch to ${name} Theme`}
    //     >
    //       <div className="theme-name">{name}</div>
    //     </div>
    //   ))}
    // </div>
    <></>
  )
};

export default ThemePicker;
