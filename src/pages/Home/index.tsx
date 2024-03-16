import Hero from "./components/Hero";
import NavBar from "../_Layout/NavBar-item";
import About from "./components/About";
import Services from "./components/Services";
import Recipes from "./components/Recipes";
import Footer from "../_Layout/Footer-item";

function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About/>
        <Services/>
        <Recipes/>
        <Footer/>
      </main>
    </>
  );
}

export default Home;
