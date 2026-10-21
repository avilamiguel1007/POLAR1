import './App.css';
import Card from './Components/Card/Card';
import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import Dashboard from './Pages/Dashboard/Dashboard';
import Reportes from './Pages/Reportes/Reportes';
import Placeholder from './Pages/Placeholder/Placeholder';
import Perfil from './Pages/Perfil/Perfil';
import Configuracion from './Pages/Configuracion/Configuracion';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element = {<Dashboard />} />
      <Route path="/reportes" element = {<Reportes />} />
      <Route path="/placeholder" element = {<Placeholder title="Placeholder Page" />} />
      <Route path="/perfil" element = {<Perfil />} />
      <Route path="/configuracion" element = {<Configuracion />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
