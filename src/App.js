import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Helmet} from "react-helmet";

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Map from './components/Map/Map';
import Movimiento from './components/Movimiento/Movimiento';



function App() {
  return (
    <div className="app">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Movimiento Evita Azul - Webapp</title>
        <meta name="description" content="Sitio web oficial del Movimiento Evita Azul"></meta>
      </Helmet>
      <BrowserRouter >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/el-movimiento" element={<Movimiento />} />
          <Route path='/unidades-productivas' element={<Map />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
