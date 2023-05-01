import styled from "styled-components";

export const ButtonNavigation = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.687rem;

  font-style: normal;
  font-weight: 500;
  font-size: 1rem;
  line-height: 150%;
  text-decoration: none;
  border: none;
  background: transparent;
  color: ${(props) => props.theme["blue-900"]};

  svg {
    height: 1rem;
    width: 1rem;
    fill: ${(props) => props.theme["blue-900"]};
  }

  transition: all 0.2s;
  &:hover {
    filter: brightness(1.2);
  }
`;
