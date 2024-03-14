import { Button } from "@mui/material";
import vetor2 from "../../../assets/vetor2.svg";
import pizza1 from "../../../assets/pizza1.png";
import Tilt from "react-vanilla-tilt";
import {
  Section,
  SectionContainer,
  SectionDetails,
  SectionDetailsContainer,
  SectionImageContainer,
  SectionTitle,
} from "../../../components/ui/section";

function About() {
  return (
    <>
      <Section className=" mt-[500px]">
        <SectionContainer className="flex-wrap-reverse">
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
              <img src={pizza1} alt="" className="max-w-[700px] w-full" />
            </Tilt>
          </SectionImageContainer>
          <SectionDetailsContainer>
            <SectionTitle>A Melhor Pizza da Região</SectionTitle>
            <SectionDetails>
              Sabor inigualável, ingredientes frescos e tradição italiana em
              cada fatia. Descubra por que somos a melhor escolha na região para
              os verdadeiros amantes de pizza.
            </SectionDetails>
            <Button
              aria-label="Fazer pedido"
              className="bg-yellow-500 text-white hover:scale-110 transition-all duration-500 mt-5"
              size="large"
            >
              Fazer Pedido
            </Button>
          </SectionDetailsContainer>
        </SectionContainer>

        <img
          src={vetor2}
          className="absolute  -top-[300px] -left-5 lg:max-w-[500px]  max-w-[300px] -z-20"
          alt=""
        />
      </Section>
      {/* // vetor  */}
    </>
  );
}

export default About;
