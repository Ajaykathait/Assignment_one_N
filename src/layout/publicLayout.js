import * as React from "react";
import Box from "@mui/material/Box";
import Header from "@components/header/Header";

export default function PublicLayout({ children }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Header />
      {children}
    </Box>
  );
}
