import {
    loginRequest,
    verifyRequest,
    signupRequest,
    updateRequest,
  } from "../utils/usuarios.js";
  import { createContext, useState, useContext, useEffect } from "react";
  import instance from "../utils/axios.js";
  
  export const AuthContext = createContext();
  
  export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [usuario, setUsuario] = useState(null);
    const [loading, setLoading] = useState(true);
    const [errors, setErrors] = useState("");
  
    const register = async (nombre, usuario, clave, rol) => {
      try {
        const res = await signupRequest({
          nombre,
          usuario,
          clave,
          rol, // Envía el rol seleccionado
        });
        return res;
      } catch (error) {
        console.log(error);
        setErrors(error.response.data.message);
      } finally {
        setLoading(false);
      }
    };
  
    const login = async (usuario, clave) => {
      try {
        const res = await loginRequest({
          usuario,
          clave,
        });
        if (!res.data) {
          logout();
        }
        setIsAuthenticated(true);
        setUsuario(res.data.usuario);
        //Guardar el token en localStorage para mantener sesion iniciada
        localStorage.setItem("token", res.data.token);
      } catch (error) {
        if (error.code === "ERR_NETWORK") {
          setErrors("Error en conexión con el servidor");
        } else {
          console.log(error.response.data.message);
          setErrors(error.response.data.message);
          logout();
          return error;
        }
      } finally {
        setLoading(false);
      }
    };
  
    const editUsuario = async (id, editedUsuario) => {
      try {
        const res = await updateRequest(id, editedUsuario);
        setUsuario(res.data.usuario);
      } catch (error) {
        console.error("Error updating usuario:", error);
      } finally {
        setLoading(false);
      }
    };
  
    const logout = () => {
      setIsAuthenticated(false);
      setUsuario(null);
  
      localStorage.removeItem("token");
      localStorage.removeItem("role");
    };
  
    //Vaciar errors despues de 7 segundos de haberse mostrado
    useEffect(() => {
      if (errors.length > 0) {
        const timer = setTimeout(() => {
          setErrors("");
        }, 7000);
  
        return () => clearTimeout(timer);
      }
    }, [errors]);
  
    //Verificar sesion al momento de cargar
    useEffect(() => {
      const token = localStorage.getItem("token");
  
      if (!token) {
        setLoading(false);
      } else {
        //verificarToken(token);
      }
    }, []);
  
    useEffect(() => {
      const token = localStorage.getItem("token");
      instance.defaults.headers["Authorization"] = token ? `${token}` : "";
    }, [isAuthenticated]);
  
    const verificarToken = async (token) => {
      try {
        const res = await verifyRequest({ token });
        if (!res.data) {
          logout();
        } else {
          setUsuario(res.data.usuario);
          setIsAuthenticated(true);
        }
      } catch (error) {
        console.log(error);
        logout();
      } finally {
        setLoading(false);
      }
    };
  
    return (
      <div>
        <AuthContext.Provider
          value={{
            isAuthenticated,
            usuario,
            loading,
            register,
            login,
            editUsuario,
            logout,
            errors,
          }}
        >
          {!loading && children}
        </AuthContext.Provider>
      </div>
    );
  };
  
  export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
      throw new Error("useAuth debe ser utilizado dentro de un AuthProvider");
    }
    return context;
  };