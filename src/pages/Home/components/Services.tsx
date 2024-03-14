import {
  CardDescription,
  CardIco,
  CardTitle,
  CardWithIcon,
  CardWithIconContainer,
} from "../../../components/ui/CardWithIcon";
import {
  Section,
  SectionContainer,
  SectionDetails,
  SectionDetailsContainer,
  SectionSubTitle,
  SectionTitle,
} from "../../../components/ui/section";
import LocalPizzaOutlinedIcon from "@mui/icons-material/LocalPizzaOutlined";
import MoodOutlinedIcon from '@mui/icons-material/MoodOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

function Services() {
  return (
    <>
      <Section className="mt-[100px]">
        <SectionContainer className="flex justify-between md:items-center mt-10 flex-wrap">
          <SectionDetailsContainer className="w-full xl:max-w-full xl:text-center">
            <SectionSubTitle>Serviços</SectionSubTitle>
            <SectionTitle className=" text-2xl lg:text-3xl">
              O que nos oferecemos
            </SectionTitle>
            <SectionDetails className="max-w-[600px] mx-auto">
              Sabor inigualável, ingredientes frescos e tradição italiana em
              cada fatia. Descubra por que somos
            </SectionDetails>
          </SectionDetailsContainer>
        </SectionContainer>

        <SectionContainer>
          <CardWithIconContainer>
            <CardWithIcon>
              <CardIco>
                <LocalPizzaOutlinedIcon className="text-[110px]" />
              </CardIco>
              <CardTitle>Comida de Qualidade</CardTitle>
              <CardDescription>
                Sabor inigualável, ingredientes frescos e tradição
                italiana.melhor escolha na região para os verdadeiros amantes de
                pizza
              </CardDescription>
            </CardWithIcon>
            <CardWithIcon>
              <CardIco>
                <MoodOutlinedIcon className="text-[110px]" />
              </CardIco>
              <CardTitle>Sabor Incomparável</CardTitle>
              <CardDescription>
                Sabor inigualável, ingredientes frescos e tradição
                italiana.melhor escolha na região para os verdadeiros amantes de
                pizza
              </CardDescription>
            </CardWithIcon>
            <CardWithIcon>
              <CardIco>
                <LocalShippingOutlinedIcon className="text-[110px]" />
              </CardIco>
              <CardTitle>Entrega Rápida</CardTitle>
              <CardDescription>
                Sabor inigualável, ingredientes frescos e tradição
                italiana.melhor escolha na região para os verdadeiros amantes de
                pizza
              </CardDescription>
            </CardWithIcon>
          </CardWithIconContainer>
        </SectionContainer>
      </Section>
    </>
  );
}

export default Services;
