import Heading from "components/Heading";

function Tokenomics() {
  return (
    <section className="relative z-10">
      <img
        src="images/props/wires.png"
        className="absolute top-[-14rem] right-0 pointer-events-none select-none -z-10 h-[40rem]"
        alt=""
      />

      <div className="container-wrapper">
        <div className="mb-10">
          <Heading>TOKENOMICS</Heading>
        </div>

        <img
          src="images/tokenomics-chart.png"
          className="w-full max-w-[50rem] mx-auto"
          alt=""
        />
      </div>
    </section>
  );
}

export default Tokenomics;
