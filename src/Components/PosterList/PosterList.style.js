// PosterList.style.js
import styled from "styled-components";
import { Reset } from '../../Styled/Mixins.style';

export const PosterListContainer = styled.div`
  > div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;  // Updated to create a 1fr 1fr 1fr grid
    gap: 2rem; /* Adjust the gap between items as needed */

    div {
      padding-bottom: 2rem;
      text-align: center;
      figure {
        ${Reset}
        
        max-width: 14rem;
        margin: 0 auto; 
        margin-left: 70px;

        img {
          width: 100%;
          height: auto;
          border: solid 1px ${(props) => props.theme.colors.senary};
        }
      }

      a {
        text-decoration: none;
        color: ${(props) => props.theme.colors.tertiary};
        font-size: 1rem;
        font-weight: bold;
      }

      p span {
        font-size: ${(props) => props.theme.fontsizes.xs};
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }
`;
