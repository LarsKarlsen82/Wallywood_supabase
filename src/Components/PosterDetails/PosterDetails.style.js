// PosterDetails.style.js
import styled from "styled-components";
import { Reset } from "../../Styled/Mixins.style";

export const PosterDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div:last-of-type {
    margin-left: 1rem;
  }

  figure {
    ${Reset}

    width: 300px;

    img {
      margin: 20px 0 0 60px; // top right bottom left
      width: 70%;
      height: 50%;
    }
  }

  p span {
    font-size: ${(props) => props.theme.fontsizes.xs};
    color: ${(props) => props.theme.colors.primary};
  }
`;

// Styled component for the confirmation message
export const ConfirmationMessage = styled.div`
  color: green; // Adjust the color as needed
  margin-top: 10px;
`;
