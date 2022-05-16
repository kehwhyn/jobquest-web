import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 190vh;

  background: rgba(0, 0, 0, 0.7);

  display: ${props => props.display};
  position: fixed;
`;

export const ContentModal = styled.div`
  width: 100vw;
  height: 95vh;
  margin-top: 10vh;
  
  background: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 12px 12px 0px 0px;

  button {
    font-size: 36px;

    position: fixed;
    top: 10vh;
    left: 10vw;

    &:hover {
      text-shadow: 0px 0px 12px #FF0000;
    }
  }
`;

export const ButtonContainer = styled.div`
  width: 100vw;
  height: 70vh;

  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  align-content: center;
  justify-content: space-evenly;

  strong {
    color: #FF0000;
    
    font-weight: 400;
    font-size: 24px;

    cursor: pointer;

    &:hover{
      text-shadow: 0px 0px 12px #FF0000;
      color: #fff;

    }
  }
  
  span {
    color: #000;
    
    font-weight: 400;
    font-size: 24px;

    cursor: pointer;

    &:hover{
      text-shadow: 0px 0px 12px #000;
      color: #fff;

    }
  }
`;
