import React, { useCallback, useEffect, useState } from "react";
import {
  Container,
  TopButtons,
  TopTitle,
  CompanyLogoDiv,
  CompanyLogo,
  JobForm,
  Label,
  CheckboxWrapper,
  TextArea,
} from "./styled";
import Box from "../../components/Box";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Checkbox from "../../components/Checkbox";
import NavigationBar from "../../components/NavigationBar";
import { useAuth } from "../../contexts/auth";
import { showNotification } from "../../components/Notification";
import { SkillsService, VacancyService } from "../../services";
import { WorkPeriodService } from "../../services";
import Loader from "../../components/Loader";

export default () => {
  const [skills, setSkills] = useState([]);
  const [selectedSkills, setSelectedSkills] = useState([]);
  const [skillsLoading, setSkillsLoading] = useState(true);
  const [workPeriods, setworkPeriods] = useState([]);
  const [selectedworkPeriods, setSelectedworkPeriods] = useState([]);
  const [workPeriodLoading, setworkPeriodLoading] = useState(true);

  const [creationLoading, setCreationLoading] = useState(false);

  const { user } = useAuth();

  useEffect(() => {
    const getSkills = async () => {
      const { data: skillsResponse } = await SkillsService.listSkills();
      setSkills(skillsResponse.data);
      setSkillsLoading(false);
    };
    getSkills();
  }, [setSkills]);

  useEffect(() => {
    const getworkPeriods = async () => {
      const {
        data: workPeriodsResponse,
      } = await WorkPeriodService.listworkPeriods();

      console.log(workPeriodsResponse);

      setworkPeriods(workPeriodsResponse.data);
      setworkPeriodLoading(false);
    };
    getworkPeriods();
  }, [setworkPeriods]);

  const handleSelectedSkills = useCallback(
    (value) => {
      const selected = selectedSkills.findIndex((id) => id === value);
      if (selected >= 0) {
        setSelectedSkills(selectedSkills.filter((item) => item !== value));
      } else {
        setSelectedSkills([...selectedSkills, value]);
      }
    },
    [selectedSkills]
  );

  const handleSelectedworkPeriods = useCallback(
    (value) => {
      const selected = selectedworkPeriods.findIndex((id) => id === value);
      if (selected >= 0) {
        setSelectedworkPeriods(
          selectedworkPeriods.filter((item) => item !== value)
        );
      } else {
        setSelectedworkPeriods([...selectedworkPeriods, value]);
      }
    },
    [selectedworkPeriods]
  );

  const submit = async (event) => {
    setCreationLoading(true);
    event.preventDefault();
    const {
      area: { value: area },
      quantity: { value: quantity },
      role: { value: role },
      address: { value: address },
      description: { value: description },
    } = event.target;

    const payload = {
      idEmpresa: user.userData.id_usuario,
      area,
      quantity,
      role,
      description,
      address,
      workPeriod: selectedworkPeriods,
      skills: selectedSkills,
    };

    const { data } = await VacancyService.createVacancy(payload);
    setCreationLoading(false);

    if (data.success) {
      showNotification("Vaga criada com sucesso", "Sucesso vaga");
    } else {
      showNotification("Erro ao cadastrar a vaga", "Erro vaga", "danger");
    }
  };

  return (
    <>
      <Container>
        <TopButtons></TopButtons>
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "20px",
            overflow: "initial",
          }}
          withShadow
        >
          <TopTitle>
            <h1>Cadastrar vaga</h1>
            <h2>Adicione as informações sobre a vaga!</h2>
          </TopTitle>

          <CompanyLogoDiv>
            <CompanyLogo src={user.userData.url_foto} />
          </CompanyLogoDiv>
          {skillsLoading ? (
            <Loader
              color="secondary"
              style={{ padding: "6rem 1rem", alignSelf: "center" }}
            />
          ) : (
            <>
              <JobForm onSubmit={submit}>
                <Input
                  label="Para qual setor é a vaga?"
                  name="area"
                  id="area"
                />
                <br />
                <Label>Quais requisitos para a vaga?</Label>
                <CheckboxWrapper>
                  {!skillsLoading &&
                    skills.map((skills) => (
                      <Checkbox
                        onClick={(e) => handleSelectedSkills(e.target.id)}
                        label={skills.nome}
                        key={skills.id_habilidade}
                        id={skills.id_habilidade}
                      />
                    ))}
                </CheckboxWrapper>
                <Input
                  label="Qual o número de vagas?"
                  name="quantity"
                  id="number"
                  type="number"
                />
                <Input
                  label="Qual o cargo da vaga?"
                  name="role"
                  id="role"
                  type="text"
                />
                <Input
                  label="Qual o endereço da Vaga?"
                  name="address"
                  id="address"
                  type="text"
                />
                <Label>Jornada de Trabalho</Label>
                <CheckboxWrapper>
                  {!workPeriodLoading &&
                    workPeriods?.map((workPeriods) => (
                      <Checkbox
                        onClick={(e) => handleSelectedworkPeriods(e.target.id)}
                        label={workPeriods.nome}
                        key={workPeriods.id_horario}
                        id={workPeriods.id_horario}
                      />
                    ))}
                </CheckboxWrapper>
                <Label>Informe uma descrição para a vaga</Label>
                <TextArea id="description" name="description" />
                <Button type="submit" id="submit">
                  {creationLoading ? (
                    <Loader size="small" color="secondary" />
                  ) : (
                    "Cadastrar"
                  )}
                </Button>
              </JobForm>
            </>
          )}
        </Box>
        <NavigationBar whatsPage={"search"} />{" "}
      </Container>
    </>
  );
};
