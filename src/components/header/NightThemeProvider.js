import React, { createContext, useContext, useState } from "react";

const NightTheme = createContext();

function NightThemeProvider(props) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    <NightTheme.Provider value={{ isDarkMode, setIsDarkMode }}>
      {props.children}
    </NightTheme.Provider>
  );
}

export const useTheme = () => useContext(NightTheme);
export default NightThemeProvider;
