import Heading from "components/Heading";
import Marquee from "react-fast-marquee";

const logos = [
  { icon: "coinmarketcap.svg", styles: { height: "2.4em" } },
  { icon: "coinsniper.png", styles: { height: "3em" } },
  { icon: "dextools.png", styles: { height: "2.8em" } },
  { icon: "dexview.png", styles: { height: "2.4em" } },
  { icon: "gate.png", styles: { height: "2.2em" } },
  { icon: "huobi.svg", styles: { height: "2.2em" } },
  { icon: "pinksale.png", styles: { height: "2.4em" } },
  { icon: "coingeko.webp", styles: { height: "2.8em" } },
];

function Partners() {
  return (
    <section>
      <div className="container-wrapper">
        <div className="mb-16">
          <Heading>PARTNERS</Heading>
        </div>

        <Marquee className="flex justify-between text-[60%] sm:text-[90%] xl:text-[110%]">
          {logos.map((item, i) => {
            const imgStyle = {
              filter: "brightness(0) invert(1)",
              ...item?.styles,
            };

            return (
              <div key={i} className="h-full flex items-center">
                <img
                  src={`images/partners/${item.icon}`}
                  alt="img"
                  className="block w-auto mx-[1em] sm:mx-[2em]"
                  style={imgStyle}
                />
              </div>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
}

export default Partners;
