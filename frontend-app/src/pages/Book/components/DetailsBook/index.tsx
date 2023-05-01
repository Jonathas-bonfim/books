import { DetailsBookContainer } from "./styles";

interface DetailsBookProps {
  isbn: string,
  image: string,
  title: string,
  author: string,
  edition: string,
  curator: string,
  pages: number,
  totalRatings: number,
  goodReadingsRating: number | string | undefined,
}

export function DetailsBook({ isbn, image, title, author, edition, curator, pages, totalRatings, goodReadingsRating }: DetailsBookProps) {
  return (
    <DetailsBookContainer key={isbn}>
      <div className="container-image">
        <img src={image} alt="Foto do livro" />
      </div>
      <div className="reviews-container">
        <section className="specifications">
          <h3>Especificações</h3>
          <div className="information">
            <article className="title">
              <h4>Título</h4>
              <h4>Autor</h4>
              <h4>Edição:</h4>
              <h4>Curador(a):</h4>
              <h4>ISBN</h4>
              <h4>Páginas</h4>
            </article>
            <article className="content">
              <p>{title}</p>
              <p>{author}</p>
              <p>{edition}</p>
              <p>{curator}</p>
              <p>{isbn}</p>
              <p>{pages}</p>
            </article>
          </div>
        </section>
        <section className="specifications-review specifications">
          <h3 className="review">Avaliações</h3>
          <div className="information-review information">
            <article className="title-review title">
              <h4>Tag</h4>
              <h4 className="goodReads">GoodReads</h4>
            </article>
            <article className="content-review content">
              <p>{totalRatings}</p>
              <p>{goodReadingsRating}</p>
            </article>
          </div>
        </section>
      </div>
    </DetailsBookContainer>
  )
}