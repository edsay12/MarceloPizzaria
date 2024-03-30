import { useState, createContext, ReactNode } from "react";
import { PizzaType } from "../@types";
import pizzas from "../data/pizzaData";

export type PizzaModalContextType = {
  isModalOpen: boolean;
  oppenModal: (id: string) => void;
  closeModal: () => void;
  pizza: PizzaType;
};

export const PizzaModalContext = createContext<PizzaModalContextType | null>(
  null
);

export function PizzaModalContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [isModalOpen, setIsModalOppen] = useState(false);
  const [pizza, setPizza] = useState<PizzaType>({
    id: "",
    imagem: "",
    ingredientes: "",
    preco: 0,
    titulo: "",
  });

  const oppenModal = (id: string) => {
    setIsModalOppen(true);
    const pizza = pizzas.filter((pizza) => pizza.id === id);
    setPizza(pizza[0]);
  };
  const closeModal = () => {
    setIsModalOppen(false);
  };

  return (
    <PizzaModalContext.Provider
      value={{ pizza, isModalOpen, oppenModal, closeModal }}
    >
      {children}
    </PizzaModalContext.Provider>
  );
}
