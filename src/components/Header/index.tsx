import Cart from "../../assets/cart.svg";
import { HeaderCart, HeaderContainer, HeaderTitle } from "./style";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderTitle>WeMovies</HeaderTitle>

      <HeaderCart>
        <div>
          <p>Meu carrinho</p>
          <span>0 itens</span>
        </div>
        <img src={Cart} alt="carrinho de compras" />
      </HeaderCart>
    </HeaderContainer>
  );
}
