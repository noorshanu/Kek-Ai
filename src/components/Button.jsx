import pxToEm from "utils/pxToEm";

const variants = ["text-secondary bg-primary", "text-secondary bg-white"];

function Button({ children, variant = 0, px = 20, py = 8, className }) {
  return (
    <button
      style={{ padding: `${pxToEm(py)} ${pxToEm(px)}` }}
      className={`font-semibold text-base rounded-md ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;
