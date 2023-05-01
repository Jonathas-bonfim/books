import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${(props) => props.theme["blue-10"]};
    color: ${(props) => props.theme["blue-600"]};
  }

  button,
  link {
  cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${(props) => props.theme.primary};
  }
  body, input, textarea, button {
    font-family: ${(props) => props.theme.secondary};
    font-weight: 300;
    font-size: 1rem;
  }

  .container-center {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;

    margin-inline: auto;
    max-width: 1220px;
    width: 100%;

    @media screen and (max-width: 1300px) {
      justify-content: center;
      padding-inline: 1rem;
      margin: 0 auto;

      img {
        width: 100%;
      }
    }
  }
`;
