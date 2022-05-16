import React from 'react';

import { Container, Image } from './styled';
import {  } from '../../styles/global';

import JobImage from '../../assets/images/JobQuest.png'

function JobQuestLogo() {
  return(
    <Container>
      <Image src={JobImage} />
    </Container>
  );
}

export default JobQuestLogo;