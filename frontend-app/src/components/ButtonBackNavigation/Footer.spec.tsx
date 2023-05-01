import { render } from '@testing-library/react'
import { ButtonBackNavigation } from './index'

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

describe('ButtonBackNavigation', () => {
  it('Render correctly Blog', () => {
    const { getByText } = render(
      <ButtonBackNavigation />
    )
    expect(getByText('Voltar')).toBeTruthy()
  })
})