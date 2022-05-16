import axios from "axios";
import { strings } from "../assets/config";
import * as crypto from "crypto-js";
import PerfilEnum from "../utility/PerfilEnum";

/**
 * BASE URLS of the service used on UserService.
 */
const BASE_USER = "users/";
const BASE_LOGIN = "login/";

/**
 * URLS of the service used on UserService.
 */
const RESOURCES = {
  LOGIN: BASE_LOGIN,
  SIGNUP: BASE_LOGIN + "signup/",
  LOGOUT: BASE_USER + "logout/",
  LIST_USERS: BASE_USER + "list/",
  VALID_TOKEN: BASE_LOGIN + "token",
};

/**
 * Params used on services methods.
 */
const PARAMS = {
  EMAIL: "email",
  SENHA: "senha",
  NOME: "nome",
  PERFIL: "perfil",
};

class UserService {
  static login(email, password) {
    return axios
      .post(
        RESOURCES.LOGIN,
        JSON.stringify({
          [PARAMS.EMAIL]: email,
          [PARAMS.SENHA]: crypto.SHA256(password).toString(),
        })
      )
      .then((result) => {
        console.log(result);
        return result.data;
      })
      .catch((error) => {
        console.log(error);
        return strings.errors.genericError;
      });
  }

  static async signup(data) {
    return axios
      .post(
        RESOURCES.SIGNUP,
        JSON.stringify({
          [PARAMS.EMAIL]: data.email,
          [PARAMS.PERFIL]: data.isBusinessAccount
            ? PerfilEnum.EMPRESA
            : PerfilEnum.USUARIO,
          [PARAMS.NOME]: data.name,
          [PARAMS.SENHA]: crypto.SHA256(data.password).toString(),
        })
      )
      .then((result) => {
        console.log(result);
        return result.data;
      })
      .catch((error) => {
        console.log(JSON.stringify(error));
        return {
          success: false,
          desc: strings.errors.genericError,
        };
      });
  }

  static listUsers() {
    return axios
      .get(RESOURCES.LIST_USERS)
      .then((result) => {
        return result;
      })
      .catch((error) => {
        console.log(error);
        return strings.errors.genericError;
      });
  }

  static getUserById(UserId) {
    return axios
      .get(`${BASE_USER}${UserId}`)
      .then((result) => {
        return result;
      })
      .catch((error) => {
        console.log(error);
        return strings.errors.genericError;
      });
  }

  static updateUser(id, data) {
    return axios
      .patch(`${BASE_USER}${id}`, data)
      .then((result) => {
        return result;
      })
      .catch((error) => {
        console.log(error);
        return strings.errors.genericError;
      });
  }
}

export default UserService;
