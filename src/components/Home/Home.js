import './Home.css';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import axios from 'axios';


const Home = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        let url = 'https://blog.movimientoevitaazul.com.ar/wp-json/wp/v2/posts?_embed&per_page=6';
        axios.get(url).then((res) => {
            setPosts(res.data);
        });
    }, []);
    console.log('posts', posts);




    return (
        <>
            <img className="banner-intro" src="/images/banner-nestor-persico.webp" alt="" />
            <img className="banner-intro-mobile" src="/images/banner-nestor-persico-mobile.webp" alt="" />

            <div className='global-container'>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid className="container-intro" container spacing={2}>
                        <Grid className="col" item xs={12} md={6}>
                            <img className="img-col" src="/images/ilustracion-evita.webp" alt="" />
                        </Grid>

                        <Grid className="col" item xs={12} md={6}>
                            <h1 class="welcome-title">Sitio Web Oficial del&nbsp;<span class="bolder"> Movimiento Evita Azul</span></h1>
                        </Grid>
                    </Grid>
                </Box>
            </div>

            <div className='global-container'>
            <h2 className="subtitle">Mapa de Unidades Productivas de la <span className="bolder">Economía Popular.</span></h2>
                <p>Ingresa a nuestro mapa interactivo de unidades productivas de la ciudad de Azul, Provincia de Buenos Aires. Encontraras en el mismo, unidades productivas de la economía popular, podras filtrar por categoria productiva, y contactar directamente a los productores.</p>

                <Link to='/unidades-productivas' >
                    <Button className="btn-global" variant="contained" > Ver mapa de Unidades Productivas</Button>
                </Link>
                <img className="img-map" src="/images/mapa-productivo-1.webp" alt="" />
            </div>




            <h2 class="subtitle text-center"><span class="bolder"> Ultimas Novedades.</span></h2>

            <div className='global-container posts-grid'>
                {
                    posts && posts.map(post => {
                        console.log('post', post);
                        return (

                            <Card key={post.id} className="post-card">
                                <CardMedia className="post-img"
                                    component="img"
                                    alt={post.title.rendered}
                                    height="140"
                                    image={post._embedded['wp:featuredmedia']['0'].source_url}

                                />
                                <CardContent className="post-content">
                                    <a className="underline-nice" href={post._embedded['wp:term']['0']['0'].link} target="_blank" rel="noreferrer">{"Categoria: " + post._embedded['wp:term']['0']['0'].name}</a>
                                    <h2 className="title"><b>{post.title.rendered}</b></h2>
                                    <p>Publicado el: {post.formatted_date}</p>

                                </CardContent>

                                <CardActions className="btn-container">
                                    <a href={post.link} target="_blank" rel="noreferrer">
                                        <Button className="btn-showmore" variant="contained">
                                            Leer más
                                        </Button>
                                    </a>
                                </CardActions>

                            </Card>

                        )
                    })
                }
            </div>
        </>
    )
}

export default Home;