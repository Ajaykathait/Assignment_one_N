import React from "react";
import Button from "@mui/material/Button";
import { AppDispatcher } from "@redux/";
import Gallery from "@pages/public/imgae-gallery/Gallery";

function Dashboard() {
  const showGallery = () => {
    console.log('a');
  }
  return (
    <div>
      <h2>Dashboard</h2>
      <Button variant="contained" onClick={showGallery}>Gallery</Button>
      <Button style={{ marginLeft: '10px' }} variant="contained" onClick={() => { AppDispatcher.setUserLoggedOut() }}>LogOut</Button>
      <Gallery />
    </div>
  );
}

export default Dashboard;
