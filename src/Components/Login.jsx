import React, { useState } from 'react';
import { ContextUsuario } from '../context/ContextUsuario';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const { setUsuario, setAutenticado } = React.useContext(ContextUsuario);
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsuario(username );
    localStorage.setItem('usuario', JSON.stringify( username  ))
    setAutenticado(true);
    navigate('/');
  };

  return (
    <div className="card">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div className="button-container">
          <Link to="/" className="link">
            <button className='back'>Volver</button>
          </Link>
          <button type="submit">Iniciar sesión</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
