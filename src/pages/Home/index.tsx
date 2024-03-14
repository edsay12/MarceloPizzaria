import Hero from "./components/Hero";
import NavBar from "../_LayoutComponents/NavBar";
import About from "./components/About";

function Home() {
  return (
    <>
      <NavBar />
      <main>
        <Hero />
        <About/>
      </main>
    </>
  );
}

export default Home;
