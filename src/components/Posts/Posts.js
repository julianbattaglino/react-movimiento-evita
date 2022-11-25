import './Posts.css';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Chip from '@mui/material/Chip';

import React, { useState, useEffect } from "react";
import axios from 'axios';


const Posts = () => {


    const [posts, setPosts] = useState([]);

    useEffect(() => {
        let url = 'https://blog.movimientoevitaazul.com.ar/wp-json/wp/v2/posts?_embed';
        axios.get(url).then((res) => {
            setPosts(res.data);
        });
    }, []);
    console.log('posts', posts);


    return (
        <>
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
                                    <a href={post._embedded['wp:term']['0']['0'].link} target="_blank" rel="noreferrer"><h3 className="underline-nice">{"Categoria: " + post._embedded['wp:term']['0']['0'].name}</h3></a>

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

export default Posts;