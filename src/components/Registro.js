
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthForms from'../estilo/AuthForms.css'

function Registro() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      const userData = { username, email, password };
      const response = await axios.post('/login/Registrarse', userData); // Usa la instancia configurada

      console.log('Registro exitoso:', response.data);
      localStorage.setItem('token', response.data.token); // Almacena el token
      navigate('/sesion-proyecto'); // Redirige al usuario
    } catch (error) {
      console.error('Error al registrar:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Registrar</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Nombre de Usuario" required />
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo Electrónico" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" required />
        <button type="submit">Registrar</button>
      </form>
    </div>
  );
}

export default Registro;