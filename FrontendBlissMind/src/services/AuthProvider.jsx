import { createContext, useContext, useState } from "react";
import { useMutation } from "@tanstack/react-query";

// URL base de la API
const API_URL = import.meta.env.VITE_API_URL_HTTP;

// Crear el contexto
const AuthContext = createContext();

// Hook para usar el contexto
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);

// Función para realizar el login utilizando fetch
const loginUser = async (credentials) => {
  const response = await fetch(`${API_URL}/Auth/login`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || 'Error al iniciar sesión');
  }

  return await response.json(); // { nombre, correo, usuario, token }
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);

  const loginMutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      // valores globales para el usuario existe
      setUser(data);
      // cambiar el estado a logeado
      setIsLogged(true);
      // guardar el token
      localStorage.setItem('authToken', data.token);
    },
    onError: () => {
      console.error('Error de autenticación');
    },
  });

  return (
    <AuthContext.Provider value={{
      user,
      login: loginMutation.mutateAsync,
      isLoading: loginMutation.isPending,
      isError: loginMutation.error,
      isLogged
    }}>
      {children}
    </AuthContext.Provider>
  );
}
