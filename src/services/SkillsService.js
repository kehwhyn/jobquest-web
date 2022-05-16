import axios from "axios";
import { strings } from "../assets/config";

/**
 * BASE URLS of the service used on VacancyService.
 */
const BASE_SKILLS = "skills/";

/**
 * URLS of the service used on VacancyService.
 */
const RESOURCES = {
  LIST_SKILLS: BASE_SKILLS,
  GET_SKILL: (skillId) => `${BASE_SKILLS}/${skillId}`,
};

/**
 * Params used on services methods.
 */

class SkillsService {
  static async listSkills() {
    try {
      return axios.get(RESOURCES.LIST_SKILLS);
    } catch (error) {
      console.log(error);
      return strings.errors.genericError;
    }
  }

  static async getSkillById(vacancyId) {
    try {
      return axios.get(RESOURCES.GET_SKILL(vacancyId));
    } catch (error) {
      console.log(error);
      return strings.errors.genericError;
    }
  }
}

export default SkillsService;
