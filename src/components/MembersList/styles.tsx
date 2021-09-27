import styled from 'styled-components';

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, minmax(45rem, auto));
  gap: 2rem;
  margin-top: 4rem;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: center;
  padding: 0;

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
      filter: opacity(0.87);
    }

    img {
      width: 6rem;
      height: 6rem;
      border-radius: 100%;
    }

    button {
      width: 18rem;
      background-color: var(--primary);
      border: 0px;
      height: 6.4rem;
      border-radius: 0 0.5rem 0.5rem 0;
      color: var(--background);
      font-weight: bold;
      transition: background-color 0.2s;
    }
  }
`;
