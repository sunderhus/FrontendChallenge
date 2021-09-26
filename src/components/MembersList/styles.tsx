import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  li {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 32px;
      height: 32px;
      border-radius: 100%;
    }
  }
`;
