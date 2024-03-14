import Hero from "./components/Hero";
import NavBar from "../_Layout/NavBar";
import About from "./components/About";
import Services from "./components/Services";
import Recipes from "./components/Recipes";

function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About/>
        <Services/>
        <Recipes/>
      </main>
    </>
  );
}

export default Home;
