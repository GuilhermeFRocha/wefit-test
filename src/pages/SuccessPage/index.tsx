import { Header } from "../../components/Header";
import { SuccessContainer } from "./style";
import SuccessImage from "../../assets/success.svg";

export function SuccessPage() {
  return (
    <>
      <Header />

      <SuccessContainer>
        <p>Compra realizada com sucesso!</p>

        <div>
          <img src={SuccessImage} alt="" />
        </div>

        <button onClick={() => window.history.back()}>VOLTAR</button>
      </SuccessContainer>
    </>
  );
}
