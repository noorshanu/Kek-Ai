import Heading from "components/Heading";

function Tokenomics() {
  return (
    <section>
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
