import { FormEvent, useContext, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { BiSearch } from "react-icons/bi"
import { HeaderContainer, MainContainer } from "./styles"

import tagIMG from '../../assets/images/header/tag-livros.png'
import { BooksContext } from "../../Hooks/context/useBook"

export function Header() {
  const { searchBook } = useContext(BooksContext)
  const [search, setSearch] = useState('')
  const navigate = useNavigate();

  function handleSearchBook(e: FormEvent) {
    e.preventDefault()
    searchBook(search)
    navigate(`/`)
    setSearch('')
  }
  return (
    <HeaderContainer>
      <aside className="top-header">
        <p>Leia livros e descubra mundos incríveis além da sua imaginação!</p>
      </aside>
      <section className="container-center">
        <MainContainer>
          <NavLink to="/">
            <img src={tagIMG} alt="Logo" />
          </NavLink>
          <article>
            <form
              onSubmit={(e) => handleSearchBook(e)}
              data-testid="search-form"
            >
              <input type="text"
                placeholder="Qual livro você está procurando?"
                onChange={(e) => setSearch(e.target.value)}
                value={search}
                data-testid="input-search-form"
              />
              <button
                onClick={(e) => handleSearchBook(e)}
              >
                <BiSearch />
              </button>
            </form>
          </article>
        </MainContainer>
      </section>
    </HeaderContainer>
  )
}