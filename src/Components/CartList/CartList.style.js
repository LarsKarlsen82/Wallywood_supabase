import styled from 'styled-components';

export const CartListContainer = styled.div`
  & > div {
    &:first-child,
    &:last-child {
      font-weight: bold;
      font-size: 1.2rem;
    }

    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr;
    grid-row-gap: 0;
    padding: 0.5rem 0;
    border-bottom: solid 1px #ccc;

    div {
      text-align: right;

      &:first-child {
        text-align: left;
      }
    }
  }

  @media (max-width: 768px) {
    & > div {
      display: grid;
      grid-template-columns: 1fr;
      grid-row-gap: 0;
      padding: 0.5rem 0;
      border-bottom: solid 1px #ccc;

      div {
        text-align: left;

        &:first-child {
          text-align: left;
        }
      }
    }
  }
`;
