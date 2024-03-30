import {
  TopBarHeader,
  TopBar,
  TopBarLink,
  TopLinkList,
  TopLinkLogo,
  ResponsiveIcon,
} from "../../../components/ui/layout/TopBar";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Logo from "../../../components/molecules/Logo";
import { useState } from "react";
function NavBar() {
  const [isNavOppen, setIsNavOppen] = useState(false);

  function toggleOppen() {
    setIsNavOppen((value) => !value);
  }
  return (
    <TopBarHeader className="relative">
      <TopBar>
        <TopLinkLogo to={"/"}>
          <Logo className="w-32" />
        </TopLinkLogo>

        <TopLinkList className={`gap-10 absolute md:static bg-white md:bg-transparent md:flex-row flex-col md:w-full w-[200px] rounded-lg  items-center justify-center top-20 right-10 p-5 md:p-10 md:z-0 z-50 ${isNavOppen ?"flex" :"hidden md:flex"}`} >
          <TopBarLink to={"/"}>Inicio</TopBarLink>
          <TopBarLink to={"/Menu"}>Menu</TopBarLink>
          <TopBarLink to={"#Delivery"}>Delivery</TopBarLink>
          <TopBarLink to={"#Sobre"}>Sobre</TopBarLink>
        </TopLinkList>
        <TopLinkList className="hidden md:flex">
          <TopBarLink to={"/menu"} title="Pesquisar">
            <SearchIcon />
          </TopBarLink>
          <TopBarLink to={"/User"} title="Usuario">
            <PersonOutlineIcon />
          </TopBarLink>
          <TopBarLink to={"/cart"} title="Carrinho">
            <ShoppingCartIcon />
          </TopBarLink>
        </TopLinkList>
        

        <ResponsiveIcon isOppen={isNavOppen} toggleOpen={toggleOppen} />
      </TopBar>
    </TopBarHeader>
  );
}

export default NavBar;
