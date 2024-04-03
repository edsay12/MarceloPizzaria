import { Button } from "@mui/material";
import vetor1 from "../../../assets/vetor1.svg";
import pizza1 from "../../../assets/pizza1.svg";
import Tilt from "react-vanilla-tilt";


import {
  Section,
  SectionContainer,
  SectionDetails,
  SectionDetailsContainer,
  SectionImageContainer,
  SectionTitle,
} from "../../../components/ui/section";
import { useNavigate } from "react-router-dom";



function Hero() {
  const navigate = useNavigate();
  // const [imageLoaded, setImageLoaded] = useState(false);

  // useEffect(() => {
  //   const img = new Image();
  //   img.onload = () => {
  //     setImageLoaded(true);
  //   };
  //   img.src = pizza1;
  // }, []);
  return (
    <div>
      <Section className=" ">
        <SectionContainer className="flex-wrap-reverse flex justify-between md:items-center  ">
          <SectionDetailsContainer className="lg:mt-5">
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
              title="bottão de fazer pedido"
              onClick={()=> navigate("/menu")}
            >
              Fazer Pedido
            </Button>
          </SectionDetailsContainer>

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
              <img src={pizza1} alt="vetor de backgroud" className="max-w-[700px] w-full"  />
            </Tilt>
          </SectionImageContainer>
        </SectionContainer>
        {/* // vetor  */}
      </Section>
      <img
        src={vetor1}
        className="absolute top-0 right-0 lg:max-w-[900px]  max-w-[800px] -z-20"
        alt="pizza de queijo"
        loading="lazy"
      />
    </div>
  );
}

export default Hero;
