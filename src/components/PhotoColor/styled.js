import styled, { css } from 'styled-components';
import Colors from '../../functions/Colors';

const red = css`
  background: ${Colors('red')};
`;

const black = css`
  background: ${Colors('black')};
`;

const blue = css`
  background: ${Colors('blue')};
`;

const pink = css`
  background: ${Colors('pink')};
`;

const orange = css`
  background: ${Colors('orange')};
`;

const green = css`
  background: ${Colors('green')};
`;

const yellow = css`
  background: ${Colors('yellow')};
`;

const white = css`
  background: ${Colors('white')};
`;

const transparent = css`
  background: ${Colors('transparent')};
`;


export const Container = styled.div`
  
`;

export const Image = styled.img`
  width: 95px;
  height: 95px;
  border-radius: 50%;
  margin-left: 4.5px;
  margin-top: 4.2px;
`;

export const CircularBackground = styled.div`
  width: 105px;
  height: 105px;
  border-radius: 50%;
  margin-left: 10px;
  top: 10px;

  ${props => props.color === `red` && red};
  ${props => props.color === `blue` && blue};
  ${props => props.color === `pink` && pink};
  ${props => props.color === `orange` && orange};
  ${props => props.color === `green` && green};
  ${props => props.color === `yellow` && yellow};
  ${props => props.color === `white` && white};
  ${props => props.color === `black` && black};
  ${props => props.color === `transparent` && transparent};
`;