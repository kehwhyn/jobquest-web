import axios from "axios";
import { strings } from "../assets/config";
import { useAuth } from "../contexts/auth";
/**
 * BASE URLS of the service used on VacancyService.
 */
const BASE_VACANCY = "vacancies/";

/**
 * URLS of the service used on VacancyService.
 */
const RESOURCES = {
  LIST_VACANCIES: BASE_VACANCY,
  LIST_PUBLIC_VACANCIES: "public/list_vacancies",
  GET_VACANCY: (vacancyId) => `${BASE_VACANCY}/${vacancyId}`,
  LIST_VACANCIES_BY_COMPANY_ID: `${BASE_VACANCY}/company`,
};


/**
 * Params used on services methods.
 */
const PARAMS = {
  ID_EMPRESA: "id_empresa",
  ID_AREA: "id_area",
  TITULO: "nome",
  QUANTIDADE: "quantidade",
  ENDERECO:"endereco",
  HORARIOS:"horarios",
  DESCRICAO: "descricao",
  HABILIDADES: "habilidades",
};

class VacancyService {
  static async listVacancies() {
    try {
      return axios.get(RESOURCES.LIST_VACANCIES, {
        params: {
          tipo: "N",
        },
      });
    } catch (error) {
      console.log(error);
      return strings.errors.genericError;
    }
  }

  static async listPublicVacancies() {
    try {
      return axios.get(RESOURCES.LIST_PUBLIC_VACANCIES);
    } catch (error) {
      console.log(error);
      return strings.errors.genericError;
    }
  }

  static async listVacanciesByCompany(idEmpresa) {
    try {
      return axios.get(`${RESOURCES.LIST_VACANCIES_BY_COMPANY_ID}/${idEmpresa}`);
    } catch (error) {
      console.log(error);
      return strings.errors.genericError;
    }
  }

  static async getVacancyById(vacancyId) {
    try {
      return axios.get(RESOURCES.GET_VACANCY(vacancyId));
    } catch (error) {
      console.log(error);
      return strings.errors.genericError;
    }
  }


  //TO DO preciso do id da empresa

  static async createVacancy(payload) {
    try {
      return axios.post(BASE_VACANCY, {
        [PARAMS.ID_EMPRESA]:payload.idEmpresa,
        [PARAMS.ID_AREA]: 1,
        [PARAMS.TITULO]: payload.role,
        [PARAMS.QUANTIDADE]: payload.quantity,
        [PARAMS.ENDERECO]:payload.address,
        [PARAMS.HORARIOS]:payload.workPeriod,
        [PARAMS.DESCRICAO]: payload.description,
        [PARAMS.HABILIDADES]: payload.skills,
      });
    } catch (error) {
      console.log(error);
      return strings.errors.genericError;
    }
  }
}

export default VacancyService;
