import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  padding: 1.2rem 1rem;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 0;

  .available-shifts-section + & {
    padding-right: 14px;
  }

  .phone-number-section ~ &.phone > span  {
    width: 40%
  }

  h2 ~ & > span,
  h2 ~ & > input   {
    margin-right: 10px;
    margin-bottom: 0px;
  }
`;

export const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 1rem;

  & > button {
    width: initial;
    padding: 25px 20px;
    border-radius: 12
  }
`;

export const Subtitle = styled.h2`
  font-weight: 500;

  .optional {
    font-size: 15px;
  }
`;

export const FormSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`;