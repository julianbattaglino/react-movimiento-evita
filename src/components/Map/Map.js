import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, LayersControl, LayerGroup, Marker, Popup } from 'react-leaflet'
import { MarkerIcon } from './LeafletIcon';
import { Helmet } from "react-helmet";

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailOutlineIcon from '@mui/icons-material/MailOutline';


const Map = () => {

  const starterPosition = [-36.7967973, -59.8563133]

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Movimiento Evita Azul - Mapa Unidades Productiva de la Economía Popular</title>
        <meta name="description" content="Movimiento Evita Azul - Mapa Unidades Productiva de la Economía Popular"></meta>
        <meta name="googlebot" content="noindex"></meta>
      </Helmet>


      <MapContainer center={starterPosition} zoom={12} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LayersControl position="topright">
          <LayersControl.Overlay checked name="Puppas">
            <LayerGroup>

              <Marker position={[-36.778, -59.870]} icon={MarkerIcon} >
                <Popup>
                  <Card className="card" sx={{ maxWidth: 345 }}>
                    <CardMedia className="popup-img"
                      component="img"
                      alt="green iguana"
                      height="140"
                      image="/images/logo-blue.png"

                    />
                    <CardContent>
                      <span><b>Nomade Cocina con Sabor </b></span><br /><br />
                      <span><b>Categoria: Puppas </b></span><br />
                      <span><b>¿Que producimos? </b></span>
                      Pan. <br />
                      <span><b>Ubicación: </b></span>
                      Alvear 791, Azul, Provincia de Buenos Aires
                    </CardContent>
                    <CardActions>
                      <Button variant="outlined" startIcon={<WhatsAppIcon />}>
                        Whatsapp
                      </Button>
                      <Button variant="outlined" endIcon={<MailOutlineIcon />}>
                        Email
                      </Button>
                    </CardActions>
                  </Card>
                </Popup>
              </Marker>

              <Marker position={[-36.773, -59.844]} icon={MarkerIcon} >
                <Popup>
                <Card className="card" sx={{ maxWidth: 345 }}>
                    <CardMedia className="popup-img"
                      component="img"
                      alt="green iguana"
                      height="140"
                      image="/images/logo-blue.png"

                    />
                    <CardContent>
                      <h2 className='popup-title'><b>Dulzuras Capresse</b></h2><br />
                      <span><b>Categoria: Puppas </b></span><br />
                      <span><b>¿Que producimos? </b></span><br />
                      Tortas, pastas, pastas frola, tartas dulces, alfajores, cookies, cupcakes, ice indivudales, etc. <br />
                      <span><b>Ubicación: </b></span>
                      Lavalle norte 0168, Azul, Provincia de Buenos Aires
                    </CardContent>
                    <CardActions>
                      <Button variant="outlined" startIcon={<WhatsAppIcon />}>
                        Whatsapp
                      </Button>
                      <Button variant="outlined" endIcon={<MailOutlineIcon />}>
                        Email
                      </Button>
                    </CardActions>
                  </Card>
                </Popup>
              </Marker>

              <Marker position={[-36.794, -59.854]} icon={MarkerIcon} >
                <Popup>
                <Card className="card" sx={{ maxWidth: 345 }}>
                    <CardMedia className="popup-img"
                      component="img"
                      alt="green iguana"
                      height="140"
                      image="/images/logo-blue.png"
                    />
                    <CardContent>
                      <h2 className='popup-title'><b>Rico en sabores</b></h2><br />
                      <span><b>Categoria: Puppas </b></span><br />
                      <span><b>¿Que producimos? </b></span>
                      Reposteria. <br />
                      <span><b>Ubicación: </b></span>
                      Puan 1444, Azul, Provincia de Buenos Aires
                    </CardContent>
                    <CardActions>
                      <Button variant="outlined" startIcon={<WhatsAppIcon />}>
                        Whatsapp
                      </Button>
                      <Button variant="outlined" endIcon={<MailOutlineIcon />}>
                        Email
                      </Button>
                    </CardActions>
                  </Card>
                </Popup>
              </Marker>

              <Marker position={[-36.791, -59.875]} icon={MarkerIcon} >
                <Popup>
                <Card className="card" sx={{ maxWidth: 345 }}>
                    <CardMedia className="popup-img"
                      component="img"
                      alt="green iguana"
                      height="140"
                      image="/images/logo-blue.png"
                    />
                    <CardContent>
                      <h2 className='popup-title'><b>Delicias ZC</b></h2><br />
                      <span><b>Categoria: Puppas </b></span><br />
                      <span><b>¿Que producimos? </b></span>
                      Tortas, pastas, pastas frola, tartas dulces, alfajores, etc. <br />
                      <span><b>Ubicación: </b></span>
                      Chubut 616, Provincia de Buenos Aires
                    </CardContent>
                    <CardActions>
                      <Button variant="outlined" startIcon={<WhatsAppIcon />}>
                        Whatsapp
                      </Button>
                      <Button variant="outlined" endIcon={<MailOutlineIcon />}>
                        Email
                      </Button>
                    </CardActions>
                  </Card>
                </Popup>
              </Marker>

            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked name="Gastronomia">
            <LayerGroup>

              <Marker position={[-36.848, -59.962]} icon={MarkerIcon} >
                <Popup>
                <Card className="card" sx={{ maxWidth: 345 }}>
                    <CardMedia className="popup-img"
                      component="img"
                      alt="green iguana"
                      height="140"
                      image="/images/logo-blue.png"
                    />
                    <CardContent>
                      <h2 className='popup-title'><b>La Cambicha</b></h2><br />
                      <span><b>Categoria: Gastronomia  </b></span><br />
                      <span><b>¿Que producimos? </b></span>
                      Comida rapida, comida al paso. <br />
                      <span><b>Ubicación: </b></span>
                      RN226 y RP51, Azul, Provincia de Buenos Aires.
                    </CardContent>
                    <CardActions>
                      <Button variant="outlined" startIcon={<WhatsAppIcon />}>
                        Whatsapp
                      </Button>
                      <Button variant="outlined" endIcon={<MailOutlineIcon />}>
                        Email
                      </Button>
                    </CardActions>
                  </Card>
                </Popup>
              </Marker>

              <Marker position={[-36.778, -59.870]} icon={MarkerIcon} >
                <Popup>
                <Card className="card" sx={{ maxWidth: 345 }}>
                    <CardMedia className="popup-img"
                      component="img"
                      alt="green iguana"
                      height="140"
                      image="/images/logo-blue.png"

                    />
                    <CardContent>
                      <h2 className='popup-title'><b>Nomade Cocina con Sabor </b></h2><br />
                      <span><b>Categoria: Gastronomía </b></span><br />
                      <span><b>¿Que producimos? </b></span><br />
                      Hamburguesas, hamburguesas veganas, medallones veganos. <br />
                      <span><b>Ubicación: </b></span>
                      Alvear 791, Azul, Provincia de Buenos Aires
                    </CardContent>
                    <CardActions>
                      <Button variant="outlined" startIcon={<WhatsAppIcon />}>
                        Whatsapp
                      </Button>
                      <Button variant="outlined" endIcon={<MailOutlineIcon />}>
                        Email
                      </Button>
                    </CardActions>
                  </Card>
                </Popup>
              </Marker>

            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked name="Herreria">
            <LayerGroup>

              <Marker position={[-36.796, -59.874]} icon={MarkerIcon} >
                <Popup>
                <Card className="card" sx={{ maxWidth: 345 }}>
                    <CardMedia className="popup-img"
                      component="img"
                      alt="green iguana"
                      height="140"
                      image="/images/logo-blue.png"
                    />
                    <CardContent>
                      <h2 className='popup-title'><b>Carpintería metálica El Benja</b></h2><br />
                      <span><b>Categoria: Herreria  </b></span><br />
                      <span><b>¿Que producimos? </b></span>
                      Portones, escaleras, puertas,rejas,soldaduras a domicilio, frente de rejas y más... <br />
                      <span><b>Ubicación: </b></span>
                      Leyria 1657, Azul, Provincia de Buenos Aires.
                    </CardContent>
                    <CardActions>
                      <Button variant="outlined" startIcon={<WhatsAppIcon />}>
                        Whatsapp
                      </Button>
                      <Button variant="outlined" endIcon={<MailOutlineIcon />}>
                        Email
                      </Button>
                    </CardActions>
                  </Card>
                </Popup>
              </Marker>

            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked name="Taller de autos">
            <LayerGroup>

              <Marker position={[-36.787, -59.862]} icon={MarkerIcon} >
                <Popup>
                <Card className="card" sx={{ maxWidth: 345 }}>
                    <CardMedia className="popup-img"
                      component="img"
                      alt="green iguana"
                      height="140"
                      image="/images/logo-blue.png"
                    />
                    <CardContent>
                      <h2 className='popup-title'><b>D.A Car Paint</b></h2><br />
                      <span><b>Categoria: Taller de autos   </b></span><br />
                      <span><b>¿Que producimos? </b></span>
                      Taller de chapa y pintura del automotor. <br />
                      <span><b>Ubicación: </b></span>
                      Olavarria 919, Azul, Provincia de Buenos Aires.
                    </CardContent>
                    <CardActions>
                      <Button variant="outlined" startIcon={<WhatsAppIcon />}>
                        Whatsapp
                      </Button>
                      <Button variant="outlined" endIcon={<MailOutlineIcon />}>
                        Email
                      </Button>
                    </CardActions>
                  </Card>
                </Popup>
              </Marker>

            </LayerGroup>
          </LayersControl.Overlay>

          <LayersControl.Overlay checked name="Agricultura familiar">
            <LayerGroup>

              <Marker position={[-36.796, -59.856]} icon={MarkerIcon} >
                <Popup>
                <Card className="card" sx={{ maxWidth: 345 }}>
                    <CardMedia className="popup-img"
                      component="img"
                      alt="green iguana"
                      height="140"
                      image="/images/logo-blue.png"
                    />
                    <CardContent>
                      <h2 className='popup-title'><b>La Miligrosa</b></h2><br />
                      <span><b>Categoria: Agricultura familiar </b></span><br />
                      <span><b>¿Que producimos? </b></span>
                      Huerta familiar. <br />
                      <span><b>Ubicación: </b></span>
                      Rivas 1424, Azul, Provincia de Buenos Aires.
                    </CardContent>
                    <CardActions>
                      <Button variant="outlined" startIcon={<WhatsAppIcon />}>
                        Whatsapp
                      </Button>
                      <Button variant="outlined" endIcon={<MailOutlineIcon />}>
                        Email
                      </Button>
                    </CardActions>
                  </Card>
                </Popup>
              </Marker>

              <Marker position={[-36.7967973, -59.8563133]} icon={MarkerIcon} >
                <Popup>
                <Card className="card" sx={{ maxWidth: 345 }}>
                    <CardMedia className="popup-img"
                      component="img"
                      alt="green iguana"
                      height="140"
                      image="/images/logo-blue.png"
                    />
                    <CardContent>
                      <h2 className='popup-title'><b>El Progreso </b></h2><br />
                      <span><b>Categoria: Agricultura familiar </b></span><br />
                      <span><b>¿Que producimos? </b></span>
                      Huerta familiar. <br />
                      <span><b>Ubicación: </b></span>
                      Rivas 1461, Azul, Provincia de Buenos Aires.
                    </CardContent>
                    <CardActions>
                      <Button variant="outlined" startIcon={<WhatsAppIcon />}>
                        Whatsapp
                      </Button>
                      <Button variant="outlined" endIcon={<MailOutlineIcon />}>
                        Email
                      </Button>
                    </CardActions>
                  </Card>
                </Popup>
              </Marker>

              <Marker position={[-36.787, -59.843]} icon={MarkerIcon} >
                <Popup>
                <Card className="card" sx={{ maxWidth: 345 }}>
                    <CardMedia className="popup-img"
                      component="img"
                      alt="green iguana"
                      height="140"
                      image="/images/logo-blue.png"
                    />
                    <CardContent>
                      <h2 className='popup-title'><b>La Huerta </b></h2><br />
                      <span><b>Categoria: Agricultura familiar </b></span><br />
                      <span><b>¿Que producimos? </b></span>
                      Huerta familiar. <br />
                      <span><b>Ubicación: </b></span>
                      Bogliano 1524, Azul, Provincia de Buenos Aires.
                    </CardContent>
                    <CardActions>
                      <Button variant="outlined" startIcon={<WhatsAppIcon />}>
                        Whatsapp
                      </Button>
                      <Button variant="outlined" endIcon={<MailOutlineIcon />}>
                        Email
                      </Button>
                    </CardActions>
                  </Card>
                </Popup>
              </Marker>

            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Artesanias">
            <LayerGroup>

              <Marker position={[-36.7823, -59.867]} icon={MarkerIcon} >
                <Popup>
                <Card className="card" sx={{ maxWidth: 345 }}>
                    <CardMedia className="popup-img"
                      component="img"
                      alt="green iguana"
                      height="140"
                      image="/images/logo-blue.png"
                    />
                    <CardContent>
                      <h2 className='popup-title'><b>Transformarte </b></h2><br />
                      <span><b>Categoria: Agricultura familiar </b></span><br />
                      <span><b>¿Que producimos? </b></span>
                      Artesanias, manualidades y reciclados. <br />
                      <span><b>Ubicación: </b></span>
                      Olavarria 496, Azul, Provincia de Buenos Aires.
                    </CardContent>
                    <CardActions>
                      <Button variant="outlined" startIcon={<WhatsAppIcon />}>
                        Whatsapp
                      </Button>
                      <Button variant="outlined" endIcon={<MailOutlineIcon />}>
                        Email
                      </Button>
                    </CardActions>
                  </Card>
                </Popup>
              </Marker>

            </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </>
  )
}

export default Map;