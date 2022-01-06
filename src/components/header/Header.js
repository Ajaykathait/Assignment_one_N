import React from "react";
import styles from "../header/header.module.scss";
import Switch from "@mui/material/Switch";
import { useTheme } from "./NightThemeProvider";
import { Link } from "react-router-dom";

const Header = () => {
  const theme = useTheme();
  const toggleTheme = () => {
    theme.isDarkMode
      ? (theme.setIsDarkMode(false),
        (document.body.style.backgroundColor = "#8655ff"))
      : (theme.setIsDarkMode(true),
        (document.body.style.backgroundColor = "#999"));
  };

  return (
    <header
      className={theme.isDarkMode ? styles.header_bar_dark : styles.header_bar}>
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
      <Switch checked={theme.isDarkMode} onChange={toggleTheme} />
    </header>
  );
};

export default Header;
