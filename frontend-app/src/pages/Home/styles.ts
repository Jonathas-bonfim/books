import styled from "styled-components";

export const HomeContainer = styled.section`
  display: block;
  height: 100%;
`;

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;

  .container-books {
    justify-content: flex-start;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
    gap: 2rem;

    margin-bottom: 5rem;

    .pagination {
      display: flex;
      width: 100%;
      justify-content: flex-end;
    }
  }

  @media screen and (max-width: 1300px) {
    .container-books {
      justify-content: center;
    }
  }
  @media screen and (max-width: 1024px) {
    .container-books {
      .pagination {
        justify-content: flex-start;
      }
    }
  }
`;
