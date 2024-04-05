import { createContext, ReactNode, useEffect, useState } from "react";

export interface ProductProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface CycleContextType {
  handleBuy: (props: ProductProps, date: number) => void;
  handleDelete: (id: number) => void;
  numbershop: number;
  setNumberShop: React.Dispatch<React.SetStateAction<number>>;
  addedCart: ProductProps[];
  setAddedCart: React.Dispatch<React.SetStateAction<ProductProps[]>>;
}

export const Context = createContext({} as CycleContextType);

interface Props {
  children?: ReactNode;
}

export function ContextProvider({ children }: Props) {
  const [numbershop, setNumberShop] = useState(() => {
    const savedNumberShop = localStorage.getItem("numbershop");
    return savedNumberShop ? parseInt(savedNumberShop, 10) : 0;
  });
  const [addedCart, setAddedCart] = useState<ProductProps[]>(() => {
    const savedCart = localStorage.getItem("addedCart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("numbershop", numbershop.toString());
    localStorage.setItem("addedCart", JSON.stringify(addedCart));
  }, [numbershop, addedCart]);

  function handleBuy(props: ProductProps) {
    setNumberShop(numbershop + 1);
    setAddedCart((current) => [...current, props]);
  }

  function handleDelete(id: number) {
    setNumberShop(numbershop - 1);
    setAddedCart(addedCart.filter((cart) => cart.id !== id));
    localStorage.setItem(`date-${id}`, String(0));
    localStorage.setItem(`added-${id}`, "");
  }

  return (
    <Context.Provider
      value={{
        handleBuy,
        handleDelete,
        numbershop,
        setNumberShop,
        addedCart,
        setAddedCart,
      }}
    >
      {children}
    </Context.Provider>
  );
}
