import './Home.css';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const Home = () => {
    return (
        <>
            <img className="banner-intro" src="/images/banner-nestor-persico.webp" alt="" />
            <img className="banner-intro-mobile" src="/images/banner-nestor-persico-mobile.webp" alt="" />
            <Box sx={{ flexGrow: 1 }}>
                <Grid className="container-intro" container spacing={2}>
                    <Grid className="col" item xs={12} md={6}>
                        <img className="img-col" src="/images/ilustracion-evita.webp" alt="" />
                    </Grid>

                    <Grid className="col" item xs={12} md={6}>
                        <h1 class="welcome-title">Sitio Web Oficial del&nbsp;<span class="bolder"> Movimiento Evita Azul.</span></h1>
                    </Grid>
                </Grid>
            </Box>

        </>
    )
}

export default Home;