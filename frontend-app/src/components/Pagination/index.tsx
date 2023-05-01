import { PaginationContainer } from './styles'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

interface PaginationProps {
  prePage(): void;
  nextPage(): void;
  numbers: number[];
  currentPage: number;
  changeCPage(n: number): void;
}

export function Pagination({ prePage, nextPage, numbers, currentPage, changeCPage }: PaginationProps) {
  return (
    <PaginationContainer className="pagination" data-testid="pagination-container">
      <li className="page-item">
        <a href="#" onClick={prePage} className="page-link">
          <BsChevronLeft />
        </a>
      </li>
      {
        numbers.map((n, i) => (
          <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}>
            <a href="#" className="page-link" onClick={() => changeCPage(n)}>{n}</a>
          </li>
        ))
      }
      <li className="page-item">
        <a href="#" className="page-link" onClick={nextPage}>
          <BsChevronRight />
        </a>
      </li>
    </PaginationContainer>
  )
}