import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import { Link } from 'react-router-dom'


function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <AppBar className="header" position="static">
            <Container className='menu-container' maxWidth="xl">
                <Toolbar disableGutters>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <Link to='/' >
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">Inicio</Typography>
                                </MenuItem>
                            </Link>

                            <Link to='/el-movimiento' >
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">El Movimiento</Typography>
                                </MenuItem>
                            </Link>

                            <Link to='/unidades-productivas' >
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">Mapa Unidades Productivas</Typography>
                                </MenuItem>
                            </Link>

                            <Link to='/novedades' >
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">Novedades</Typography>
                                </MenuItem>
                            </Link>


                        </Menu>
                    </Box>

                    <Link to='/' >
                        <img className='logo' src="/images/logo-white.png" alt='Movimiento Evita Azul Logo' />
                    </Link>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href=""
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

                        <Link to='/' >
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Inicio
                            </Button>
                        </Link>

                        <Link to='/el-movimiento' >
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                El Movimiento
                            </Button>
                        </Link>

                        <Link to='/unidades-productivas' >
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Mapa Unidades Productivas
                            </Button>
                        </Link>

                        <Link to='/novedades' >
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                Novedades
                            </Button>
                        </Link>

                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;