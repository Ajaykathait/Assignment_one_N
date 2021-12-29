import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";


export default function PublicLayout({ children }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={5}>
        </Grid>
      </Grid>
      {children}
    </Box>
  );
}
