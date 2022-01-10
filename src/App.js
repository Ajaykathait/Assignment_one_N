import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import AppRouter from "./router";
import { Store, persistor } from "@redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { defaultTheme } from "./themes/defaultTheme";
import NightThemeProvider from "@components/header/NightThemeProvider";

/**
 * @description Check if browser is Safar
 * @description It'll be usefull for web notifications
 */

if (window.safari) {
  console.log("safari browser detected");
} else {
  // initializeFirebase();
}

function App() {
  const currentTheme = createTheme(defaultTheme);

  return (
    <Provider store={Store}>
      <PersistGate persistor={persistor}>
        <NightThemeProvider>
          <ThemeProvider theme={currentTheme}>
            <AppRouter />
          </ThemeProvider>
        </NightThemeProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
