import { ReactNode, createContext, useEffect, useState } from "react";
import { PizzaType } from "../@types";

export type CartContextType = {
  pizzas: PizzaCard[];
  addPizza: (pizza: PizzaType, quantidade: number) => void;
  removePizza: (pizzaItem: PizzaType, quantidade: number) => void;
  totalPrice: () => string;
  totalItens:()=>number
  clearCart:()=> void
};

export interface PizzaCard extends PizzaType {
  quantidade: number;
}

export const CartContext = createContext<CartContextType | null>(null);

export function CartContextProvider({ children }: { children: ReactNode }) {
  const cartItems:PizzaCard[] = localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')!) : [] ;
  const [pizzas, setPizzas] = useState<PizzaCard[]>(cartItems);

  // add as pizzas tambem ao localstorage
  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(pizzas));
  }, [pizzas]);
  // add pizza ao array de pizzas
  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setPizzas(JSON.parse(cartItems));
    }
}, []);

  const addPizza = (pizzaItem: PizzaType, quantidade: number) => {
    const pizzaIsOnTheCard = pizzas.find((pizza) => pizza.id === pizzaItem.id);

    if (pizzaIsOnTheCard) {
      setPizzas(
        pizzas.map((pizza) =>
          pizza.id === pizzaItem.id
            ? { ...pizza, quantidade: pizza.quantidade + quantidade }
            : pizza
        )
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

  const totalPrice = () => {
    return pizzas.reduce(
      (total, pizza) => total + pizza.preco * pizza.quantidade,
      0
    ).toFixed(2);
  };

  const clearCart = ()=>{
    setPizzas([])
  }

  const totalItens = () => {
    return pizzas.reduce((total,pizza)=> total + pizza.quantidade,0)
  }

  return (
    <CartContext.Provider value={{ addPizza, removePizza, pizzas,clearCart, totalPrice,totalItens }}>
      {children}
    </CartContext.Provider>
  );
}
