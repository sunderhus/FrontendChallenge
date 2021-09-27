import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-top: 4rem;

  img {
    height: 32rem;
    border-radius: 0.4rem;
    animation: smoothFadeIn 0.4s linear forwards;
  }

  .profile-details {
    display: grid;
    gap: 2rem;
    padding: 2rem;
    align-items: center;

    &-item {
      font-size: var(--font-regular);
      display: grid;
      gap: 0.32rem;

      &--label {
        font-weight: bold;
        color: var(--secondary);
      }
    }
  }
`;
