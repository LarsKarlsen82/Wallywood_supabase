import styled from 'styled-components';

import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

export const FooterContainer = styled.footer`
  grid-area: footer;

  position: relative;
  bottom: 0;
  top: 190px;
  left: 0;
  width: 100%;
  height: 2rem;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background-color: white;
  padding: 20px;
  border-top: 2px solid rgb(92, 30, 5);

  div {
    text-align: left;
    max-width: 200px;
    margin-bottom: 20px;

    h3 {
      background-image: linear-gradient(315deg, #de4256 0%, #b78e51 74%);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      font-size: 1.2em;
      margin-bottom: 10px;
    }

    p {
      color: ${props => props.theme.Dark};
      font-size: 1em;
      margin: 0;
    }



    .social-icons {
      display: grid;
      grid-template-columns: auto auto auto auto;
      gap: 10px;

      .social-icon {
        color: rgba(0, 0, 0, 0.5);

        &.facebook {
          height: 40px;
          width: auto;
        }

        &.linkedin {
          height: 40px;
          width: auto;
        }

        &.instagram {
          height: 40px;
          width: auto;
          // Add specific styles for Instagram icon
        }

        &.twitter {
          height: 40px;
          width: auto;
          // Add specific styles for Twitter icon
        }
      }
    }
  }

  @media (max-width: 768px) {
    .image-section .image-row .image-column .image-module {
      width: 100%;
      padding: 15px;
      margin-top: 160vh;
    }

    .image-module h2 {
      text-align: center;
      padding: 0 0 1em 0;
    }

    .image-module p {
      text-align: left;
      padding: 1em 1em 0 1em;
      font-family: 'Inter';
    }
  }
`;