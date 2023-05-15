import Heading from "components/Heading";
import useMediaQuery from "hooks/useMediaQuery";

// const Line = ({ variant = "tr" }) => {
//   const variants = {
//     tr: "translate-y-[calc(50%-8px)] border-t-[8px] border-r-[8px] rounded-tr-[50px]",
//     br: "-translate-y-[calc(50%-8px)] border-b-[8px] border-r-[8px] rounded-br-[50px]",
//     tl: "translate-y-[calc(50%-8px)] border-t-[8px] border-l-[8px] rounded-tl-[50px]",
//     bl: "-translate-y-[calc(50%-8px)] border-b-[8px] border-l-[8px] rounded-bl-[50px]",
//     xLine: "translate-y-[calc(50%-8px)] border-t-[8px]",
//   };

//   return <div className={`flex-1 border-[#363636] ${variants[variant]}`}></div>;
// };

// const Point = ({ point }) => {
//   return (
//     <div>
//       <span className="inline-block min-w-[5px] h-[5px] rounded-full bg-white mr-3 align-middle"></span>
//       <span className="text-sm align-middle">{point}</span>
//     </div>
//   );
// };

// const RoadmapCard = ({ points, title }) => {
//   return (
//     <div className="py-6 px-8 rounded-2xl bg-purple-gradient lg:w-fit border-2 border-primary">
//       <h1 className="text-primary font-extrabold text-xl">{title}</h1>

//       {points && (
//         <div className="mt-4 grid sm:grid-cols-2 gap-y-1 gap-x-4 lg:gap-x-8">
//           {points.map((point, i) => (
//             <Point key={i} point={point} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

function Roadmap() {
  const isAbove1024px = useMediaQuery("(min-width: 1024px)");

  return (
    <section className="relative z-10" id="roadmap-section">
      {/* <img
        src="images/props/blob.png"
        className="absolute top-[-18rem] w-[60rem] right-[-30rem] pointer-events-none select-none -z-10"
        alt=""
      />

      <img
        src="images/props/blob.png"
        className="absolute bottom-[-18rem] w-[60rem] left-[-30rem] pointer-events-none select-none -z-10"
        alt=""
      /> */}

      <div className="container-wrapper">
        <div className="mb-10 lg:mb-16">
          <Heading>ROADMAP</Heading>
        </div>

        {isAbove1024px ? (
          <>
            <img
              src="images/roadmap-desktop.svg"
              className="w-full pointer-events-none select-none hidden lg:block"
              alt=""
            />

            {/* <div className="space-y-16">
            <div className="flex space-x-6">
              <RoadmapCard
                title="Phase 1"
                points={[
                  "Concept Creation",
                  "Research and Analysis",
                  "Website Creation",
                  "Social Media Creation",
                  "Tokenomics Creation",
                ]}
              />

              <Line variant="tr" />
            </div>

            <div className="flex space-x-6">
              <Line variant="tl" />

              <RoadmapCard
                title="Phase 2"
                points={[
                  "Audit 1",
                  "2Creation of Sale on Pinksales",
                  "Initial Marketing Starts",
                  "Press & Outdoor Marketing",
                  "Dex Listing",
                  "CMC & CG Listing",
                ]}
              />

              <Line variant="br" />
            </div>

            <div className="flex space-x-6">
              <Line variant="bl" />

              <RoadmapCard
                title="Phase 3"
                points={[
                  "Initial CEX Lisiting",
                  "Beta Platform live",
                  "Marketing Push",
                  "Success Party",
                  "Second CEX Lisiting",
                ]}
              />

              <Line variant="xLine" />

              <RoadmapCard
                title="Phase 4"
                points={[
                  "Launch of Platform + Ai Smart Wallet",
                  "Main Stream Marketing Push",
                  "3rd CEX Lisiting",
                  "Stunt Marketing Events",
                ]}
              />
            </div>
          </div> */}
          </>
        ) : (
          <>
            <img
              src="images/roadmap-mobile.svg"
              className="w-full max-w-[364px] mx-auto pointer-events-none select-none block lg:hidden"
              alt=""
            />

            {/* <div className="space-y-10 lg:space-y-16">
            <RoadmapCard
              title="Phase 1"
              points={[
                "Concept Creation",
                "Research and Analysis",
                "Website Creation",
                "Social Media Creation",
                "Tokenomics Creation",
              ]}
            />

            <RoadmapCard
              title="Phase 2"
              points={[
                "Audit 1",
                "2Creation of Sale on Pinksales",
                "Initial Marketing Starts",
                "Press & Outdoor Marketing",
                "Dex Listing",
                "CMC & CG Listing",
              ]}
            />

            <RoadmapCard
              title="Phase 3"
              points={[
                "Initial CEX Lisiting",
                "Beta Platform live",
                "Marketing Push",
                "Success Party",
                "Second CEX Lisiting",
              ]}
            />

            <RoadmapCard
              title="Phase 4"
              points={[
                "Launch of Platform + Ai Smart Wallet",
                "Main Stream Marketing Push",
                "3rd CEX Lisiting",
                "Stunt Marketing Events",
              ]}
            />
          </div> */}
          </>
        )}
      </div>
    </section>
  );
}

export default Roadmap;
