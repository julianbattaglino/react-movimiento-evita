import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, LayersControl, Marker, Popup, useMap } from 'react-leaflet'
import { MarkerIcon } from './LeafletIcon';
import {Helmet} from "react-helmet";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Map = () => {

  const position = [51.505, -0.09]
  const studiokrass = [-36.778, -59.847]
  const nomadecocina = [-36.77, -59.870]


  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Movimiento Evita Azul - Mapa Unidades Productiva de la Economía Popular</title>
        <meta name="description" content="Movimiento Evita Azul - Mapa Unidades Productiva de la Economía Popular"></meta>
        <meta name="googlebot" content="noindex"></meta>
      </Helmet>


      <MapContainer center={studiokrass} zoom={12} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LayersControl position="topright">
          <LayersControl.Overlay checked name="Puppas">
            <Marker position={studiokrass} icon={MarkerIcon} >
              <Popup>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    image="/images/iguana.jpg"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      Lizard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Lizards are a widespread group of squamate reptiles, with over 6,000
                      species, ranging across all continents except Antarctica
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>            </Popup>
            </Marker>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked name="Gastronomia">
            <Marker position={nomadecocina} icon={MarkerIcon} >
              <Popup>
                <span><b>Categoria: Puppas </b></span><br />
                Nomade Cocina con Sabor. <br /> Panes caseros, hamburguesas.
              </Popup>
            </Marker>
          </LayersControl.Overlay>

        </LayersControl>
      </MapContainer>
    </>
  )
}

export default Map;