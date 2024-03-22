import { PizzaCartCard, PizzaCartCardContainer, PizzaCartCardFooter, PizzaCartCardImage, PizzaCartCardPrice, PizzaCartCardQuantitySelect, PizzaCartCardSizesSelect, PizzaCartCardSizesSelectOption, PizzaCartCardTitle, PizzaDetailsCartCard, PizzaDetailsCartCardRight } from "../../../components/ui/PizzaCartCard";

import pizzas from "../../../data/pizzaData";
function CartItem() {

    const showPizzas = pizzas.slice(0, 6)
    return (

        <PizzaCartCardContainer>

            {showPizzas.map((pizza) => {

                return (

                    <PizzaCartCard className="shadow-xl p-5 flex-col md:flex-row">
                        <PizzaDetailsCartCard className="flex-col md:flex-row">

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

                        <PizzaCartCardFooter className="flex-col-reverse md:flex-row mt-10">

                            <PizzaCartCardPrice className="font-bold text-xl">
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
