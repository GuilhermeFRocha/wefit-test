import { createContext, ReactNode, useState } from "react";

interface CycleContextType {
  handleBuy: (props: any, date: number) => void;
  numbershop: number;
  setNumberShop: React.Dispatch<React.SetStateAction<number>>;
  dateItems: any;
  setDateItems: React.Dispatch<React.SetStateAction<never[]>>;
  employees: any;
}

export const Context = createContext({} as CycleContextType);

interface Props {
  children?: ReactNode;
}

export function ContextProvider({ children }: Props) {
  const [numbershop, setNumberShop] = useState(0);
  const [dateItems, setDateItems] = useState([]);

  const initialState: any[] = [];

  const [employees, setEmployees] = useState(initialState);

  function handleBuy(props: any, date: any) {
    setNumberShop(numbershop + date);
    setEmployees((current) => [...current, props]);
  }

  return (
    <Context.Provider
      value={{
        handleBuy,
        numbershop,
        setNumberShop,
        dateItems,
        setDateItems,
        employees,
      }}
    >
      {children}
    </Context.Provider>
  );
}
