import { useNavigate } from "react-router";
import { ProductItemContainer } from "./styles";

interface ProductItemProps {
  objectId: string;
  url: string;
  name: string;
  author: string;
}

export function ShelfProductItem({ objectId, url, name, author }: ProductItemProps) {
  const navigate = useNavigate();
  function handleClickItem(objectId: string) {
    navigate(`/book/${objectId}`)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  return (
    <ProductItemContainer key={objectId} data-testid="item">
      <button onClick={() => handleClickItem(objectId)}>
        <div>
          <img src={url} alt="Capa do livro" />
        </div>
        <section>
          <h4>{name}</h4>
          <div className="divider"></div>
          <p>{author}</p>
        </section>
      </button>
    </ProductItemContainer>
  )
}