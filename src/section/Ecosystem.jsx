import EcosystemCard from "components/EcosystemCard";
import Heading from "components/Heading";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import { useEffect, useRef, useState } from "react";

const accordion_data = [
  {
    title: "Ai Powered Research Platform",
    desc: "Experience the future of crypto wallets with our AI-powered smart wallet. Seamlessly manage your digital assets, track market trends, and execute trades with intelligent insights at your fingertips",
    icon: "ai.svg",
  },
  {
    title: "Ai Smart Wallet",
    desc: "Experience the future of crypto wallets with our AI-powered wallet. Seamlessly manage your digital assets, track markettrends, and execute trades with intelligent insights at your fingertips",
    icon: "smart.svg",
  },
  {
    title: "Safu Auto Audit System",
    desc: "Your security shield in the crypto world. Trust our automated auditing system to safeguard your investments with unparalleled transparency and protection",
    icon: "safu.svg",
  },
  {
    title: "Ai Charting Platfrom",
    desc: "Unleash the power of AI in charting with our platform, providing real-time insights and predictive analysis for smarter trading decisions",
    icon: "charting.svg",
  },
];

function Ecosystem() {
  const [activeMenu, setActiveMenu] = useState(null);
  const videoRef = useRef();
  const isScrolled = useIntersectionObserver(videoRef);

  useEffect(() => {
    if (isScrolled) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [isScrolled]);

  return (
    <section id="ecosystem-section">
      <div className="container-wrapper">
        <Heading className="mb-8 lg:mb-16">OUR ECOSYSTEM</Heading>

        <div className="grid lg:grid-cols-2 gap-14">
          <div className="relative z-10 flex items-center justify-center py-10">
            <div className="max-w-[200px] lg:max-w-[268px] w-full relative z-10 overflow-hidden rounded-[30px] lg:rounded-[38px]">
              <video
                ref={videoRef}
                src="images/economics-video.webm"
                className="w-full"
                playsInline
                controls={false}
                muted={true}
                // autoPlay={true}
                // loop={true}
                // controls={false}
                // playsInline={true}
              ></video>
            </div>

            <img
              src="images/ecosystem-mobile-bg.png"
              className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none select-none"
              alt=""
            />
          </div>

          <div className="space-y-5 lg:space-y-6 relative z-10 order-[-1] lg:order-1">
            <img
              src="images/props/blob.png"
              className="absolute top-1/2 -translate-y-1/2 left-0 w-full pointer-events-none select-none -z-10 scale-[1.6]"
              alt=""
            />

            {accordion_data.map((item, i) => (
              <EcosystemCard
                active={item.title === activeMenu}
                setActiveMenu={setActiveMenu}
                key={i}
                title={item.title}
                img={item.icon}
              >
                {item.desc}
              </EcosystemCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Ecosystem;
