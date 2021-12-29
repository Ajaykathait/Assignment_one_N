import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material';
function Gallery() {
    const [Gallery, setGallery] = useState([])
    useEffect(() => {
        const urlNew = 'https://picsum.photos/v2/list';
        fetch(urlNew).then(resp => resp.json()).then(resp => setGallery(resp))
    }, [])
    // console.log(Gal);
    return (
        <>
            <div className="gallery">
                <h2>Gallery</h2>
                <Grid container>
                    {Gallery.map((item) => {
                        return (
                            <React.Fragment key={(item.id)}>
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={4} >
                                    {/* <img style={{ width: item.width / 5, height: item.height / 5 }} src={item.download_url} alt="img" /> */}
                                    <img style={{ width: '400px', height: '250px', objectFit: 'cover' }} src={item.download_url} alt="img" />
                                </Grid>
                            </React.Fragment>
                        )
                    })}
                </Grid>
            </div>
        </>
    )
}

export default Gallery
