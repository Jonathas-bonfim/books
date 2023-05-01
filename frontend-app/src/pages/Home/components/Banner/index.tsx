import { BannerContainer } from './styles'
import bannerIMG from '../../../../assets/images/home/banner.jpg'

export function Banner() {
  return (
    <BannerContainer>
      <img src={bannerIMG} alt="" />
      <section className='text-banner'>
        <h1>Tag Livros</h1>
        <p>Somos um clube de assinatura de livros e acreditamos que a literatura pode ser, ao mesmo tempo, profunda e acessível. Acreditamos que todo o ser humano é movido por histórias e que basta a abordagem certa para que o gosto pela leitura aflore.</p>
      </section>
    </BannerContainer>
  )
}