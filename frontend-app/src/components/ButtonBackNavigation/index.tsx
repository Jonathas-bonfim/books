import { useNavigate } from "react-router-dom";
import { ButtonNavigation } from "./styles";
import { TiArrowBack } from 'react-icons/ti'

export function ButtonBackNavigation() {
  const navigate = useNavigate()
  return (
    <ButtonNavigation
      onClick={() => navigate(-1)}
    >
      <TiArrowBack />
      Voltar
    </ButtonNavigation>
  )
}