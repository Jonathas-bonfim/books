import { render } from '@testing-library/react'
import { Footer } from './index'

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

describe('Footer', () => {
  it('Render correctly Blog', () => {
    const { getByText } = render(
      <Footer />
    )
    expect(getByText('Blog')).toBeTruthy()
  })

  it('Render correctly Tag', () => {
    const { getByText } = render(
      <Footer />
    )
    expect(getByText(/Tag Livros/)).toBeTruthy()
  })

  it('Render correctly Icon', () => {
    const { getByTestId } = render(
      <Footer />
    )
    const element = getByTestId('icon-footer-element');
    expect(element)
  })
})