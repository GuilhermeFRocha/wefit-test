import { useState, useEffect } from "react";
import {
  CardButton,
  CardContent,
  CardImage,
  CardPrice,
  CardTitle,
} from "./styled";
import ShoppingCart from "../../assets/shoppingcart.svg";
import { useContext } from "react";
import { Context, ProductProps } from "../../contexts/CardContext";

interface CardProps {
  prod: ProductProps;
}

export function Card({ prod }: CardProps) {
  const { handleBuy } = useContext(Context);
  const [date, setDate] = useState(() => {
    const savedDate = localStorage.getItem(`date-${prod.id}`);
    return savedDate ? parseInt(savedDate, 10) : 0;
  });

  const [addedToCart, setAddedToCart] = useState(() => {
    const alreadyAdded = localStorage.getItem(`added-${prod.id}`);
    return alreadyAdded ? true : false;
  });

  useEffect(() => {
    localStorage.setItem(`date-${prod.id}`, String(date));
  }, [date, prod.id]);

  const handleAddToCart = () => {
    if (!addedToCart) {
      const updatedDate = date + 1;
      setDate(updatedDate);
      handleBuy(prod, updatedDate);
      setAddedToCart(true);
      localStorage.setItem(`added-${prod.id}`, "true");
    }
  };

  return (
    <>
      <CardContent key={prod.id}>
        <CardImage>
          <img src={prod.image} alt={prod.title} />
        </CardImage>
        <CardTitle>{prod.title}</CardTitle>
        <CardPrice>
          R${" "}
          {prod.price.toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
          })}
        </CardPrice>
        <CardButton onClick={handleAddToCart}>
          <div>
            <img src={ShoppingCart} alt="carrinho de compras" />
            <span>{date}</span>
          </div>
          <p>Adicionar ao carrinho</p>
        </CardButton>
      </CardContent>
    </>
  );
}
