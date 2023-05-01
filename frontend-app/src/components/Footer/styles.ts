import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: ${(props) => props.theme["blue-800"]};
  height: 5rem;

  .container-center {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;

    height: 100%;
  }

  .links {
    display: flex;
    gap: 1rem;
    a {
      text-decoration: none;
      color: ${(props) => props.theme.white};

      transition: all 0.2s;
      &:hover {
        color: ${(props) => props.theme.orange};
      }
    }
  }
  .copyright {
    p {
      text-decoration: none;
      color: ${(props) => props.theme.white};
    }
  }
  .medias-sociais {
    display: flex;
    gap: 1rem;

    a {
      svg {
        width: 1.5rem;
        height: 1.5rem;
        fill: ${(props) => props.theme.white};
      }

      transition: all 0.2s;
      &:hover {
        svg {
          fill: ${(props) => props.theme.orange};
        }
      }
    }
  }

  @media screen and (max-width: 480px) {
    .links,
    .medias-sociais {
      max-height: 0;
      max-width: 0;
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }
  }
`;
