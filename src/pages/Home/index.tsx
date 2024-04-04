import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import {
  MainContainer,
  CardContainer,
  CardContent,
  CardImage,
  CardButton,
  CardTitle,
  CardPrice,
  CardSearch,
} from "./style";
import { fetchProducts } from "../../utils/api";
import ShoppingCart from "../../assets/shoppingcart.svg";

interface ProductProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

export function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Erro ao obter os produtos:", error);
      });
  }, []);

  return (
    <>
      <Header />

      <MainContainer>
        <CardSearch className="w-full ">
          <input type="text" placeholder="Buscar filme pelo nome" />
        </CardSearch>
        <CardContainer>
          {products.map((product: ProductProps) => (
            <CardContent key={product.id}>
              <CardImage>
                <img src={product.image} alt={product.title} />
              </CardImage>
              <CardTitle>{product.title}</CardTitle>
              <CardPrice>
                R${" "}
                {product.price.toLocaleString("pt-BR", {
                  minimumFractionDigits: 2,
                })}
              </CardPrice>
              <CardButton type="button">
                <div>
                  <img src={ShoppingCart} alt="carrinho de compras" />
                  <span>0</span>
                </div>
                <p>Adicionar ao carrinho</p>
              </CardButton>
            </CardContent>
          ))}
        </CardContainer>
      </MainContainer>
    </>
  );
}
