import styled from "styled-components";

export const ImportanceReadingContainer = styled.article`
  background-color: ${(props) => props.theme.white};

  .container-center {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    gap: 2rem;
    padding-block: 3rem;
  }
  img {
    max-width: 37.12rem;
    height: auto;
    aspect-ratio: 188/125;
  }

  section {
    h5 {
      font-style: normal;
      font-weight: 700;
      font-size: 2rem;
      line-height: 2.5rem;
      color: ${(props) => props.theme["blue-800"]};
    }

    p {
      font-style: normal;
      font-weight: 500;
      font-size: 0.875rem;
      line-height: 1.2rem;
      text-align: justify;
      color: ${(props) => props.theme["blue-200"]};
    }
  }

  @media screen and (max-width: 1024px) {
    .container-center {
      flex-direction: column;
    }

    section {
      h5 {
        font-size: 1.5rem;
        text-align: center;
      }
    }
  }
`;
