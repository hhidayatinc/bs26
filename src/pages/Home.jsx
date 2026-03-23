import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Conferences from "../components/sections/Conferences";
import Keynote from "../components/sections/Keynote";
import Partners from "../components/sections/Partners";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Conferences />
      <Keynote />
      <Partners />
    </div>
  );
}

export default Home;