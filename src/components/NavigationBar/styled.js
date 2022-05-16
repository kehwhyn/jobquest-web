import styled from "styled-components";
import colors from "../../assets/colors";

export const Container = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: space-around;
  position: relative;
  width: 100%;
  background: ${colors.white};
  padding-bottom: 1rem;

  position: fixed;
  bottom: 0px;

  button {
    border: 0;
    background: rgba(0, 0, 0, 0);
  }
`;

export const ButtonDiv = styled.div`
  width: 80px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;
  margin-top: 20px;

  h1 {
    font-weight: 200;
    color: ${(props) => `${props.color}`};
  }

  h5 {
    font-weight: 400;
    color: ${(props) => `${props.color}`};
  }
`;
