import { useParams } from "react-router-dom";
import { ShelfProductItem } from "../../components/ShelfProductItem";
import { ButtonBackNavigation } from "../../components/ButtonBackNavigation";
import { ProductContainer, SuggestionContainer } from "./styles";
import { useContext } from "react";
import { BooksContext } from "../../Hooks/context/useBook";
import { DetailsBook } from "./components/DetailsBook";

export function Book() {
  const { allBooksContext, updateBookContext, bookDataContext } = useContext(BooksContext)
  const { bookId } = useParams()
  const book = bookDataContext.find(book => book.objectId === String(bookId))
  const bookRandom = allBooksContext.sort(() => Math.random() - 0.5).slice(0, 3)
  if (!book) return

  if (!book.goodReadingsRating) {
    updateBookContext(book.isbn);
  }

  return (
    <ProductContainer>
      <div className="container-center">
        <nav className="back">
          <ButtonBackNavigation />
        </nav>
        <DetailsBook
          isbn={book.isbn}
          image={book.cover.url}
          title={book.name}
          author={book.author}
          edition={book.edition}
          curator={book.curator}
          pages={book.pages}
          totalRatings={book.totalRatings}
          goodReadingsRating={book.goodReadingsRating}
        />
      </div>
      <SuggestionContainer>
        <div className="container-center">
          <h3>Sugestões de leitura</h3>
          <section>
            {
              bookRandom.map(book => {
                return (
                  <ShelfProductItem
                    key={book.isbn}
                    objectId={book.objectId}
                    author={book.author}
                    name={book.name}
                    url={book.cover.url}
                  />
                )
              })
            }
          </section>
        </div>
      </SuggestionContainer>
    </ProductContainer>
  )
}