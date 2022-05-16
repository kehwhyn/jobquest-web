import styled from 'styled-components';

import {colors} from "../../assets/config";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${colors.primary};
  height: 100vh;
`;

export const ContainerForgot = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 260px;
  margin-top: 5px;
`;

export const ContainerLabel = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 260px;
  margin-bottom: 1px;
  font-size:16px;
  margin-top: 10px;
`;

export const BackButtonDiv = styled.div`
  position: absolute;
  top: 1px;
  left: 1px;
  margin-bottom: 1px;
  padding-left: 3px;
`;

export const TransparentButton = styled.button`
  background: rgba(0, 0, 0, 0);
  border: 0;
  height: 20px;
  cursor: pointer;
`;

export const Logo = styled.img`
  background-position: center;
  width: 280px;
`;