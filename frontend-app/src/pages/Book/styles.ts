import styled from "styled-components";

export const ProductContainer = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  height: 100%;

  .back {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 3rem;
  }
`;

export const SuggestionContainer = styled.nav`
  display: flex;
  background-color: ${(props) => props.theme["white-200"]};
  .container-center {
    display: flex;
    flex-direction: column;
    margin-block: 5rem 4rem;

    h3 {
      font-style: normal;
      font-weight: 700;
      font-size: 2rem;
      line-height: 2.375rem;
      margin-bottom: 2.375rem;
    }
  }
  section {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
  }

  @media screen and (max-width: 790px) {
    section {
      flex-wrap: wrap;

      article {
        height: 32rem;
      }
    }
  }
`;
