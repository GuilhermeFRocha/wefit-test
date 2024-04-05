import { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { MainContainer, CardContainer, CardSearch } from "./styled.ts";
import { fetchProducts } from "../../utils/api";
import { Card } from "../../components/Card.tsx";
import { ProductProps } from "../../contexts/CardContext.tsx";
import Lupa from "../../assets/lupa.svg";
import { Loading } from "../../components/Loading/index.tsx";

export function Home() {
  const [products, setProducts] = useState<ProductProps[]>([]);
  const [search, setSearch] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Erro ao obter os produtos:", error);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (search) {
      navigate(`/?search=${search}`);
      return;
    }
    navigate("/");
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
            onBlur={handleChange}
          />
          <img src={Lupa} alt="lupa" onClick={() => handleChange}/>
        </CardSearch>
        {isLoading ? (
          <Loading />
        ) : (
          <CardContainer>
            {filteredProducts.map((product: ProductProps) => {
              return <Card key={product.id} prod={product} />;
            })}
          </CardContainer>
        )}
      </MainContainer>
    </>
  );
}
