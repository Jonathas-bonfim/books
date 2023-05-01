import styled from "styled-components";

export const LoadingContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;

  position: absolute;
  z-index: 5;
  inset: 0;
  /* background: white; */

  background: rgba(255, 255, 255, 0.55);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border: 1px solid rgba(255, 255, 255, 0.18);

  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 2.5rem;
    line-height: 150%;
    text-align: center;
    color: ${(props) => props.theme["blue-200"]};
  }

  p {
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 150%;
    text-align: center;
    color: ${(props) => props.theme["blue-100"]};
  }

  .loader {
    width: 3.75rem;
    aspect-ratio: 2;
    --_g: no-repeat radial-gradient(circle closest-side, #f9c57c 90%, #0000);
    background: var(--_g) 0% 50%, var(--_g) 50% 50%, var(--_g) 100% 50%;
    background-size: calc(100% / 3) 50%;
    animation: d3 1s infinite linear;
  }
  @keyframes d3 {
    20% {
      background-position: 0% 0%, 50% 50%, 100% 50%;
    }
    40% {
      background-position: 0% 100%, 50% 0%, 100% 50%;
    }
    60% {
      background-position: 0% 50%, 50% 100%, 100% 0%;
    }
    80% {
      background-position: 0% 50%, 50% 50%, 100% 100%;
    }
  }
`;
