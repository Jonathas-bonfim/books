import { LoadingContainer } from "./styles";

export function Loading() {
  return (
    <LoadingContainer>
      <h1>Procurando por conhecimento literário...</h1>
      <div className="loader" data-testid="loader-animation"></div>
      <p>Aguarde enquanto encontramos os melhores livros para você!</p>
    </LoadingContainer>
  )
}