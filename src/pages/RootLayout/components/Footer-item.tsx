import Logo from "../../../components/molecules/Logo";
import {
  Footer,
  FooterBottonText,
  FooterContainer,
  FooterLogo,
  FooterNav,
  FooterSection,
  FooterSectionLink,
  FooterSectionLinks,
  FooterSectionTitle,
} from "../../../components/ui/layout/Footer";
import footerVetor from "../../../assets/footerVetor.svg";
function FooterItem() {
  return (
    <Footer>
      <FooterContainer>
        <FooterLogo>
          <Logo className="w-full" />
        </FooterLogo>

        <FooterNav>
          <FooterSection>
            <FooterSectionTitle>Produtos</FooterSectionTitle>
            <FooterSectionLinks>
              <FooterSectionLink to={""}>Ferramentas</FooterSectionLink>
              <FooterSectionLink to={""}>Integração</FooterSectionLink>
              <FooterSectionLink to={""}>Preços</FooterSectionLink>
              <FooterSectionLink to={""}>FAQ</FooterSectionLink>
            </FooterSectionLinks>
          </FooterSection>

          <FooterSection>
            <FooterSectionTitle>COMPANIA</FooterSectionTitle>
            <FooterSectionLinks>
              <FooterSectionLink to={""}>Privacidade</FooterSectionLink>
              <FooterSectionLink to={""}>Termos de serviço</FooterSectionLink>
            </FooterSectionLinks>
          </FooterSection>

          <FooterSection>
            <FooterSectionTitle>DEVELOPERS</FooterSectionTitle>
            <FooterSectionLinks>
              <FooterSectionLink to={""}>Api Publica</FooterSectionLink>
              <FooterSectionLink to={""}>Documentação</FooterSectionLink>
              <FooterSectionLink to={""}>Guias</FooterSectionLink>
            </FooterSectionLinks>
          </FooterSection>
          <FooterSection>
            <FooterSectionTitle>REDES SOCIAIS</FooterSectionTitle>
            <FooterSectionLinks>
              <FooterSectionLink to={""}>Api Publica</FooterSectionLink>
              <FooterSectionLink to={""}>Documentação</FooterSectionLink>
              <FooterSectionLink to={""}>Guias</FooterSectionLink>
            </FooterSectionLinks>
          </FooterSection>
        </FooterNav>
      </FooterContainer>
      <img
        src={footerVetor}
        className="absolute top-0 right-0 w-[200px] hidden xl:flex"
        alt=""
        loading="lazy"
      />

      <FooterBottonText>2024 © Todos os direitor reservados por <span className="text-yellow-500">Marcelo Pizzaria</span></FooterBottonText>
    </Footer>
  );
}

export default FooterItem;
