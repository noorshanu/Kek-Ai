import Heading from "components/Heading";
import { useRef, useState } from "react";

const EcosystemCard = ({ img, children, title }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const accordionMenuRef = useRef(null);

  const toggleAccordion = () => {
    setIsAccordionOpen((prevState) => !prevState);
  };

  const getHeight = () => {
    return isAccordionOpen ? accordionMenuRef.current.scrollHeight + "px" : "0";
  };

  const accordionHeight = { height: getHeight() };

  return (
    <div
      onClick={toggleAccordion}
      className={`border-1 border-primary py-7 px-7 rounded-2xl flex space-x-6 cursor-pointer`}
    >
      <div className="bg-[rgba(255,255,255,0.04)] min-w-[3.5rem] h-14 rounded-lg flex items-center justify-center">
        <img src={`images/ecosystem/${img}`} alt="" />
      </div>

      <div className="flex flex-col justify-center">
        <h1 className="font-bold text-xl text-white">{title}</h1>

        <div
          className="overflow-hidden transition-all duration-300 relative"
          style={accordionHeight}
          ref={accordionMenuRef}
        >
          <div className="pt-3">{children}</div>
        </div>
      </div>
    </div>
  );
};

function Ecosystem() {
  return (
    <section>
      <div className="container-wrapper">
        <Heading className="mb-16">OUR ECOSYSTEM</Heading>

        <div className="grid grid-cols-2 gap-14">
          <div className="relative z-10 flex items-center justify-center py-10">
            <div className="max-w-[268px] w-full relative">
              <img
                src="images/ecosystem-mobile.png"
                className="w-full"
                alt=""
              />
            </div>

            <img
              src="images/ecosystem-mobile-bg.png"
              className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none select-none"
              alt=""
            />
          </div>

          <div className="space-y-6">
            <EcosystemCard title="Ai Powered Research Platform" img="ai.svg">
              Unlock the future of research with our AI-driven platform,
              delivering advanced insights and analysis at your fingertips.
              Revolutionize your decision-making process and stay ahead of the
              curve with our powerful AI research tools.
            </EcosystemCard>
            <EcosystemCard title="Ai Smart Wallet" img="smart.svg">
              Experience the future of crypto wallets with our AI-powered smart
              wallet. Seamlessly manage your digital assets, track market
              trends, and execute trades with intelligent insights at your
              fingertips
            </EcosystemCard>
            <EcosystemCard title="Safu Auto Audit System" img="safu.svg">
              Your security shield in the crypto world. Trust our automated
              auditing system to safeguard your investments with unparalleled
              transparency and protection
            </EcosystemCard>
            <EcosystemCard title="Ai Charting Platfrom" img="charting.svg">
              Unleash the power of AI in charting with our revolutionary
              platform, providing real-time insights and predictive analysis for
              smarter trading decisions
            </EcosystemCard>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ecosystem;
