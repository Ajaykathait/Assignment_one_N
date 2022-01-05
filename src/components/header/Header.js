import React from "react";
import styles from "../header/header.module.scss";
import Switch from "@mui/material/Switch";
import { useTheme } from "./NightThemeProvider";
import { Link } from "react-router-dom";

const Header = () => {
  const theme = useTheme();
  const toggleTheme = () => {
    theme.darkMode
      ? (theme.setDarkMode(false),
        (document.body.style.backgroundColor = "#8655ff"))
      : (theme.setDarkMode(true),
        (document.body.style.backgroundColor = "#999"));
  };
  console.log(theme.darkMode);

  return (
    <header
      className={theme.darkMode ? styles.header_bar_dark : styles.header_bar}>
      <div className={styles.left_navigation}>
        <div className={styles.logo}>LOGO</div>
        <div className={styles.other_navigations}>
          <div className={styles.single_navigation}>
            <Link to="./counter">Counter</Link>
          </div>
          <div className={styles.single_navigation}>
            <Link to="./login">LogIn</Link>
          </div>
          <div className={styles.single_navigation}>
            <Link to="./signup">SignUp</Link>
          </div>
          <div className={styles.single_navigation}>
            <Link to="./gallery">Gallery</Link>
          </div>
        </div>
      </div>
      <Switch checked={theme.darkMode} onChange={toggleTheme} />
    </header>
  );
};

export default Header;
