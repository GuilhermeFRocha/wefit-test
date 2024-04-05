import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { CartPage } from "./pages/CartPage";
import { ContextProvider } from "./contexts/CardContext";
import { SuccessPage } from "./pages/SuccessPage";

export function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/success" element={<SuccessPage />} />
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  );
}
