import styled from 'styled-components';
import { Reset } from "../../Styled/Mixins.style"

export const RandomPostersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;  // Adjust the gap as needed

  .poster-item {
    display: flex;
    max-width: 100%;
  }

  .poster-image {
    width: 13rem;
    height: 50%;
    object-fit: cover;
  }
`;
