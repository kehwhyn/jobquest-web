import styled from "styled-components";
import { spacing } from "../../assets/config";
import * as buttonStyles from "../../components/Button/styles";
import * as inputStyles from "../../components/Input/styles";

export const Container = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  overflow: hidden;
  margin-bottom: 5rem;

  ${buttonStyles.Button} {
    margin-top: ${spacing["x-small"]};
    align-self: center;
    text-transform: uppercase;
  }
`;

export const Label = inputStyles.Label;

export const TopButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-content: left;
  align-items: left;
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
`;

export const TopTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: flext-start;

  h2 {
    font-size: 11px;
    font-family: Roboto;
    opacity: 0.4;
  }
`;

export const CompanyLogoDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  margin-top: 4%;
`;

export const CompanyLogo = styled.img`
  width: 115px;
  height: 115px;
  border-radius: 50%;
`;

export const JobForm = styled.form`
  display: flex;
  flex-direction: column;
  align-content: flex-start;
  align-items: flex-start;
  margin-top: 4%;
  ${inputStyles.Label} {
    margin-bottom: 0;
  }

  h1 {
    font-family: Roboto;
    font-size: 15px;
  }
`;

export const CheckboxWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;

  @media screen and (min-width: 425px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const TextArea = styled.textarea.attrs({
  rows: 4,
})`
  border-radius: 5px;
  width: calc(100% - 8px);
  padding: 8px;
  margin: 8px auto;
  border: solid #ccc 1px;
  outline: none;
  font-size: 14px;
  resize: vertical;
`;
