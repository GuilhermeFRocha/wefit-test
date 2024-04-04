import { Header } from "../../components/Header";
import ErroCart from "../../assets/notcart.svg";
import { ErrorContainer } from "./style";

export function CartPage() {
  return (
    <>
      <Header />

      <ErrorContainer>
        <h2>Parece que nao há nada por aqui :(</h2>

        <img src={ErroCart} alt="erro ao encontrar carrinho" />

        <button>Recarregar página</button>
      </ErrorContainer>
    </>
  );
}
