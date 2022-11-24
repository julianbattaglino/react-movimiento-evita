import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom'
import React, { useState, useEffect } from "react";
import axios from 'axios';


const Posts = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        let url = 'https://movimientoevitaazul.com.ar/wp-json/wp/v2/posts?_embed';
        axios.get(url).then((res) => {
            setPosts(res.data);
        });
    }, []);
    console.log('posts', posts);

    return (
        <>
            <div className='global-container'>
                {
                    posts && posts.map(post => {
                        console.log('post', post);
                        return (


                            <Card key={post.id} className="post-card" sx={{ maxWidth: 345 }}>
                                <CardMedia className=""
                                    component="img"
                                    alt={post.title.rendered}
                                    height="140"
                                    image={post._embedded['wp:featuredmedia']['0'].source_url}

                                />
                                <CardContent>
                                    <span className=''><b>{post.title.rendered}</b></span><br /><br />
                                </CardContent>
                                <CardActions>

                                    <a href={post.link} target="_blank" rel="noreferrer">
                                        <Button variant="outlined">
                                            Ver más
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