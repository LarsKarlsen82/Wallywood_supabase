import styled from 'styled-components';

export const AboutPageContainer = styled.div`
  max-width: auto;
  height: 500px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  overflow: hidden;

  .ContentWrapper {
    display: flex;
    flex-wrap: wrap;
  }

  .Text {
    flex: 1;
    margin-right: 20px;

    p {
      margin-bottom: 20px;
    }
  }

  .Image {
    flex: 1;

    img {
      max-width: 100%;
      width: 60%;
      height: auto;
      border-radius: 8px;  // Add styling as needed
    }
  }
`;
