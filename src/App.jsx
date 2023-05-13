import Navbar from "components/Navbar";
import Ecosystem from "section/Ecosystem";
import Footer from "section/Footer";
import Hero from "section/Hero";
import Partners from "section/Partners";
import Roadmap from "section/Roadmap";
import Tokenomics from "section/Tokenomics";

function App() {
  return (
    <div>
      <div className="mb-10">
        <Navbar />
      </div>
      <div className="mb-40">
        <Hero />
      </div>

      <div className="mb-40">
        <Ecosystem />
      </div>

      <div className="mb-40">
        <Roadmap />
      </div>

      <div className="mb-40">
        <Tokenomics />
      </div>

      <div className="mb-28">
        <Partners />
      </div>

      <Footer />
    </div>
  );
}

export default App;
