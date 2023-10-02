import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    // Aquí puedes realizar la lógica de autenticación
    // Por ahora, simplemente establecemos el usuario en algún valor
    setUser(userData);
  };

  const logout = () => {
    // Implementa la lógica para cerrar la sesión (si es necesario)
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
