import axios from "axios";
import { strings } from "../assets/config";

/**
 * BASE URLS of the service used on VacancyService.
 */
const BASE_MATCH = "matches/";

/**
 * URLS of the service used on VacancyService.
 */
const RESOURCES = {
  INSERT_MATCH: BASE_MATCH,
};

/**
 * Params used on services methods.
 */
const PARAMS = {
  ID_VAGA: "id_vaga",
  DESCARTADO: "descartado",
};

class MatchService {
  static async createMatch(payload) {
    try {
      return axios.post(RESOURCES.INSERT_MATCH, {
        [PARAMS.ID_VAGA]: payload.idVaga,
        [PARAMS.DESCARTADO]: payload.descartado,
      });
    } catch (error) {
      console.log(error);
      return strings.errors.genericError;
    }
  }
}

export default MatchService;
