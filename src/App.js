// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import GestionProyecto from './components/GestionProyecto';
import Registro from './components/Registro';
import Login from './components/Login';
import ProtectedRoute from './components/ProtecteRoute';
import ListaProyecto from './components/ListaProyecto';
import GestionTarea from './components/GestionTarea';



function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/lista-proyecto">Lista Proyecto</Link>
            </li>
            <li>
              <Link to="/gestion-tarea">Gestiónes Tarea</Link>
            </li>
            <li>
              <Link to="/gestion-proyecto">Gestiónes Proyecto</Link>
            </li>
            <li>
              <Link to="/form-proyecto">Formulario-Registro</Link>
            </li>
            <li>
              <Link to="/sesion-proyecto">iniciar sesion</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<div>hola bienvenido somos mejores que ayer</div>} />
          <Route path="/gestion-tarea" element={<GestionTarea />} />
          <Route path="/gestion-proyecto" element={<GestionProyecto />} />
          <Route path="/lista-proyecto" element={<ListaProyecto />} />
          <Route path="/form-proyecto" element={<Registro />} />
          <Route path="/sesion-proyecto" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;