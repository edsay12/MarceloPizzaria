import { Button } from "@mui/material";
import {
  PizzaCard,
  PizzaCardButton,
  PizzaCardContainer,
  PizzaCardDescription,
  PizzaCardImage,
  PizzaCardPrice,
  PizzaCardTitle,
} from "../../../components/ui/PizzaCard";
import {
  Section,
  SectionContainer,
  SectionDetails,
  SectionDetailsContainer,
  SectionSubTitle,
  SectionTitle,
} from "../../../components/ui/section";

import pizzas from "../../../data/pizzaData";
import { useContext } from "react";
import { PizzaModalContext, PizzaModalContextType } from "../../../contexts/pizzaModalContext";

function Recipes() {
  const { oppenModal } = useContext(
    PizzaModalContext
  ) as PizzaModalContextType;
  return (
    <Section className="mt-[100px]"  id="recipes">
      <SectionContainer className="flex justify-between md:items-center mt-10 flex-wrap">
        <SectionDetailsContainer className="w-full xl:max-w-full xl:text-center">
          <SectionSubTitle>Receitas</SectionSubTitle>
          <SectionTitle className=" text-2xl lg:text-3xl">
            Nossa Melhores Receitas
          </SectionTitle>
          <SectionDetails className="max-w-[600px] mx-auto">
            Sabor inigualável, ingredientes frescos e tradição italiana em cada
            fatia. Descubra por que somos
          </SectionDetails>
        </SectionDetailsContainer>
      </SectionContainer>

      <SectionContainer>
        <PizzaCardContainer>
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
                <PizzaCardDescription>
                  {pizza.ingredientes}
                </PizzaCardDescription>
              </PizzaCard>
            );
          })}
        </PizzaCardContainer>
      </SectionContainer>
      <SectionContainer className="flex justify-center">
        <Button className="bg-yellow-500 mt-20 text-white mx-auto">
          Ver Mais
        </Button>
      </SectionContainer>
    </Section>
  );
}

export default Recipes;
