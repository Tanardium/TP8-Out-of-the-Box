import React from 'react';

export const ContextUsuario = React.createContext();

const UsuarioProvider = (props) => {
    const [usuario, setUsuario] = React.useState(JSON.parse(localStorage.getItem('usuario')) || null);
    const [autenticado, setAutenticado] = React.useState(false);

    return (
        <ContextUsuario.Provider value={{ usuario, setUsuario, autenticado, setAutenticado}}>
          {props.children}
        </ContextUsuario.Provider>)
}

export default UsuarioProvider;