import React from "react"; 
import { NavLink } from "react-router-dom";
import Switch from 'react-switch';
import { ThemeContext } from "./themeContext";
import { IoMoon, IoSunny } from "react-icons/io5";
import { Container } from ".";

const SunnyIcon = () => {
  return (
    <div className="icon-contain">
      <IoSunny/>
    </div>
  );
}

const MoonIcon = () => {
  return (
    <div className="icon-contain">
      <IoMoon/>
    </div>
  );
}

const Header = () => {
  return (
    <ThemeContext.Consumer>
        {({theme, toggleTheme}) => {
        return (
          <header>
            <Container id="header">
              <NavLink to="/">
                <h1 id='header-txt' className={theme}>Awesome School Calc</h1>
                <h2 id='header-v-num'className={theme}>v1.1.3</h2>
              </NavLink>
              <Container id="theme-switch">
                <label>
                  <Switch onChange={toggleTheme} checked={theme === 'light' ? true: false} onColor='#e6e6e6' offColor='#646464' checkedIcon={<SunnyIcon/>} uncheckedIcon={<MoonIcon/>}/>
                </label>
              </Container>
            </Container>
          </header>
        )}}
      </ThemeContext.Consumer>
  );
}

export default Header;