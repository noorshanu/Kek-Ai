import pxToEm from "utils/pxToEm";

function Button({ children, px = 20, py = 8, className , href}) {
  return (
    <a
      style={{
        padding: `${pxToEm(py)} ${pxToEm(px)}`,
        clipPath: "polygon(0 0,100% 0,100% 100%,0 100%)",
      }}
      href={href}
      target="_blank"
      rel="noreferrer" 
      className={`group text-center font-semibold relative text-secondary text-[1em] z-10 rounded-md transition-all duration-200 hover:-translate-y-[2px] ${className}`}
    >
      {children}

      <img
        src={`images/button/green-bg.png`}
        className="absolute top-0 left-0 w-full h-full -z-10 transition-all duration-200  group-hover:opacity-0"
        alt=""
      />

      <img
        src={`images/button/white-bg.png`}
        className="absolute top-0 left-0 w-full h-full -z-10 transition-all duration-200 opacity-0 group-hover:opacity-100"
        alt=""
      />
    </a>
  );
}

export default Button;
