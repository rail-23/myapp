import '../estilo/GestionProyecto.css'
import React from 'react';

function GestionProyecto() {
  return (
    <div className="container">
      <h2>Gestión de Proyectos</h2>
      <button>Crear Proyecto</button>
      <button>Visualizar Proyectos</button>
      <button>Actualizar Proyecto</button>
      <button>Eliminar Proyecto</button>
    </div>
  );
}

export default GestionProyecto;