import React, { useCallback, useEffect, useState } from "react";
import { SearchOutlined } from "@material-ui/icons";
import Input from "../../components/Input";
import VacancyItem from "../../components/VacancyItem";
import { VacancyService } from "../../services";
import * as styles from "./styles";
import NavigationBar from "../../components/NavigationBar";
import Loader from "../../components/Loader";
import { useAuth } from "../../contexts/auth";

const RenderList = (list) => {
  return list?.length !== undefined ? (
    <styles.ListWrapper>
      {list.map((item, index) => (
        <VacancyItem vacancy={item} key={index} />
      ))}
    </styles.ListWrapper>
  ) : (
    <styles.NoData>Nenhuma vaga foi encontrada</styles.NoData>
  );
};

export default () => {
  const { user: authenticatedUser } = useAuth();
  const [vacanciesList, setVacanciesFullList] = useState([]);
  const [vacancies, setVacancies] = useState([]);
  const [loading, handleLoading] = useState(true);

  const filterVacancies = useCallback(
    (value) => {
      setVacancies(
        vacanciesList.filter(
          (vacancy) =>
            vacancy.area.toLowerCase().includes(value.toLowerCase()) ||
            vacancy.empresa.toLowerCase().includes(value.toLowerCase()) ||
            vacancy.nome.toLowerCase().includes(value.toLowerCase())
        )
      );
    },
    [vacanciesList]
  );

  useEffect(() => {
    const getVacanciesList = async () => {
      const { data: response } =
        authenticatedUser.userData.tipo_usuario === "anonimo"
          ? await VacancyService.listPublicVacancies()
          : await VacancyService.listVacancies();
      setVacanciesFullList(response.data);
      setVacancies(response.data);
      handleLoading(false);
    };

    getVacanciesList();
  }, [setVacanciesFullList, authenticatedUser]);

  return (
    <styles.Wrapper>
      <styles.Title>Vagas Disponíveis</styles.Title>
      <Input
        onChange={(e) => filterVacancies(e.target.value)}
        icon={SearchOutlined}
        placeholder="Pesquise por vagas"
      />
      {loading ? (
        <Loader color="secondary" style={{ padding: "6rem 1rem" }} />
      ) : (
        RenderList(vacancies)
      )}
      <NavigationBar whatsPage={"search"} />
    </styles.Wrapper>
  );
};
