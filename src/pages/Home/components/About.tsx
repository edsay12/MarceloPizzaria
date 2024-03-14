import { Button } from "@mui/material";
import vetor2 from "../../../assets/vetor2.svg";
import pizza2 from "../../../assets/pizza2.svg";
import Tilt from "react-vanilla-tilt";
import {
  Section,
  SectionContainer,
  SectionDetails,
  SectionDetailsContainer,
  SectionImageContainer,
  SectionSubTitle,
  SectionTitle,
} from "../../../components/ui/section";

function About() {
  return (
    <>
      <Section className=" mt-[500px]">
        <SectionContainer className="flex justify-between xl:items-center mt-10 flex-wrap " >
          <SectionImageContainer className="box-shadow">
            <Tilt
              options={{
                scale: 3,
                easing: "cubic-bezier(.03,.98,.52,.99)",
                glare: false,

                speed: 300,
              }}
              className="tilt"
              style={{
                backgroundColor: "transparent",
                boxShadow: "",
              }}
            >
              <img src={pizza2} alt="" className="max-w-[700px] w-full" />
            </Tilt>
          </SectionImageContainer>
          <SectionDetailsContainer>
            <SectionSubTitle>Sobre</SectionSubTitle>
            <SectionTitle className=" text-2xl lg:text-3xl">Um Pouco Da Nossa História</SectionTitle>
            <SectionDetails>
              Sabor inigualável, ingredientes frescos e tradição italiana em
              cada fatia. Descubra por que somos a melhor escolha na região para
              os verdadeiros amantes de pizza.Sabor inigualável, ingredientes
              frescos e tradição italiana em cada fatia. Descubra por que somos
              a melhor escolha na região para os verdadeiros amantes de pizza.
            </SectionDetails>
            <Button
              aria-label="Fazer pedido"
              className="bg-yellow-500 text-white hover:scale-110 transition-all duration-500 mt-5"
              size="large"
            >
              Ler Mais
            </Button>
          </SectionDetailsContainer>
        </SectionContainer>

        <img
          src={vetor2}
          className="absolute  -top-[200px] md:-top=[100px] lg:-top-[250px] -left-5 lg:max-w-[500px]  max-w-[300px] -z-20"
          alt=""
        />
      </Section>
      {/* // vetor  */}
    </>
  );
}

export default About;
