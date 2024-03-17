import { Outlet } from "react-router-dom";
import FooterItem from "./components/Footer-item";
import NavBar from "./components/NavBar-item";

function RootLayout() {
  return (
    <>
      <NavBar />

      <main>
        <Outlet />
      </main>

      <FooterItem />
    </>
  );
}

export default RootLayout;
