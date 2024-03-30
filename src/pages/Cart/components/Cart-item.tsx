import { useContext } from "react";
import {
  PizzaCartCard,
  PizzaCartCardContainer,
  PizzaCartCardFooter,
  PizzaCartCardImage,
  PizzaCartCardPrice,
  PizzaCartCardQuantitySelect,
  PizzaCartCardSizesSelect,
  PizzaCartCardSizesSelectOption,
  PizzaCartCardTitle,
  PizzaDetailsCartCard,
  PizzaDetailsCartCardRight,
} from "../../../components/ui/PizzaCartCard";


import { CartContext, CartContextType } from "../../../contexts/CartContext";
function CartItem() {
  const { pizzas } = useContext(CartContext) as CartContextType;

  console.log(pizzas)
  return (
    <PizzaCartCardContainer>
      {pizzas.map((pizza) => {
        return (
          <PizzaCartCard className="shadow-xl p-5 flex-col md:flex-row">
            <PizzaDetailsCartCard className="flex-col md:flex-row">
              <PizzaCartCardImage src={pizza.imagem} />
              <PizzaDetailsCartCardRight>
                <PizzaCartCardTitle>{pizza.titulo}</PizzaCartCardTitle>
                <PizzaCartCardSizesSelect>
                  <PizzaCartCardSizesSelectOption>
                    Grande 320g
                  </PizzaCartCardSizesSelectOption>
                  <PizzaCartCardSizesSelectOption>
                    Media 280g
                  </PizzaCartCardSizesSelectOption>
                  <PizzaCartCardSizesSelectOption>
                    Pequena 180g
                  </PizzaCartCardSizesSelectOption>
                </PizzaCartCardSizesSelect>
              </PizzaDetailsCartCardRight>
            </PizzaDetailsCartCard>

            <PizzaCartCardFooter className="flex-col-reverse md:flex-row mt-10">
              <PizzaCartCardPrice className="font-bold text-xl">
                {pizza.preco}
              </PizzaCartCardPrice>
              <PizzaCartCardQuantitySelect value={pizza.quantidade} pizza={pizza} />
            </PizzaCartCardFooter>
          </PizzaCartCard>
        );
      })}
    </PizzaCartCardContainer>
  );
}

export default CartItem;
