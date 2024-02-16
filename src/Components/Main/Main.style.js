// import styled from 'styled-components';

// export const MainContainer = styled.main`
//     grid-area: main;
//     border: solid 1px #000;
//     height: 40rem;

// `;

import styled from "styled-components";

export const MainContainer = styled.div`
grid-area: main;
  display: flex;
  height: 100vh;
  overflow: hidden;
  border: solid 1px #000;

  > div {
    flex: 0 0 200px; /* Set a fixed width for the "vælg genre" section */
    overflow-y: auto; /* Allow "vælg genre" section to scroll if needed */
    padding: 20px;
    box-sizing: border-box;
    position: sticky;
    top: 0;
    background-color: light;
  }

  > div:last-child {
    flex: 1;
    overflow-y: auto; /* Allow the content to scroll if needed */
    padding: 20px;
    box-sizing: border-box;
  }
`;
