import React from 'react';

import { Container } from './styled';
import {  } from '../../styles/global';

function InputForm({change, icon, type, setType}) {
  function changeTypePassword() {
    if(type === 'password') setType('');
    if(type === '') setType('password');
  }
  
  return(
    <Container>
      <input onChange={event => change(event.target.value)} type={type} />      
      <span onClick={() => changeTypePassword() } > {icon} </span>
    </Container>
  );
}

export default InputForm;