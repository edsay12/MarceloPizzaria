import Logo from "../../components/molecules/Logo";
import {
  NavBar,
  NavBarHeader,
  NavBarLink,
  NavLinkList,
  NavLinkLogo,
} from "../../components/ui/layout/TopBar";

import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function Home() {
  return (
    <>
      <NavBarHeader>
        <NavBar>
          <NavLinkLogo to={"/"}>
            <Logo />
          </NavLinkLogo>

          <NavLinkList>
            <NavBarLink to={"/"}>Inicio</NavBarLink>
            <NavBarLink to={"#Menu"}>Menu</NavBarLink>
            <NavBarLink to={"#Delivery"}>Delivery</NavBarLink>
            <NavBarLink to={"#Sobre"}>Sobre</NavBarLink>
          </NavLinkList>
          <NavLinkList>
            <NavBarLink to={"/Cardapio"}>
              <SearchIcon />
            </NavBarLink>
            <NavBarLink to={"#Menu"}>
              <PersonOutlineIcon />
            </NavBarLink>
            <NavBarLink to={"/Carrinho"}>
              <ShoppingCartIcon />
            </NavBarLink>
          </NavLinkList>
    
        </NavBar>
      </NavBarHeader>
    </>
  );
}

export default Home;
