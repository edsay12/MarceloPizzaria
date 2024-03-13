import { Button } from "@mui/material";
import vetor1 from "../../../assets/vetor1.svg";
import pizza1 from "../../../assets/pizza1.png";
function Hero() {
  return (
    <div className="mt-10">
      <div className="container flex justify-between flex-wrap-reverse ">
        <div className="space-y-10 mt-32 ">
          <div className="lg:max-w-[500px] text-center lg:text-left justify-self-center  ">
            <h1 className="text-gray-400 text-5xl  leading-[55px]">
              A Melhor Pizza da Região
            </h1>
            <p className="  w-full ">
              Sabor inigualável, ingredientes frescos e tradição italiana em
              cada fatia. Descubra por que somos a melhor escolha na região para
              os verdadeiros amantes de pizza.
            </p>
            <Button
              aria-label="Fazer pedido"
              className="bg-yellow-500 text-white hover:scale-110 transition-all duration-500"
              size="large"
            >
              Fazer Pedido
            </Button>
          </div>
        </div>
        <div>
          <img src={pizza1} alt="" className="max-w-[700px] w-full" />
        </div>
      </div>
      <img
        src={vetor1}
        className="absolute top-0 right-0 max-w-[1000px] w-full -z-20"
        alt=""
      />
    </div>
  );
}

export default Hero;
