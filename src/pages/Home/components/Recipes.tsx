import {
  Section,
  SectionContainer,
  SectionDetails,
  SectionDetailsContainer,
  SectionSubTitle,
  SectionTitle,
} from "../../../components/ui/section";

function Recipes() {
  return (
    <Section className="mt-[100px]">
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
    </Section>
  );
}

export default Recipes;
