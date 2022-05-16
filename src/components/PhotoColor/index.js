import React from 'react';

import { Container, CircularBackground, Image } from './styled';
import {  } from '../../styles/global';

import JobImage from '../../assets/images/JobQuest.png';

function PhotoColor(props) {
  return(
    <Container>
      <CircularBackground color={props.color} >
        <Image src={JobImage} position={props.position} />
      </CircularBackground>
    </Container>
  );
}

export default PhotoColor;