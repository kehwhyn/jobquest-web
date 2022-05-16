import axios from "axios";
import { strings } from "../assets/config";

const BASE_WORKPERIOD = "vacancies/";

const RESOURCES = {
  LIST_WORKPERIOD: BASE_WORKPERIOD + "workPeriod",
  GET_WORKPERIOD: (workPeriodId) => `${BASE_WORKPERIOD}/${workPeriodId}`,
};

/**
 * Params used on services methods.
 */
const PARAMS = {};

class WorkPeriodService {
  static async listworkPeriods() {
    try {
      return axios.get(RESOURCES.LIST_WORKPERIOD);
    } catch (error) {
      console.log(error);
      return strings.errors.genericError;
    }
  }

  static async getworkPeriodById(workPeriodId) {
    try {
      return axios.get(RESOURCES.GET_WORKPERIOD(workPeriodId));
    } catch (error) {
      console.log(error);
      return strings.errors.genericError;
    }
  }
}

export default WorkPeriodService;
