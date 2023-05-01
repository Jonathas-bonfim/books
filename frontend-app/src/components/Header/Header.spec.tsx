import { render, fireEvent } from '@testing-library/react'
import { Header } from './index'

interface NavLinkProps {
  children: React.ReactNode;
  to: string;
}

jest.mock('react-router-dom', () => {
  return {
    useNavigate() {
      return {
        navigate: 1
      }
    },
    NavLink: ({ children, ...props }: NavLinkProps) => {
      return (
        <a {...props}>
          {children}
        </a>
      );
    }
  }
})

describe('Header', () => {
  it('Top Header', () => {
    const { getByText } = render(
      <Header />
    )
    expect(getByText('Leia livros e descubra mundos incríveis além da sua imaginação!')).toBeTruthy()
  })

  it('Top', () => {
    const { getByTestId } = render(
      <Header />
    )
    const element = getByTestId('search-form');
    expect(element);
  })

  it('Input search', () => {
    const { getByTestId } = render(
      <Header />
    )
    const input = getByTestId('input-search-form') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Book' } });
    expect(input.value).toBe('Book');
  })
})