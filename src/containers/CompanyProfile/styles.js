import styled from "styled-components";

import { colors } from "../../assets/config";

export const Container = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
`;

export const TopButtons = styled.div`
  display: flex;
  flex-direction: row;
  align-content: left;
  align-items: left;
  width: 100%;
  height: 40px;
  margin-bottom: 10px;
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
`;

export const HeadInformation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  margin-bottom: 8px;
`;

export const HeadColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  margin-left: 16px;

  h1 {
    font-size: 24px;
    font-weight: 700;
  }

  h5,
  h3 {
    font-size: 13px;
    font-weight: 500;
  }
`;

export const PendingField = styled.span`
  color: ${colors.mediumgray};
`;
