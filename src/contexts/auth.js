import React, { createContext, useState, useEffect, useContext } from "react";
import UserService from "../services/UserService";
import axios from "axios";

const AuthContext = createContext({
  signed: false,
  loading: false,
  signIn: Promise,
  signUp: Promise,
  signOut: Promise,
  setUser: Promise,
  user: {
    token: "",
    userData: {
      id_usuario: 0,
      tipo_usuario: "",
      mail: "",
      nome: "",
      cpf_cnpj: "",
      uf: "",
      rua: "",
      bairro: "",
      cidade: "",
      complemento: "",
      numero: "",
      cep: "",
      url_foto: "",
    },
  },
});
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [signed, setSigned] = useState(false);
  const [loading, setLoading] = useState(true);
  console.log(user);
  useEffect(() => {
    function loadUserStorageData() {
      const storageUser = localStorage.getItem("@JOBAuth:user");
      const storageToken = localStorage.getItem("@JOBAuth:token");

      if (storageToken && storageUser) {
        axios.defaults.headers.Authorization = `Bearer ${JSON.parse(
          storageToken
        )}`;
        const data = {
          token: JSON.parse(storageToken),
          userData: JSON.parse(storageUser),
        };
        setUser(data);
        setLoading(false);
      }
    }

    loadUserStorageData();
  }, []);

  async function signIn(mail, password) {
    const response = await UserService.login(mail, password);
    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    setUser(response.data);
    setSigned(true);

    localStorage.setItem(
      "@JOBAuth:user",
      JSON.stringify(response.data.userData)
    );
    localStorage.setItem("@JOBAuth:token", JSON.stringify(response.data.token));
    return response.data;
  }

  function signUp(data) {
    axios.defaults.headers.Authorization = `Bearer ${data.token}`;

    setUser(data);
    setSigned(true);

    localStorage.setItem("@JOBAuth:user", JSON.stringify(data.userData));
    localStorage.setItem("@JOBAuth:token", JSON.stringify(data.token));
  }

  function signOut() {
    setUser(null);
    localStorage.clear();
  }

  return (
    <AuthContext.Provider
      value={{ signed, loading, user, setUser, signIn, signUp, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
