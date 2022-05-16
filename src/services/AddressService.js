import axios from "axios";
import { strings } from "../assets/config";

/**
 * BASE URLS of the service used on UserService.
 */
const BASE_CEP = "https://viacep.com.br";

/**
 * URLS of the service used on UserService.
 */
const RESOURCES = {
  CEP: BASE_CEP + "/ws",
};

export class AddressService {

  static getAddressByCep(cep) {
    return axios.get(`${RESOURCES.CEP}/${cep}/json/`, {
      transformRequest: (data, headers) => {
        delete headers['Authorization'];
      }
    })
      .then(response => {
        return response.data;
      })
      .catch(error => {
        console.log(error);
        return strings.errors.genericError;
      });;
  }
}