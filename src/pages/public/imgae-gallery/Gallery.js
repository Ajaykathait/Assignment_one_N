import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material';
import AppLoader from '@components/Loader/AppLoader';
function Gallery() {
    const [Gallery, setGallery] = useState(null)
    useEffect(() => {
        const urlNew = 'https://picsum.photos/v2/list';
        fetch(urlNew).then(resp => resp.json()).then(resp => setGallery(resp))
    }, [])

    return (
        <>
            <React.Fragment className="gallery">
                <h2>Gallery</h2>
                {Gallery ? <Grid container>
                    {Gallery.map((item) => {
                        return (
                            <React.Fragment key={(item.id)}>
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={4} >
                                    <img style={{ width: '400px', height: '250px', objectFit: 'cover' }} src={item.download_url} alt="img" />
                                </Grid>
                            </React.Fragment>
                        )
                    })}
                </Grid> : <AppLoader />}

            </React.Fragment>
        </>
    )
}

export default Gallery
