import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styled';

import { BiArrowBack } from 'react-icons/bi'

function BackButton(props) {
  const history = useHistory();
  
  return(
    <Container>
      <BiArrowBack onClick={() => history.push(props.route)} />
    </Container>
  );
}

export default BackButton;