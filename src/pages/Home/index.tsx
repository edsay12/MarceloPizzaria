import Hero from "./components/Hero";
import NavBar from "../_Layout/NavBar";
import About from "./components/About";
import Services from "./components/Services";

function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About/>
        <Services/>
      </main>
    </>
  );
}

export default Home;
