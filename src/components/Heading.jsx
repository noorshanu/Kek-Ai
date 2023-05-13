function Heading({ children, className }) {
  return (
    <h1
      className={`font-extrabold text-3xl lg:text-4xl xl:text-5xl text-gradient w-fit mx-auto ${className}`}
    >
      {children}
    </h1>
  );
}

export default Heading;
