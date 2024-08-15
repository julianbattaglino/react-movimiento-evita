# Movimiento Evita - React.js Web App

## Descripción

Esta es la aplicación web oficial del Movimiento Evita Azul, desarrollada en React.js. La aplicación proporciona información sobre el movimiento, noticias y un mapa interactivo de las unidades productivas.

## Características

- **Navegación**: La aplicación utiliza `react-router-dom` para gestionar la navegación entre diferentes secciones.
- **Helmet**: Manejo dinámico de la información de la cabecera HTML.
- **Mapas**: Integración con `react-leaflet` para mostrar mapas interactivos.
- **Posts**: El componente `Posts` realiza fetching de datos desde la API REST de un WordPress, que actúa como headless CMS para obtener los posteos del blog. Se utiliza la librería `axios` para realizar solicitudes HTTP a la API REST de WordPress, lo que permite recuperar hasta 6 publicaciones en un formato JSON. Los posts se muestran en tarjetas con su título, categoría, imagen destacada, y un enlace para leer más.

## Estructura del Proyecto

- **`/src/App.js`**: Componente principal que gestiona las rutas y la estructura de la aplicación.
- **`/src/components/`**: Carpeta que contiene los componentes reutilizables como `Navbar`, `Home`, `Posts`, `Movimiento`, y `Map`.
- **`/public/`**: Carpeta pública que contiene el `index.html`, imágenes, y otros archivos estáticos.

## Dependencias Principales

- **React**: ^18.2.0
- **React Router DOM**: ^6.4.3
- **Material UI**: ^5.10.15
- **Axios**: ^1.2.0
- **React Leaflet**: ^4.1.0

## Scripts Disponibles

En este proyecto, puedes ejecutar los siguientes comandos:

- **`npm start`**: Inicia la aplicación en modo de desarrollo.
- **`npm run build`**: Construye la aplicación para producción en la carpeta `build`.
- **`npm test`**: Ejecuta los tests de la aplicación.

## Instalación

Para instalar y ejecutar esta aplicación localmente, sigue estos pasos:

1. Clona este repositorio:
   ```bash
   git clone https://github.com/julianbattaglino/react-movimiento-evita.git

2. Instala las dependencias:
   ```bash
   npm install
    
3. Inicia la aplicación:
   ```bash
   npm start
