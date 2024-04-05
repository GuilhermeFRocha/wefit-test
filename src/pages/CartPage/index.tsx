import { useContext, useEffect, useState } from "react";
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
  const [quantities, setQuantities] = useState<number[]>(
    addedCart.map(() => 1)
  );

  function handleIncrement(index: number) {
    const newQuantities = [...quantities];
    newQuantities[index]++;
    setQuantities(newQuantities);
  }

  function handleDecrement(index: number) {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 1) {
      newQuantities[index]--;
      setQuantities(newQuantities);
    }
  }

  return (
    <>
      <Header />

      {!addedCart.length ? (
        <ErrorContainer>
          <h2>Parece que não há nada por aqui :(</h2>

          <img src={ErroCart} alt="erro ao encontrar carrinho" />

          <button>Recarregar página</button>
        </ErrorContainer>
      ) : (
        <CheckoutContainer>
          <CheckoutContent>
            {addedCart.map((added: AddedCartProps, index: number) => (
              <CheckoutInfo key={added.id}>
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
                    <button onClick={() => handleDecrement(index)}>
                      <img src={MinusButton} alt="" />
                    </button>
                    <p>{quantities[index]}</p>
                    <button onClick={() => handleIncrement(index)}>
                      <img src={PlusButton} alt="" />
                    </button>
                  </CheckoutButton>
                </CheckoutAmount>
                <CheckoutTotal>
                  <CheckoutTitle>SUBTOTAL</CheckoutTitle>
                  <span>R$ {(added.price * quantities[index]).toFixed(2)}</span>
                </CheckoutTotal>
                <div>
                  <button>
                    <img src={DeleteButton} alt="" />
                  </button>
                </div>
              </CheckoutInfo>
            ))}

            <CheckoutFinish>
              <CheckoutButtonFinish>Finalizar pedido</CheckoutButtonFinish>
              <CheckoutPrice>
                <p>TOTAL</p>
                <span>
                  R$
                  {addedCart
                    .reduce(
                      (acc, added, index) =>
                        acc + added.price * quantities[index],
                      0
                    )
                    .toFixed(2)}
                </span>
              </CheckoutPrice>
            </CheckoutFinish>
          </CheckoutContent>
        </CheckoutContainer>
      )}
    </>
  );
}
