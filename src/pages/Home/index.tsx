import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [search, setSearch] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Erro ao obter os produtos:", error);
      });
  }, []);

  useEffect(() => {
    navigate(`/?search=${search}`);
  }, [search, navigate]);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const query = event.target.value.toLowerCase();
    setSearch(query);
  }

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search)
  );

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
          {filteredProducts.map((product: ProductProps) => {
            return <Card key={product.id} prod={product} />;
          })}
        </CardContainer>
      </MainContainer>
    </>
  );
}
