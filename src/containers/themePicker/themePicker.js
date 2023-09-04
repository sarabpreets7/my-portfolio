import React from 'react';
import './ThemePicker.css'; // Add your custom styles for the ThemePicker component

// Import all the theme objects
import {
  yellowTheme,
  materialDarkTheme,

  materialTealTheme,
} from '../../theme';

const themes = [
  yellowTheme,
  materialDarkTheme,

  materialTealTheme,
];

const ThemePicker = (props) => {
  return (
    <div className="theme-picker-container">
      <div className="theme-picker">
        <div className="color-pallet">
          {themes.map((theme, idx) => (
            <div
              key={idx}
              className="color"
              onClick={() => {
                props.changeTheme(theme);
              }}
              style={{ background: theme.body }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThemePicker;