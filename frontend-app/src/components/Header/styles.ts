import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 7rem;
  background-color: ${(props) => props.theme.white};
  box-shadow: 0px 9px 9px -14px ${(props) => props.theme["blue-600"]};

  .top-header {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 2rem;
    background-color: ${(props) => props.theme["blue-800"]};

    p {
      font-family: ${(props) => props.theme.primary};
      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
      line-height: 1.25rem;
      color: ${(props) => props.theme.white};
    }
  }

  @media screen and (max-width: 670px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    gap: 0.75rem;
    width: 100%;
    height: 10rem;
  }

  @media screen and (max-width: 480px) {
    height: 10rem;
    .top-header {
      opacity: 0;
      overflow: hidden;
      pointer-events: none;
      max-height: 0px;
    }
  }
`;

export const MainContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  height: 5rem;

  a {
    background-color: gray;
    font-size: 0;

    img {
      height: 4rem;
      width: auto;
      object-fit: cover;
    }
  }

  article {
    position: relative;
    input {
      background-color: transparent;
      color: ${(props) => props.theme.dark};
      border: 1px solid ${(props) => props.theme.orange};
      outline: none;
      border-radius: 8px;
      height: 2.62rem;
      width: 22rem;
      padding-inline: 1rem 2rem;
    }

    button {
      position: absolute;
      right: 6px;
      top: 50%;
      transform: translateY(-40%);
      font-size: 1.5rem;
      z-index: 1;
      border: none;
      background: transparent;

      svg {
        fill: ${(props) => props.theme["blue-200"]};
      }
    }
  }

  @media screen and (max-width: 670px) {
    gap: 0.2rem;
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    gap: 1rem;

    article {
      width: 100%;
      input {
        width: 100%;
      }
    }
  }
`;
