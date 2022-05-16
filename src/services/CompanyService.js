import axios from "axios";
import { strings } from "../assets/config";

/**
 * BASE URLS of the service used on UserService.
 */
const BASE_COMPANY = "companies/";


class CompanyService {
  static getCompanyById(id) {
    return axios
      .get(`${BASE_COMPANY}${id}`)
      .then((result) => {
        return result;
      })
      .catch((error) => {
        console.log(error);
        return strings.errors.genericError;
      });
  }

  static updateCompany(id, data) {
    return axios
      .patch(`${BASE_COMPANY}${id}`, data)
      .then((result) => {
        return result;
      })
      .catch((error) => {
        console.log(error);
        return strings.errors.genericError;
      });
  }
}

export default CompanyService;
