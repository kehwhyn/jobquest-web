import styled from 'styled-components';

import Colors from '../../functions/Colors';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  width: 100%;
`;

export const ButtonContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: center;  
  
  p {
    text-transform: uppercase;
    font-size: 10px;
    font-weight: bold;
    ${props => `color: ${Colors(props.color)}`};
  }
`;


export const Button = styled.button`
  width: 100%;
  border-left: 0;
  border-right: 0;
  border-top: 0;
  border-bottom: solid 3px ${props => `${Colors(props.color)}`};
  height: 35px;
  background: rgba(0, 0, 0, 0);
`;