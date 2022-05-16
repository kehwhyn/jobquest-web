import styled from 'styled-components';

import Colors from '../../functions/Colors';
import {colors} from '../../assets/config';

export const Container = styled.div`
  display: ${props => `${props.display}`}; 
  overflow: auto;
  height: calc(100vh - 260px);
  width: 100%;
`;

export const PendingField = styled.span`
  color: ${colors.mediumgray};
`;

export const About = styled.div`
  display: ${props => `${props.display}`}; 
  
  button {
    margin-top: 20px;
    margin-left: 15%;
    background: ${Colors('yellow')};
    color: #000;
    font-weight: bold;
  }

  h1 {
    font-weight: 400;
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 5px;
  }

  h4 {
    font-weight: 300;
    margin-left: 10px;
    margin-right: 15px;
    text-align: justify;
    margin-bottom: 2px;
  }
`;

export const Edit = styled.div`
  display: ${props => `${props.display}`}; 
  
`;
