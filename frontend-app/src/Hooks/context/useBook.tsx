import { createContext, ReactNode, useEffect, useState } from "react";
import { apiGoodReads, apiTag } from "../../services/api";
import { BooksMock } from "../../util/data";
import { newDateFromDateString } from "../../util/format";

export interface BookProps {
  objectId: string,
  pages: number,
  createdAt: string,
  updatedAt: string,
  author: string,
  name: string,
  isbn: string,
  curator: string,
  cover: {
    url: string,
    __type: string,
    name: string,
  },
  edition: string,
  blocked: boolean,
  active?: boolean
  numRatings: number,
  totalRatings: number
  goodReadingsRating?: number | string
}

type BookDataContextProps = {
  bookDataContext: BookProps[];
  allBooksContext: BookProps[];
  searchBook(value: string): void;
  updateBookContext(value: string): void;
  loading: boolean;
  setLoading: (isLoading: boolean) => void;
}

type BookProviderProps = {
  children: ReactNode;
}

export const BooksContext = createContext({} as BookDataContextProps);

export function BookProvider({ children }: BookProviderProps) {
  const [bookDataContext, setBookDataContext] = useState<BookProps[]>([]);
  const [allBooksContext, setAllBooksContext] = useState<BookProps[]>([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function LoadAllBooks() {
      try {
        const response = await apiTag.get<BookProps[]>('')
        const dataAPI = response.data.map(books => ({
          ...books,
          editionFormat: newDateFromDateString(books.edition),
        }))
        const OrderData = [...dataAPI].sort((a, b) => a.editionFormat - b.editionFormat);
        setAllBooksContext(OrderData)
        setBookDataContext(OrderData)
      } catch (e) {
        const dataAPI = BooksMock.map(books => ({
          ...books,
          editionFormat: newDateFromDateString(books.edition),
        }))
        const OrderData = [...dataAPI].sort((a, b) => a.editionFormat - b.editionFormat);
        console.log({ dataAPI })

        setAllBooksContext(dataAPI)
        setBookDataContext(OrderData)
      }
    }
    LoadAllBooks()
  }, [])
  function searchBook(value: string) {
    const valueLowerCase = value.toLowerCase();
    const eventFilter = allBooksContext.filter(book => book.name.toLocaleLowerCase().includes(`${valueLowerCase}`))
    setBookDataContext(eventFilter)
  }

  async function updateBookContext(value: string) {
    try {
      const response = await apiGoodReads.get(`book/review_counts.json?isbns=${value}`);
      const ratingCount = response.data.books[0]?.ratings_count;
      console.log(ratingCount)

      const updatedBookDataContext = bookDataContext.map((book) => {
        if (book.isbn === value) {
          return {
            ...book,
            goodReadingsRating: ratingCount
          };
        }
        return book;
      });
      setBookDataContext(updatedBookDataContext);
    } catch (error) {
      const updatedBookDataContext = bookDataContext.map((book) => {
        if (book.isbn === value) {
          return {
            ...book,
            goodReadingsRating: 'Não avaliado'
          };
        }
        return book;
      });
      setBookDataContext(updatedBookDataContext);
    }
  }

  return (
    <BooksContext.Provider value={{ bookDataContext, allBooksContext, searchBook, updateBookContext, loading, setLoading }}>
      {children}
    </BooksContext.Provider>
  )
}