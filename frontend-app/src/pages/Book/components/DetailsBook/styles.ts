import styled from "styled-components";

export const DetailsBookContainer = styled.aside`
  display: flex;
  justify-content: space-evenly;

  width: 100%;
  margin-top: 5rem;
  margin-bottom: 5rem;
  .container-image {
    display: flex;
    align-items: center;
    justify-content: center;

    max-width: 21.5rem;
    max-height: 34rem;

    background-color: ${(props) => props.theme.white};
    padding: 2rem;
    border-radius: 4px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
      rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
      rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    img {
      width: 17.5;
      height: 30rem;
    }
  }

  .reviews-container {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    .specifications {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;

      h3 {
        font-style: normal;
        font-weight: 500;
        font-size: 1.5rem;
        line-height: 150%;
        text-transform: uppercase;
        color: ${(props) => props.theme["blue-100"]};

        &.review {
          color: ${(props) => props.theme.orange};
        }
      }

      .information {
        display: flex;
        gap: 1rem;

        .title,
        .content {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .title {
          width: 8rem;
        }
        .content {
          width: 15rem;
        }

        h4 {
          font-style: normal;
          font-weight: 600;
          font-size: 1rem;
          line-height: 170%;
          text-transform: uppercase;

          &.goodReads {
            color: #382110;
          }
        }

        p {
          font-style: normal;
          font-weight: 300;
          font-size: 1rem;
          line-height: 170%;
          text-transform: uppercase;

          max-width: 100%;
          white-space: nowrap;
          overflow: hidden;
        }
      }
    }
  }
  @media screen and (max-width: 1024px) {
    align-items: center;
    flex-direction: column;
    gap: 3rem;
  }

  @media screen and (max-width: 460px) {
    .reviews-container {
      gap: 0.5rem;
      max-width: 100%;
      .specifications {
        .title {
          width: 6rem;

          h4 {
            font-size: 0.75rem;
          }
        }

        .content {
          width: 100%;

          p {
            font-size: 0.75rem;
          }
        }
      }
    }
  }
`;
