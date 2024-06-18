import { createContext, useState } from "react";

// 1. Crear objeto del context con un valor por defecto
const AuthContext = createContext(); // { isLogedIn: false }

// 2. Provider: proveer de información y/o funciones al contexto
// Lo haremos a través de un componente de React

// Defino el componente de React para envolver al provider del context
function AuthContextProvider( {children} ) {
  // estados
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [token, setToken] = useState(null);
  // catálogos de autores
  // lista de Pokemones, etc...
  const contextData = { 
    isLogedIn,  // isLogedIn: isLogedIn
    setIsLogedIn,  // para cuando queremos iniciar/cerrar la sesión
    token,
    setToken
    // setSearchResult
  };
  
  // 2.2 Usar el provider del context
  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthContextProvider };