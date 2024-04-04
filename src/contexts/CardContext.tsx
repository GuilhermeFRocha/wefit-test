import { createContext, ReactNode, useState } from "react";

interface AddedCartProps {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface CycleContextType {
  handleBuy: (props: any, date: number) => void;
  numbershop: number;
  setNumberShop: React.Dispatch<React.SetStateAction<number>>;
  addedCart: AddedCartProps[];
}

export const Context = createContext({} as CycleContextType);

interface Props {
  children?: ReactNode;
}

export function ContextProvider({ children }: Props) {
  const [numbershop, setNumberShop] = useState(0);

  const initialState: any[] = [];

  const [addedCart, setAddedCart] = useState(initialState);

  function handleBuy(props: any, date: any) {
    setNumberShop(numbershop + date);
    setAddedCart((current) => [...current, props]);
  }

  return (
    <Context.Provider
      value={{
        handleBuy,
        numbershop,
        setNumberShop,
        addedCart,
      }}
    >
      {children}
    </Context.Provider>
  );
}
