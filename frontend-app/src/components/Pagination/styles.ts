import styled from "styled-components";

export const PaginationContainer = styled.ul`
  display: flex;
  gap: 2px;
  list-style-type: none;

  li {
    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 2rem;
    width: 2rem;
    background-color: ${(props) => props.theme.white};
    border-radius: 8px;
    border: 1px solid ${(props) => props.theme["blue-800"]};

    transition: all 0.2s;
    &.active {
      border: none;
      background-color: ${(props) => props.theme["blue-800"]};

      a {
        color: ${(props) => props.theme.white};
      }
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    inset: 0;
    text-align: center;

    text-decoration: none;
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme["blue-800"]};

    svg {
      fill: ${(props) => props.theme["blue-800"]};
    }
  }
`;
