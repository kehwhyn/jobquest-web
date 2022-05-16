import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/auth';

import { Container, ContentModal, ButtonContainer } from './styled';

function MoreMenu({display, changeDisplay}) {
  const history = useHistory();
  const { signOut } = useAuth();

  function SignOut() {
    history.push('/');
    signOut();
  }
  
  return(
    <Container display={display} >
      <ContentModal>
        <button onClick={changeDisplay} >&times;</button>
        
        <ButtonContainer>
          <strong onClick={ SignOut } > Sair </strong>
          <span>Outra Ação</span>
        </ButtonContainer>
      </ContentModal>
    </Container>
  );
}

export default MoreMenu;