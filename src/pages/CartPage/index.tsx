import { useContext } from "react";
import { Context } from "../../contexts/CardContext";
import { Header } from "../../components/Header";

import ErroCart from "../../assets/notcart.svg";
import DeleteButton from "../../assets/delete.svg";
import MinusButton from "../../assets/minus.svg";
import PlusButton from "../../assets/plus.svg";

import {
  CheckoutAmount,
  CheckoutButton,
  CheckoutButtonFinish,
  CheckoutContainer,
  CheckoutContent,
  CheckoutDesc,
  CheckoutDetail,
  CheckoutFinish,
  CheckoutImage,
  CheckoutInfo,
  CheckoutPrice,
  CheckoutProduct,
  CheckoutTitle,
  CheckoutTotal,
  ErrorContainer,
} from "./style";

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
                <CheckoutInfo>
                  <CheckoutProduct>
                    <CheckoutTitle>PRODUTO</CheckoutTitle>
                    <CheckoutDetail>
                      <CheckoutImage>
                        <img src={added.image} alt="" />
                      </CheckoutImage>
                      <CheckoutDesc>
                        <p>{added.title}</p>
                        <span>R$ {added.price}</span>
                      </CheckoutDesc>
                    </CheckoutDetail>
                  </CheckoutProduct>

                  <CheckoutAmount>
                    <CheckoutTitle>QTD</CheckoutTitle>
                    <CheckoutButton>
                      <button>
                        <img src={MinusButton} alt="" />
                      </button>
                      <p>1</p>
                      <button>
                        <img src={PlusButton} alt="" />
                      </button>
                    </CheckoutButton>
                  </CheckoutAmount>
                  <CheckoutTotal>
                    <CheckoutTitle>SUBTOTAL</CheckoutTitle>
                    <span>29,90</span>
                  </CheckoutTotal>
                  <div>
                    <button>
                      <img src={DeleteButton} alt="" />
                    </button>
                  </div>
                </CheckoutInfo>
              </>
            ))}

            <CheckoutFinish>
              <CheckoutButtonFinish>Finalizar pedido</CheckoutButtonFinish>
              <CheckoutPrice>
                <p>TOTAL</p>
                <span>29,90</span>
              </CheckoutPrice>
            </CheckoutFinish>
          </CheckoutContent>
        </CheckoutContainer>
      )}
    </>
  );
}
