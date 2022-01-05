import React, { createContext, useContext, useState } from "react";

const NightTheme = createContext();

function NightThemeProvider(props) {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <NightTheme.Provider value={{ darkMode, setDarkMode }}>
      {props.children}
    </NightTheme.Provider>
  );
}

export const useTheme = () => useContext(NightTheme);
export default NightThemeProvider;
