import { useContext, useEffect, useState } from 'react'
import { HomeContainer, MainContainer } from './styles'
import { Pagination } from '../../components/Pagination'
import { ShelfProductItem } from '../../components/ShelfProductItem'
import { Banner } from './components/Banner'
import { ImportanceReading } from './components/ImportanceReading'
import { BooksContext } from '../../Hooks/context/useBook'
import { Loading } from '../../components/Loading'

export function Home() {
  const { loading, bookDataContext, setLoading } = useContext(BooksContext)
  const [currentPage, setCurrentPage] = useState(1)

  const recordsPerPage = 12;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = bookDataContext.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(bookDataContext.length / recordsPerPage);
  const numbers = [...Array(nPage + 1).keys()].slice(1)

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  function changeCPage(id: number) {
    setCurrentPage(id)
  }
  function nextPage() {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1)
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 8000);
  })

  return (
    <>
      {
        loading
          ?
          <Loading />
          :
          <HomeContainer>
            <Banner />
            <MainContainer>
              <div className="container-books container-center">
                {
                  bookDataContext.length === 0
                    ?
                    <>
                      <h2>Não foram encontrados livros a partir da sua pesquisa!</h2>
                      <p>Por favor, digite novamente o título desejado ou clique no botão de busca para ver todos os livros.</p>
                    </>
                    :
                    <>
                      <div className='pagination'>
                        <Pagination prePage={prePage}
                          nextPage={nextPage}
                          numbers={numbers}
                          currentPage={currentPage}
                          changeCPage={changeCPage}
                        />
                      </div>
                      {
                        records.map(book => {
                          return (
                            <ShelfProductItem key={book.objectId} objectId={book.objectId} url={book.cover.url} name={book.name} author={book.author} />
                          )
                        })
                      }
                      <div className='pagination'>
                        <Pagination prePage={prePage}
                          nextPage={nextPage}
                          numbers={numbers}
                          currentPage={currentPage}
                          changeCPage={changeCPage}
                        />
                      </div>
                    </>
                }
              </div>
              <ImportanceReading />
            </MainContainer>
          </HomeContainer>
      }
    </>
  )
}