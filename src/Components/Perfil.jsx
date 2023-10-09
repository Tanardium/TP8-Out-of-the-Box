import React, { useContext, useState } from "react";
import { ContextUsuario } from "../context/ContextUsuario";
import { Link } from "react-router-dom";

const Perfil = () => {
  const { usuario } = useContext(ContextUsuario);
  const { setAutenticado } = useContext(ContextUsuario);
  const [loggedOut, setLoggedOut] = useState(false);

  const logOut = () => {
    setAutenticado(false);
    setLoggedOut(true);
  };

  return (
    <div className="card">
      <h1>Tu perfil</h1>
      <div className="form-group">
        <br />
        <h4>Nombre de usuario: {usuario.nombre}</h4>
        <br />
          <Link to="/" className="link">
            <button onClick={logOut} type="submit" class="btn btn-primary btn-lg">Cerrar sesión</button>
          </Link>
      </div>
    </div>
  );
};

export default Perfil;
