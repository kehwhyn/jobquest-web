import styled from "styled-components";
import { spacing, typography, colors } from "../../assets/config";
import * as inputStyles from "../../components/Input/styles";

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
  & > ${inputStyles.Input} {
    box-sizing: border-box;
  }
  & > ${inputStyles.IconWrapper} {
    align-self: flex-start;
    margin-left: ${spacing["medium"]};
  }
`;
export const Title = styled.h1`
  margin-left: 20px;
  padding: 1rem 0.5rem;
  align-self: flex-start;
`;
export const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 5rem;
`;

export const NoData = styled.h3`
  color: ${colors.darkgray};
  font-size: ${typography.large};
  padding: 6rem 1rem;
`;
