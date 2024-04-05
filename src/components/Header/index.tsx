import { Link } from "react-router-dom";
import Cart from "../../assets/cart.svg";
import { HeaderCart, HeaderContainer, HeaderTitle } from "./styled";
import { Context } from "../../contexts/CardContext";
import { useContext } from "react";

export function Header() {
  const { numbershop } = useContext(Context);

  return (
    <HeaderContainer>
      <Link to="/" style={{ textDecoration: "none" }}>
        <HeaderTitle>WeMovies</HeaderTitle>
      </Link>

      <HeaderCart>
        <div>
          <p>Meu carrinho</p>
          <span>{numbershop}</span>
        </div>

        <Link to="/cart">
          <img src={Cart} alt="carrinho de compras" />
        </Link>
      </HeaderCart>
    </HeaderContainer>
  );
}
