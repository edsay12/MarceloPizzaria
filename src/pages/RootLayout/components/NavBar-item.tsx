import {
  TopBarHeader,
  TopBar,
  TopBarLink,
  TopLinkList,
  TopLinkLogo,
} from "../../../components/ui/layout/TopBar";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Logo from "../../../components/molecules/Logo";
function NavBar() {
  return (
    <TopBarHeader>
      <TopBar>
        <TopLinkLogo to={"/"}>
          <Logo className="w-32" />
        </TopLinkLogo>

        <TopLinkList className="gap-10">
          <TopBarLink to={"/"}>Inicio</TopBarLink>
          <TopBarLink to={"/Menu"}>Menu</TopBarLink>
          <TopBarLink to={"#Delivery"}>Delivery</TopBarLink>
          <TopBarLink to={"#Sobre"}>Sobre</TopBarLink>
        </TopLinkList>
        <TopLinkList>
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
      </TopBar>
    </TopBarHeader>
  );
}

export default NavBar;
