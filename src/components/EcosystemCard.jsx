import { useEffect, useRef, useState } from "react";

const EcosystemCard = ({ img, children, title, active, setActiveMenu }) => {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const accordionMenuRef = useRef(null);

  const toggleAccordion = (val) => {
    setIsAccordionOpen((prevState) => (val ? val : !prevState));
  };

  const getHeight = () => {
    return isAccordionOpen ? accordionMenuRef.current.scrollHeight + "px" : "0";
  };

  const accordionHeight = { height: getHeight() };

  // useEffect(() => {
  //   if (active) {
  //     toggleAccordion(true);
  //   } else {
  //     toggleAccordion(false);
  //   }
  // }, [active]);

  return (
    <div
      onClick={() => {
        toggleAccordion();
        // if (active) {
        //   setActiveMenu(null);
        //   return;
        // }

        // if (!active) {
        //   setActiveMenu(title);
        // }
      }}
      className={`border-2 border-[rgba(170,227,62,.3)] py-4 px-4 xl:py-7 xl:px-7 rounded-2xl flex cursor-pointer bg-ecosystem-card lg:bg-none relative`}
    >
      <img
        src="images/corner-peice.png"
        className="absolute top-[-2px] right-[-2px]"
        alt=""
      />

      <div className="bg-[rgba(255,255,255,0.04)] min-w-[2.438rem] sm:min-w-[3rem] h-[2.438rem] sm:h-[3rem] xl:min-w-[3.5rem] xl:h-14 rounded-lg flex items-center justify-center mr-4 lg:mr-6">
        <img src={`images/ecosystem/${img}`} className="w-[50%]" alt="" />
      </div>

      <div className="flex flex-col justify-center">
        <h1 className="font-bold text-base xl:text-xl text-white">{title}</h1>

        <div
          className="overflow-hidden transition-all duration-300 relative"
          style={accordionHeight}
          ref={accordionMenuRef}
        >
          <div className="pt-3 pb-2 lg:pb-0 text-sm sm:text-base">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EcosystemCard;
