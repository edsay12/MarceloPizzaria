import { useContext } from "react";
import {
  PizzaCard,
  PizzaCardButton,
  PizzaCardContainer,
  PizzaCardDescription,
  PizzaCardImage,
  PizzaCardPrice,
  PizzaCardTitle,
} from "../../../components/ui/PizzaCard";
import pizzas from "../../../data/pizzaData";
import { PizzaModalContext, PizzaModalContextType } from "../../../contexts/pizzaModalContext";

function Pizzas() {
  const { oppenModal } = useContext(
    PizzaModalContext
  ) as PizzaModalContextType;
  return (
    <PizzaCardContainer className="mt-0 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
      {pizzas.map((pizza) => {
        return (
          <PizzaCard key={pizza.id} className="w-full">
            <PizzaCardImage className="w-full" src={pizza.imagem} />
            <PizzaCardButton onClick={()=> oppenModal(pizza.id)}>+</PizzaCardButton>

            <PizzaCardPrice>
              {pizza.preco.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </PizzaCardPrice>

            <PizzaCardTitle>{pizza.titulo}</PizzaCardTitle>
            <PizzaCardDescription>{pizza.ingredientes}</PizzaCardDescription>
          </PizzaCard>
        );
      })}
    </PizzaCardContainer>
  );
}

export default Pizzas;
