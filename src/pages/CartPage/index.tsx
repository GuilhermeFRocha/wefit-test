import { Header } from "../../components/Header";
import ErroCart from "../../assets/notcart.svg";
import {
  CheckoutContainer,
  CheckoutContent,
  CheckoutFinish,
  ErrorContainer,
} from "./style";
import { useContext } from "react";
import { Context } from "../../contexts/CardContext";

interface AddedCartProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

export function CartPage() {
  const { addedCart } = useContext(Context);

  return (
    <>
      <Header />

      {!addedCart.length ? (
        <ErrorContainer>
          <h2>Parece que nao há nada por aqui :(</h2>

          <img src={ErroCart} alt="erro ao encontrar carrinho" />

          <button>Recarregar página</button>
        </ErrorContainer>
      ) : (
        <CheckoutContainer>
          <CheckoutContent>
            {addedCart.map((added: AddedCartProps) => (
              <>
                <div>
                  <img src={added.image} alt="" />
                  <div>
                    <p>{added.title}</p>
                    <p>{added.price}</p>
                  </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
              </>
            ))}
          </CheckoutContent>
          <CheckoutFinish></CheckoutFinish>
        </CheckoutContainer>
      )}
    </>
  );
}
