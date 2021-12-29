import React, { useState } from "react";
import Button from "@mui/material/Button";
import { AppDispatcher } from "@redux/";
import Gallery from "@pages/public/imgae-gallery/Gallery";

function Dashboard() {
  const [toggle, setToggle] = useState(false)
  const showGallery = () => {
    toggle == false ? setToggle(true) : setToggle(false)
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <Button variant="contained" onClick={showGallery}> {toggle == true ? "Hide Gallery" : 'Show Gallery'}</Button>
      <Button style={{ marginLeft: '10px' }} variant="contained" onClick={() => { AppDispatcher.setUserLoggedOut() }}>LogOut</Button>
      {toggle == true ? <Gallery /> : null}
    </div>
  );
}

export default Dashboard;
