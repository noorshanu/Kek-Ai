function Heading({ children, className }) {
  return (
    <h1
      className={`font-extrabold text-5xl text-gradient w-fit mx-auto ${className}`}
    >
      {children}
    </h1>
  );
}

export default Heading;
