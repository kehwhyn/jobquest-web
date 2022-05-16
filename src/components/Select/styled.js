import styled from 'styled-components';
import { typography, spacing, colors } from "../../assets/config";


export const StyledSelect = styled.select`
  border-radius: 5px;
  height: 42px;
  width: 100%;
  margin: ${spacing["x-small"]} auto;
  outline: none;
  font-size: ${typography.small};
  border: solid  ${colors.lightgray} 1px;
`;



export const Label = styled.span`
  font-family: Roboto;
  margin-bottom: ${spacing["x-small"]};
  font-size: ${typography.medium};
`;