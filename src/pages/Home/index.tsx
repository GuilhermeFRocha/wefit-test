import { ChangeEvent, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { MainContainer, CardContainer, CardSearch } from "./style";
import { fetchProducts } from "../../utils/api";
import { Card } from "../../components/Card.tsx";

interface ProductProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

export function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Erro ao obter os produtos:", error);
      });
  }, []);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value.toLowerCase();
    setSearch(query);
  }

  return (
    <>
      <Header />

      <MainContainer>
        <CardSearch>
          <input
            type="text"
            placeholder="Buscar filme pelo nome"
            onChange={handleChange}
          />
        </CardSearch>
        <CardContainer>
          {products
            .filter((product: ProductProps) =>
              product.title.toLowerCase().includes(search)
            )
            .map((product: ProductProps) => {
              return <Card key={product.id} prod={product} />;
            })}
        </CardContainer>
      </MainContainer>
    </>
  );
}
