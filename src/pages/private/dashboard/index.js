import React from "react";
import Button from "@mui/material/Button";
import { AppDispatcher } from "@redux/";

function Dashboard() {

  return (
    <div>
      <h1>Dashboard</h1>
      <Button variant="contained">Hello World</Button>
      <Button style={{ marginLeft: '10px' }} variant="contained" onClick={() => { AppDispatcher.setUserLoggedOut() }}>LogOut</Button>
    </div>
  );
}

export default Dashboard;
