import Heading from "components/Heading";

const Point = ({ point }) => {
  return (
    <div>
      <span className="inline-block min-w-[5px] h-[5px] rounded-full bg-white mr-3 align-middle"></span>
      <span className="text-sm align-middle">{point}</span>
    </div>
  );
};

const RoadmapCard = ({ points, title }) => {
  return (
    <div className="py-6 px-8 rounded-2xl bg-purple-gradient w-fit">
      <h1 className="text-primary font-extrabold text-xl">{title}</h1>

      {points && (
        <div className="mt-4 grid grid-cols-2 gap-y-1 gap-x-8">
          {points.map((point, i) => (
            <Point key={i} point={point} />
          ))}
        </div>
      )}
    </div>
  );
};

function Roadmap() {
  return (
    <section>
      <div className="container-wrapper">
        <div className="mb-20">
          <Heading>ROADMAP</Heading>
        </div>

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
      </div>
    </section>
  );
}

export default Roadmap;
