import React, { useEffect, useState } from "react";
import { isValidCEP } from "@brazilian-utils/brazilian-utils";
import { getStates } from "@brazilian-utils/brazilian-utils";

import {
  Row,
  Subtitle,
  SubmitButtonContainer,
  Container,
  FormSection,
} from "./styled";
import {} from "../../styles/global";
import Checkbox from "../../components/Checkbox";
import Input from "../../components/Input";
import Button from "../../components/Button";
import TextArea from "../../components/TextArea";
import Select from "../../components/Select";
import GroupInput from '../../components/GroupInput';
import { AddressService } from "../../services/AddressService";
import { SHIFTS } from "../../constants";
import { UserService } from "../../services";
import { isAfter, isBefore } from "date-fns";
import { showNotification } from "../../components/Notification";

function EditProfile({ userData, onSubmit }) {
  const [shifts, setShifts] = useState(userData?.turnos);
  const [description, setDescription] = useState(userData?.descricao);
  const [homePhone, setHomePhone] = useState(userData?.telefone_casa);
  const [cellPhone, setCellPhone] = useState(userData?.telefone_celular);
  const [cpf, setCpf] = useState(userData?.cpf_cnpj);
  const [cep, setCep] = useState(userData?.cep);
  const [rua, setRua] = useState(userData?.rua);
  const [numero, setNumero] = useState(userData?.numero);
  const [complemento, setComplemento] = useState(userData?.complemento);
  const [cidade, setCidade] = useState(userData?.cidade);
  const [estado, setEstado] = useState(userData?.estado);
  const [habilidades, setHabilidades] = useState(userData?.habilidades);
  const [experiencias, setExperiencias] = useState(userData?.experiencias);

  useEffect(() => {
    setShifts(userData?.turnos);
    setDescription(userData?.descricao);
    setHomePhone(userData?.telefone_casa);
    setCellPhone(userData?.telefone_celular);
    setCpf(userData?.cpf_cnpj);
    setCep(userData?.cep);
    setRua(userData?.rua);
    setNumero(userData?.numero);
    setComplemento(userData?.complemento);
    setCidade(userData?.cidade);
    setEstado(userData?.estado);
    setHabilidades(userData?.habilidades);
    setExperiencias(userData?.experiencias);
  }, [userData]);

  const isChecked = (name) => shifts?.some((shift) => shift === name);

  const handleCheckboxChange = ({ target }) => {
    const checkboxName = target.name;

    if (isChecked(checkboxName)) {
      setShifts(shifts.filter((shift) => shift !== checkboxName));
      return;
    }
    setShifts([...shifts, checkboxName]);
  };

  const renderCheckboxes = () => {
    return SHIFTS.map((shift, key) => (
      <Checkbox
        label={shift.label}
        name={shift.name}
        key={key}
        checked={isChecked(shift.name)}
        onChange={handleCheckboxChange}
      />
    ));
  };

  const onAddSkill = (habilidade) => {
    if(isAfter(new Date(habilidade.data_fim), new Date()) || isAfter(new Date(habilidade.data_inicio), new Date())) {
      showNotification(
        "As datas precisam ser anteriores ao momento atual",
        "Erro nas datas!",
        "danger"
      );
      return;
    }

    if(isBefore(new Date(habilidade.data_fim), new Date(habilidade.data_inicio))) {
      showNotification(
        "A data inicial precisa ser anterior a data final",
        "Erro nas datas!",
        "danger"
      );
      return;
    }
    setHabilidades((habilidades) => [...habilidades, habilidade]);
  }

  const onAddExperience = (experiencia) => {
    if(isAfter(new Date(experiencia.data_fim), new Date()) || isAfter(new Date(experiencia.data_inicio), new Date())) {
      showNotification(
        "As datas precisam ser anteriores ao momento atual",
        "Erro nas datas!",
        "danger"
      );
      return;
    }

    if(isBefore(new Date(experiencia.data_fim), new Date(experiencia.data_inicio))) {
      showNotification(
        "A data inicial precisa ser anterior a data final",
        "Erro nas datas!",
        "danger"
      );
      return;
    }
    setExperiencias((experiencias) => [...experiencias, experiencia]);
  }
  
  const handleSubmit = (event) => {
    UserService.updateUser(userData.id_usuario, {
      cpf_cnpj: cpf,
      descricao: description,
      telefone_casa: homePhone,
      telefone_celular: cellPhone,
      cep,
      rua,
      numero,
      complemento,
      cidade,
      uf: estado,
      id_usuario: userData.id_usuario,
      experiencias,
      habilidades,
      turnos: shifts
    });

    onSubmit();
    event.preventDefault();
  };

  const handleCepChange = async (event) => {
    if (isValidCEP(cep)) {
      const {
        logradouro,
        localidade,
        uf,
      } = await AddressService.getAddressByCep(cep);
      setRua(logradouro);
      setEstado(uf);
      setCidade(localidade);
    }
  };

  const renderEstados = () => {
    return getStates().map((state, key) => (
      <option key={key} value={state.code}>
        {state.code}
      </option>
    ));
  };

  return (
    <Container onSubmit={handleSubmit}>
      <FormSection>
        <Subtitle>Quem sou eu?</Subtitle>
        <TextArea
          name="description"
          id="description"
          value={description}
          onChange={({ target }) => setDescription(target.value)}
        />
      </FormSection>
      <FormSection>
        <Subtitle className="">Quais são as suas habilidades? <span className="optional">*opcional</span></Subtitle>
        <Row>
          <GroupInput
            campo01={{label: "Titulo", value: 'nome'}}
            campo02={{label: "Instituição*", value: 'instituicao'}}
            habilidades={habilidades}
            onSubmit={onAddSkill}
            />
        </Row>
      </FormSection>
      <FormSection>
        <Subtitle className="">Quais são as suas experiências?</Subtitle>
        <Row>
        <GroupInput
            campo01={{label: "Local", value: 'local'}}
            campo02={{label: "Função", value: 'funcao'}}
            experiencias={experiencias}
            onSubmit={onAddExperience}
            />
        </Row>
      </FormSection>
      <FormSection >
        <Subtitle className="available-shifts-section">Qual sua disposição de horários?</Subtitle>
        <Row>
          {renderCheckboxes()}
        </Row>
      </FormSection>
      <FormSection>
        <Subtitle>Qual seu CPF?</Subtitle>
        <Input
          name="cpf"
          id="cpf"
          type="text"
          value={cpf}
          onChange={({ target }) => setCpf(target.value)}
          mask="999.999.999-99"
        />
      </FormSection>
      <FormSection>
        <Subtitle className="phone-number-section">Qual seu telefone?</Subtitle>
        <Row className="phone">
          <Input
            label="Residencial"
            name="home-phone"
            id="home-phone"
            type="text"
            value={homePhone}
            onChange={({ target }) => setHomePhone(target.value)}
            mask="(99)9999-9999"
          />
        </Row>
        <Row className="phone">
          <Input
            label="Celular"
            name="cell-phone"
            id="cell-phone"
            type="text"
            value={cellPhone}
            onChange={({ target }) => setCellPhone(target.value)}
            mask="(99)99999-9999"
          />
        </Row>
      </FormSection>
      <FormSection>
        <Subtitle>Qual seu endereço?</Subtitle>
        <Row>
          <Input
            label="CEP"
            name="cep"
            id="cep"
            type="text"
            value={cep}
            onChange={({ target }) => setCep(target.value)}
            onBlur={handleCepChange}
            mask="99999-999"
          />
        </Row>
        <Row>
          <Input
            label="Rua"
            name="rua"
            id="rua"
            type="text"
            value={rua}
            onChange={({ target }) => setRua(target.value)}
          />
          <Input
            label="Número"
            name="numero"
            id="numero"
            type="number"
            value={numero}
            onChange={({ target }) => setNumero(target.value)}
          />
        </Row>
        <Row>
          <Input
            label="Complemento"
            name="complemento"
            id="complemento"
            type="text"
            value={complemento}
            onChange={({ target }) => setComplemento(target.value)}
          />
        </Row>
        <Row>
          <Input
            label="Cidade"
            name="cidade"
            id="cidade"
            type="text"
            value={cidade}
            onChange={({ target }) => setCidade(target.value)}
          />
          <Select
            label="Estado"
            id="estado"
            value={estado}
            onChange={({ target }) => setEstado(target.value)}
          >
            {renderEstados()}
          </Select>
        </Row>
      </FormSection>
      <SubmitButtonContainer>
        <Button
          name="editar perfil"
          size="large"
          isUpperCase={true}
          type="submit"
        >
          Atualizar perfil
        </Button>
      </SubmitButtonContainer>
    </Container>
  );
}

export default EditProfile;
