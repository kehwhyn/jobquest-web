import styled from "styled-components";
import { colors } from "../../assets/config";

export const Card = styled.div`
  :not(last-child) {
    margin-bottom: 8px;
  }

  h4 {
    font-weight: 300;
  }

  h5 {
    font-weight: 300;
    margin-left: 10px;
    margin-right: 15px;
    text-align: justify;
  }
`;

export const Local = styled.h5`
  margin-top: 2px;
  font-size: 12px;
`;

export const Period = styled.h5`
  margin-top: 2px;
  color: ${colors.mediumgray};
`;
