import styled from 'styled-components';

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: calc(100vw - 40px);

  .input {
    margin: 5px 5px 0;
  }  

  .labelI {
    display: block ruby;
    margin-left: 5px;
  }

  .labelF {
    display: block ruby;
    margin-left: 5px;
  }

  .btn-add {
    border: 0;
    border-radius: 60px;
    background: #FFE600;
    color: #000;
    height: 15%;
    width: 12%;
    font-size: 16px;
    text-transform: uppercase;
    cursor: pointer;
    margin-left: 10px
  }
  
  .hTHRVb {
    margin: 5px auto;
  }

`;

export const InputGroup = styled.div`
  .input {
    margin:50px
  }  
`;
