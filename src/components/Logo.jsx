function Logo({ className }) {
  return (
    <div className={`flex items-center space-x-[0.5em] ${className}`}>
      <a href="/" className="pointer">
      <img src="images/logo.png" className="w-[2.625em]" alt="" />

      </a>
      <h1 className="text-[1em] font-bold">KeK AI</h1>
    </div>
  );
}

export default Logo;
