import { useState, useEffect } from "react";
import {
  CardButton,
  CardContent,
  CardImage,
  CardPrice,
  CardTitle,
} from "./style";
import ShoppingCart from "../../assets/shoppingcart.svg";
import { useContext } from "react";
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
  const { handleBuy } = useContext(Context);
  const [date, setDate] = useState(() => {
    const savedDate = localStorage.getItem(`date-${prod.id}`);
    return savedDate ? parseInt(savedDate, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem(`date-${prod.id}`, String(date));
  }, [date, prod.id]);

  const handleAddToCart = () => {
    const updatedDate = date + 1;
    setDate(updatedDate);
    handleBuy(prod, updatedDate);
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
