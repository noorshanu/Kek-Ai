import Button from "./Button";

function Navbar() {
  return (
    <nav>
      <div className="container-wrapper">
        <div className="py-8 flex items-center justify-between relative">
          <h1 className="text-base font-bold">KeK AI</h1>

          <div className="flex items-center space-x-10 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            <a href="/" className="text-white font-medium text-sm">
              HOME
            </a>
            <a href="/" className="text-white font-medium text-sm">
              ABOUT
            </a>
            <a href="/" className="text-white font-medium text-sm">
              ECOSYSTEM
            </a>
            <a href="/" className="text-white font-medium text-sm">
              ROADMAP
            </a>
          </div>

          <Button>VIEW BETA DAPP</Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
