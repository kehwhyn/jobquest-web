import { getStates, isValidCEP } from "@brazilian-utils/brazilian-utils";
import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import Select from "../../components/Select";
import TextArea from "../../components/TextArea";
import { AddressService } from "../../services/AddressService";
import CompanyService from "../../services/CompanyService";
import {} from "../../styles/global";
import {
  Container,
  FormSection,
  Row,
  SubmitButtonContainer,
  Subtitle,
} from "./styled";

function EditCompanyProfile({ companyData, onSubmit }) {
  const [descricao, setDescription] = useState(companyData?.descricao);
  const [homePhone, setHomePhone] = useState(companyData?.telefone_casa);
  const [cellPhone, setCellPhone] = useState(companyData?.telefone_celular);
  const [cnpj, setCnpj] = useState(companyData?.cpf_cnpj);
  const [cep, setCep] = useState(companyData?.endereco?.cep);
  const [rua, setRua] = useState(companyData?.endereco?.rua);
  const [numero, setNumero] = useState(companyData?.endereco?.numero);
  const [complemento, setComplemento] = useState(
    companyData?.endereco?.complemento
  );
  const [cidade, setCidade] = useState(companyData?.endereco?.cidade);
  const [estado, setEstado] = useState(companyData?.endereco?.estado);
  const [site, setSite] = useState(companyData?.url_site);
  const [razaoSocial, setRazaoSocial] = useState(companyData?.razaoSocial);

  useEffect(() => {
    setDescription(companyData?.descricao);
    setHomePhone(companyData?.contato?.telefone_casa);
    setCellPhone(companyData?.contato?.telefone_celular);
    setCnpj(companyData?.cpf_cnpj);
    setCep(companyData?.endereco?.cep);
    setRua(companyData?.endereco?.rua);
    setNumero(companyData?.endereco?.numero);
    setComplemento(companyData?.endereco?.complemento);
    setCidade(companyData?.endereco?.cidade);
    setEstado(companyData?.endereco?.estado);
    setSite(companyData?.url_site);
    setRazaoSocial(companyData?.razao_social);
  }, [companyData]);

  const handleSubmit = (event) => {
    CompanyService.updateCompany(companyData.id_empresa, {
      cpf_cnpj: cnpj,
      descricao,
      razao_social: razaoSocial,
      url_site: site,
      id_usuario: companyData.id_usuario,
      contato: {
        telefone_casa: homePhone,
        telefone_celular: cellPhone,
      },
      endereco: {
        cep,
        rua,
        numero,
        complemento,
        cidade,
        uf: estado,
      },
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
        <Subtitle>Quem somos?</Subtitle>
        <TextArea
          name="description"
          id="description"
          value={descricao}
          onChange={({ target }) => setDescription(target.value)}
        />
      </FormSection>
      <FormSection>
        <Subtitle>Qual seu CNPJ?</Subtitle>
        <Input
          name="cnpj"
          id="cnpj"
          type="text"
          value={cnpj}
          onChange={({ target }) => setCnpj(target.value)}
          mask="99.999.999/9999-99"
        />
      </FormSection>
      <FormSection>
        <Subtitle>Qual sua razão social?</Subtitle>
        <Input
          name="razao-social"
          id="razao-social"
          type="text"
          value={razaoSocial}
          onChange={({ target }) => setRazaoSocial(target.value)}
        />
      </FormSection>
      <FormSection>
        <Subtitle className="phone-number-section">Qual seu telefone?</Subtitle>
        <Row className="phone">
          <Input
            label="Telefone"
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
      <FormSection>
        <Subtitle>Qual o site de sua empresa?</Subtitle>
        <Input
          name="site"
          id="site"
          type="text"
          value={site}
          onChange={({ target }) => setSite(target.value)}
        />
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

export default EditCompanyProfile;
