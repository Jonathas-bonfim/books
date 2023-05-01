import { ImportanceReadingContainer } from './styles'
import booksIMG from '../../../../assets/images/home/estante-livros.jpg'

export function ImportanceReading() {
  return (
    <ImportanceReadingContainer >
      <div className="container-center">
        <img src={booksIMG} alt="Estante de livros" />
        <section title='Sessão sobre a importância da leitura'>
          <h5>Qual a importância da leitura?</h5>
          <p>A leitura é extremamente importante, pois permite que as pessoas expandam seus conhecimentos, desenvolvam habilidades de comunicação e pensamento crítico, além de aumentar o vocabulário e a criatividade. Através da leitura, é possível viajar para outros lugares, aprender sobre diferentes culturas e perspectivas, além de se entreter e relaxar. A leitura é uma ferramenta fundamental para o aprendizado, o desenvolvimento pessoal e profissional, e pode ser uma atividade prazerosa e enriquecedora.</p>
        </section>
      </div>
    </ImportanceReadingContainer>
  )
}