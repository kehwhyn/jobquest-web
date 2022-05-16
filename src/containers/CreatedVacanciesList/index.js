import React, { useState, useEffect, useCallback } from "react";
import NavigationBar from '../../components/NavigationBar';
import VacancyItem from '../../components/VacancyItem';
import { SearchOutlined } from "@material-ui/icons";
import Input from "../../components/Input";
import { useAuth } from "../../contexts/auth";
import { VacancyService } from '../../services';


import { Title, Container, ListWrapper, ButtonWrapper } from './styles'
import Button from '../../components/Button';
import { useHistory } from 'react-router-dom';

function CreatedVacanciesList() {
  const data = useAuth();
  const [vacanciesList, setVacanciesFullList] = useState([]);
  const [vacancies, setVacancies] = useState([]);

  const history = useHistory();

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
    [vacancies]
  );

  const renderVacancies = () => {
    return vacancies.map((vacancy, key) => (<VacancyItem disableActions={true} vacancy={vacancy} key={key} />))
  }

  useEffect(() => {
    async function fetch() {
      const vacanciesToList = await VacancyService.listVacanciesByCompany(data.user.userData.empresa.id_empresa)
      console.log(vacanciesToList)
      setVacanciesFullList(vacanciesToList.data.data || [])
      setVacancies(vacanciesToList.data.data || [])
    }

    fetch();
  }, []);


  return (
    <Container>
      <Title>Vagas Cadastradas</Title>
      <Input
        onChange={(e) => filterVacancies(e.target.value)}
        icon={SearchOutlined}
        placeholder="Pesquise por vagas"
      />
      <ListWrapper>
        {renderVacancies()}
        <ButtonWrapper>
          <Button isUpperCase={true} size='large' onClick={() => history.push('/cadastrar-vaga')}>Adicionar Vaga</Button>
        </ButtonWrapper>
      </ListWrapper>
      <NavigationBar whatsPage={"application"} />
    </Container>
  );
}

export default CreatedVacanciesList;
