import { render } from '@testing-library/react'
import { Loading } from './index'

describe('Loading', () => {
  it('h1', () => {
    const { getByText } = render(
      <Loading />
    )
    expect(getByText('Procurando por conhecimento literário...')).toBeTruthy()
  })
  it('animation', () => {
    const { getByTestId } = render(
      <Loading />
    )
    const element = getByTestId('loader-animation');
    expect(element.className).toBe('loader');
  })
  it('p', () => {
    const { getByText } = render(
      <Loading />
    )
    expect(getByText('Aguarde enquanto encontramos os melhores livros para você!')).toBeTruthy()
  })
})