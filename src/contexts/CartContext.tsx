import { ReactNode, createContext, useState } from "react";
import { PizzaType } from "../@types";

type CartContextType = {
  pizzas: PizzaType[];
  addPizza: (pizza: PizzaType, quantidade: number) => void;
  removePizza: (pizzaItem: PizzaType, quantidade: number) => void;
};

interface PizzaCard extends PizzaType {
  quantidade: number;
}

export const CartContext = createContext<CartContextType | null>(null);

export function CartContextProvider({ children }: { children: ReactNode }) {
  const [pizzas, setPizzas] = useState<PizzaCard[]>([]);
  const addPizza = (pizzaItem: PizzaType, quantidade: number) => {
    const pizzaIsOnTheCard = pizzas.find((pizza) => pizza.id === pizzaItem.id);

    if (pizzaIsOnTheCard) {
      pizzas.map((pizza) =>
        pizza.id == pizzaItem.id
          ? { ...pizza, quantidade: pizza.quantidade + quantidade }
          : pizzaItem
      );
    } else {
      setPizzas([...pizzas, { ...pizzaItem, quantidade }]);
    }
  };

  const removePizza = (pizzaItem: PizzaType, quantidade: number) => {
    const pizzaIsOnTheCard = pizzas.find((pizza) => pizza.id === pizzaItem.id);

    if (pizzaIsOnTheCard?.quantidade === 1) {
      setPizzas(pizzas.filter((pizza) => pizza.id !== pizzaItem.id));
    } else {
      setPizzas(
        pizzas.map((pizza) =>
          pizza.id === pizzaItem.id
            ? { ...pizza, quantidade: pizza.quantidade - quantidade }
            : pizza
        )
      );
    }
  };

  return (
    <CartContext.Provider value={{ addPizza,removePizza,pizzas }}>{children}</CartContext.Provider>
  );
}
