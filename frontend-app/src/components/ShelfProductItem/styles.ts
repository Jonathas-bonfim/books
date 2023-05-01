import styled from "styled-components";

export const ProductItemContainer = styled.article`
  width: 17.56rem;
  height: 30.75rem;
  margin-bottom: 1rem;

  button {
    border: none;
    background: transparent;
    height: 100%;
    width: 100%;
  }

  div {
    max-width: 17.56rem;
    max-height: 26.75rem;
    width: 100%;
    height: 100%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: fill;

      transition: all 1s;
    }
  }

  section {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 4rem;
    gap: 0.225rem;

    background-color: ${(props) => props.theme.white};
    padding-inline: 1rem;
    h4 {
      font-style: normal;
      font-weight: 600;
      font-size: 1.125rem;
      line-height: 140%;
      text-align: center;
      color: ${(props) => props.theme["blue-900"]};

      max-width: 100%;
      white-space: nowrap;
      overflow: hidden;
    }

    p {
      font-style: normal;
      font-weight: 400;
      font-size: 0.875rem;
      line-height: 125%;
      text-align: center;
      color: ${(props) => props.theme["blue-200"]};
    }

    .divider {
      width: 100%;
      height: 1px;
      background-color: ${(props) => props.theme["blue-200"]};
    }
  }

  &:hover {
    img {
      transform: scale(1.2);
      filter: brightness(1.1);
      transition: all 1s;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 14.92rem;
    height: 26.13rem;

    div {
      max-width: 17.56rem;
      max-height: 23.75rem;
    }
  }

  @media screen and (max-width: 540px) {
    width: 17.56rem;
    height: 30.75rem;

    div {
      max-width: 17.56rem;
      max-height: 26.75rem;
    }
  }
`;
