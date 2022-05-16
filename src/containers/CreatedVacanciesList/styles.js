import styled from "styled-components";
import { spacing } from "../../assets/config";
import * as inputStyles from "../../components/Input/styles";


export const Title = styled.h1`
  text-align: center;
  padding: 1rem 0;
`;

export const ListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-bottom: 5rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 2rem 0;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > ${inputStyles.Input} {
    box-sizing: border-box;
  }
  & > ${inputStyles.IconWrapper} {
    align-self: flex-start;
    margin-left: ${spacing["medium"]};
  }
`;