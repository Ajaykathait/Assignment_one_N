import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import Counter from "@pages/public/counter/Counter";
// import ReduxCounter from "@pages/public/counter-redux/ReduxCounter";
// import SignUp from "@pages/public/signup";

export default function PublicLayout({ children }) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={1}>
          {/* <h2>Some placeholder</h2> */}
        </Grid>
        <Grid item xs={5}>
        </Grid>
      </Grid>
      {children}
      {/* <Counter /> */}
      {/* <ReduxCounter /> */}
      {/* <SignUp /> */}
    </Box>
  );
}
