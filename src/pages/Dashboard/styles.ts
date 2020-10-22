import styled from 'styled-components';

import { shade } from 'polished';

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
`;

export const Form = styled.form`
  margin-top: 90px;
  max-width: 700px;
  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 210px;
    height: 70px;
    padding: 0 24px;
    border: 0;
    border-radius: 0 5px 5px 0;
    color: white;
    font-weight: bold;
    background-color: #04d361;
    &:hover {
      background-color: ${shade(0.2, '#04d361')};
    }
  }
`;

export const List = styled.div``;
