import { render } from '@testing-library/react'
import { Pagination } from '.'

describe('Pagination', () => {
  it('Pagination Container', () => {
    const { getByTestId } = render(
      <Pagination prePage={() => ('')} nextPage={() => ('')} numbers={[2]} currentPage={2} changeCPage={() => (2)} />
    )
    const element = getByTestId('pagination-container');
    expect(element);
  })
})