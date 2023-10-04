import React from 'react';

export const ContextUsuario = React.createContext();

const UsuarioProvider = (props) => {
    const [usuario, setUsuario] = React.useState({});

    return <ContextUsuario.Provider value={{usuario, setUsuario}}>{props.children}</ContextUsuario.Provider>
}

export default UsuarioProvider;