import pxToEm from "utils/pxToEm";

const variants = ["text-secondary", "text-secondary"];
const bgVariants = ["green-bg.png", "white-bg.png"];

function Button({ children, variant = 0, px = 20, py = 8, className }) {
  return (
    <button
      style={{
        padding: `${pxToEm(py)} ${pxToEm(px)}`,
        clipPath: "polygon(0 0,100% 0,100% 100%,0 100%)",
      }}
      className={`font-semibold relative text-[1em] z-10 rounded-md ${variants[variant]} ${className}`}
    >
      {children}

      <img
        src={`images/button/${bgVariants[variant]}`}
        className="absolute top-0 left-0 w-full h-full -z-10"
        alt=""
      />
    </button>
  );
}

export default Button;
