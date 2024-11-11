
import React, { useState } from 'react';
import { loginUser } from '../api';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const credentials = { email, password };
      const response = await loginUser(credentials);
      localStorage.setItem('token', response.token);
      console.log('Inicio de sesión exitoso:', response.token);
    
    } catch (error) {
      console.error('Error al iniciar sesión:', error.response.data);
    }
  };

  return (
    <div className="form-container">
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo Electrónico" required />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" required />
        <button type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
}

export default Login;