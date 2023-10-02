import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [username, setUsername] = useState(null);

  const login = (userData) => {
    // Aquí puedes realizar la lógica de autenticación
    // Por ahora, simplemente establecemos el usuario en algún valor
    setUsername(userData);
  };

  const logout = () => {
    // Implementa la lógica para cerrar la sesión (si es necesario)
    setUsername(null);
  };

  return (
    <AuthContext.Provider value={{ username, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
