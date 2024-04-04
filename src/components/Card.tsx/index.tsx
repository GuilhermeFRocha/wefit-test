import { useContext, useState } from "react";
import {
  CardButton,
  CardContent,
  CardImage,
  CardPrice,
  CardTitle,
} from "./style";
import ShoppingCart from "../../assets/shoppingcart.svg";
import { Context } from "../../contexts/CardContext";

interface ProductProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface CardProps {
  prod: ProductProps;
}

export function Card({ prod }: CardProps) {
  const [date, setDates] = useState(0);
  const [hasAddedDay, setHasAddedDay] = useState(false);

  const { handleBuy } = useContext(Context);

  const handleAddToCart = (prod: ProductProps) => {
    if (!hasAddedDay) {
      const updatedDate = date + 1;
      setDates(updatedDate);
      setHasAddedDay(true);
      handleBuy(prod, updatedDate);
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
        <CardButton onClick={() => handleAddToCart(prod)}>
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
