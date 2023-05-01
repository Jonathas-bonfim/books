import styled from "styled-components";

export const BannerContainer = styled.nav`
  position: relative;
  margin-bottom: 5rem;

  img {
    height: 8rem;
    width: 100%;
    object-fit: cover;
    filter: brightness(50%);
    opacity: 1;
    aspect-ratio: 4395/2933;
  }

  .text-banner {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 1220px;
    padding-inline: 0.5rem;
    width: 100%;
    margin: 0 auto;

    h1 {
      font-style: normal;
      font-weight: 700;
      font-size: 1.25rem;
      line-height: 1.5rem;
      color: ${(props) => props.theme.white};

      margin-bottom: 0.5rem;
    }

    p {
      max-width: 38rem;
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 1.06rem;
      text-align: justify;
      color: ${(props) => props.theme.white};
    }
  }

  @media screen and (max-width: 480px) {
    .text-banner {
      p {
        opacity: 0;
        overflow: hidden;
        pointer-events: none;
        max-height: 0px;
      }
    }
  }
`;
