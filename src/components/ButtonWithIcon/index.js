import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from './styled';
import {  } from '../../styles/global';

function ButtonWithIcon({name, route, execFunction, marginTop, marginLeft, marginRight}) {
  const history = useHistory();
  
  function setRoute() { history.push(route); }
  function choiceFunction() {
    if(route) return setRoute();
    if(execFunction) return execFunction();
  }

  return(
    <Container 
      onClick={() => choiceFunction() }  
    >
      {name}
    </Container>
  );
}

export default ButtonWithIcon;  