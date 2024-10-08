import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Helmet} from "react-helmet";

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Posts from './components/Posts/Posts';
import Map from './components/Map/Map';
import Movimiento from './components/Movimiento/Movimiento';



function App() {
  return (
    <div className="app">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Movimiento Evita Azul - react.js Webapp</title>
        <meta name="description" content="Sitio web oficial del Movimiento Evita Azul"></meta>
        <meta name="theme-color" content="#194C92"></meta>
      </Helmet>
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/el-movimiento" element={<Movimiento />} />
          <Route path="/novedades" element={<Posts />} />
          <Route path='/unidades-productivas' element={<Map />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
