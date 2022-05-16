import styled, { keyframes, css } from "styled-components";
import colors from "../../assets/colors";

const anim = keyframes`
    to { 
        opacity: .2;
        transform: scale(.75)
    }
`;

const loaderModifiers = {
  medium: () => css`
    grid-template-columns: repeat(3, 50px);
    & > span {
      height: 25px;
      width: 25px;
    }
  `,
  small: () => css`
    grid-template-columns: repeat(3, 30px);
    & > span {
      height: 20px;
      width: 20px;
    }
  `,
};

export const Wrapper = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: repeat(3, 50px);

  ${({ size }) => !!size && loaderModifiers[size]}
`;

export const Circle = styled.span`
  background-color: ${({ color }) => colors.button.background[color]};
  margin: 0.5rem;
  border-radius: 50%;
  animation: ${anim} 0.75s linear infinite;
  animation-delay: ${({ delay }) => delay}s;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
`;
