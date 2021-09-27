import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 4rem;

  form {
    display: flex;
    fieldset {
      display: inherit;
      width: 100%;
      border-top: none;
      border: 0.2rem solid var(--background);
      border-radius: 0.5rem;

      legend {
        position: relative;
        font-size: var(--font-regular);
        background-color: var(--tertiary);
        padding: 0.2rem 1rem;
        border-radius: 0.2rem;
      }
    }
  }

  input {
    flex: 1;
    height: 7rem;
    padding: 0 2.4rem;
    border: 0;
    font-size: var(--font-regular);
    color: var(--secondary);
    border: 0;
  }
`;
