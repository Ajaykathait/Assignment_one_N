import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import AppLoader from "@components/Loader/AppLoader";
import { API, NetworkManager } from "@network/core";
function Gallery() {
  const [gallery, setGallery] = useState(null);

  const instanceOfNetwork = new NetworkManager(API.GALLERY.DATA);

  useEffect(() => {
    instanceOfNetwork
      .httpRequest(false)
      .then((res) => setGallery(res.data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      <div className="gallery">
        <h2>Gallery</h2>
        {gallery ? (
          <Grid container>
            {gallery.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={4}>
                    <img
                      style={{
                        width: "400px",
                        height: "250px",
                        objectFit: "cover"
                      }}
                      src={item.download_url}
                      alt="img"
                    />
                  </Grid>
                </React.Fragment>
              );
            })}
          </Grid>
        ) : (
          <AppLoader />
        )}
      </div>
    </>
  );
}

export default Gallery;
