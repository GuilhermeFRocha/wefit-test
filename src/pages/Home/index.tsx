import { Header } from "../../components/Header";

export function Home() {
  return (
    <>
      <Header />

      <form>
        <input type="text" placeholder="Busque em sua notas" />
      </form>
    </>
  );
}
