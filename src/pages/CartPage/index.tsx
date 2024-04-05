import { useContext, useState } from "react";
import { Context, ProductProps } from "../../contexts/CardContext";
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
  CheckoutDelete,
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
import { Link } from "react-router-dom";

interface AddedCartProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

export function CartPage() {
  const { addedCart, handleDelete } = useContext(Context);
  const [quantities, setQuantities] = useState<number[]>(
    addedCart.map(() => 1)
  );

  function handleIncrement(id: number) {
    const newQuantities = [...quantities];
    const index = addedCart.findIndex((item) => item.id === id);
    if (index !== -1) {
      newQuantities[index]++;
      setQuantities(newQuantities);
    }
  }

  function handleDecrement(id: number) {
    const newQuantities = [...quantities];
    const index = addedCart.findIndex((item) => item.id === id);
    if (index !== -1 && newQuantities[index] > 1) {
      newQuantities[index]--;
      setQuantities(newQuantities);
    }
  }

  function formateTotalPrice(cart: ProductProps[]) {
    const totalPrice = cart
      .reduce((acc, added, index) => acc + added.price * quantities[index], 0)
      .toFixed(2);

    return totalPrice;
  }

  function handleClick(id: number) {
    handleDelete(id);
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
            {addedCart.map((addedCart: AddedCartProps, index: number) => (
              <CheckoutInfo key={addedCart.id}>
                <CheckoutProduct>
                  <CheckoutTitle>PRODUTO</CheckoutTitle>
                  <CheckoutDetail>
                    <CheckoutImage>
                      <img src={addedCart.image} alt="" />
                    </CheckoutImage>
                    <CheckoutDesc>
                      <p>{addedCart.title}</p>
                      <span>R$ {addedCart.price}</span>
                    </CheckoutDesc>
                  </CheckoutDetail>
                </CheckoutProduct>

                <CheckoutAmount>
                  <CheckoutTitle>QTD</CheckoutTitle>
                  <CheckoutButton>
                    <button onClick={() => handleDecrement(addedCart.id)}>
                      <img src={MinusButton} alt="" />
                    </button>
                    <p>{quantities[index]}</p>
                    <button onClick={() => handleIncrement(addedCart.id)}>
                      <img src={PlusButton} alt="" />
                    </button>
                  </CheckoutButton>
                </CheckoutAmount>
                <CheckoutTotal>
                  <CheckoutTitle>SUBTOTAL</CheckoutTitle>
                  <span>
                    R$ {(addedCart.price * quantities[index]).toFixed(2)}
                  </span>
                </CheckoutTotal>
                <CheckoutDelete>
                  <button onClick={() => handleClick(addedCart.id)}>
                    <img src={DeleteButton} alt="" />
                  </button>
                </CheckoutDelete>
              </CheckoutInfo>
            ))}

            <CheckoutFinish>
              <Link to="/success">
                <CheckoutButtonFinish>Finalizar pedido</CheckoutButtonFinish>
              </Link>
              <CheckoutPrice>
                <p>TOTAL</p>
                <span>R${formateTotalPrice(addedCart)}</span>
              </CheckoutPrice>
            </CheckoutFinish>
          </CheckoutContent>
        </CheckoutContainer>
      )}
    </>
  );
}
