import { PizzaCartCard, PizzaCartCardContainer, PizzaCartCardFooter, PizzaCartCardImage, PizzaCartCardPrice, PizzaCartCardQuantitySelect, PizzaCartCardSizesSelect, PizzaCartCardSizesSelectOption, PizzaCartCardTitle, PizzaDetailsCartCard, PizzaDetailsCartCardRight } from "../../../components/ui/PizzaCartCard";

import pizzas from "../../../data/pizzaData";
function CartItem() {

    const showPizzas = pizzas.slice(0, 6)
    return (

        <PizzaCartCardContainer>

            {showPizzas.map((pizza) => {

                return (

                    <PizzaCartCard className="shadow-xl p-5">
                        <PizzaDetailsCartCard>

                            <PizzaCartCardImage src={pizza.imagem} />
                            <PizzaDetailsCartCardRight>
                                <PizzaCartCardTitle>Camarão c/ catupiry</PizzaCartCardTitle>
                                <PizzaCartCardSizesSelect>
                                    <PizzaCartCardSizesSelectOption>Grande 320g</PizzaCartCardSizesSelectOption>
                                    <PizzaCartCardSizesSelectOption>Media 280g</PizzaCartCardSizesSelectOption>
                                    <PizzaCartCardSizesSelectOption>Pequena 180g</PizzaCartCardSizesSelectOption>
                                </PizzaCartCardSizesSelect>
                            </PizzaDetailsCartCardRight>
                        </PizzaDetailsCartCard>

                        <PizzaCartCardFooter  >

                            <PizzaCartCardPrice>
                                R$ 33,90
                            </PizzaCartCardPrice>
                            <PizzaCartCardQuantitySelect />


                        </PizzaCartCardFooter>



                    </PizzaCartCard>

                )

            })}

        </PizzaCartCardContainer>
    );
}

export default CartItem
