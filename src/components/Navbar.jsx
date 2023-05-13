import useMediaQuery from "hooks/useMediaQuery";
import Button from "./Button";
import Logo from "./Logo";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import useDelayUnmount from "hooks/useDelayUnmount";
import OutsideClickDetector from "hooks/OutsideClickDetector";

function Navbar() {
  const isAbove1024px = useMediaQuery("(min-width : 1024px)");
  const [isSidebarVisible, setSidebarVisibility] = useState(false);
  const shouldRender = useDelayUnmount(isSidebarVisible, 300);

  const toggleSidebar = () => {
    setSidebarVisibility((val) => !val);
  };

  const sidebarRef = OutsideClickDetector(() => {
    setSidebarVisibility(false);
  }, isSidebarVisible === true);

  return (
    <nav>
      <div className="container-wrapper">
        <div className="py-5 lg:py-8 flex items-center justify-between relative">
          <Logo className="text-[100%] lg:text-[110%]" />

          {!isAbove1024px && (
            <button className="flex lg:hidden" onClick={toggleSidebar}>
              <img src="images/hamburger.svg" className="w-5" alt="" />
            </button>
          )}

          {isAbove1024px && (
            <div className="hidden lg:flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-10 lg:absolute top-1/2 lg:-translate-y-1/2 left-1/2 lg:-translate-x-1/2">
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
          )}

          <div
            ref={sidebarRef}
            className={`fixed lg:static top-0 right-0 w-[240px] h-screen bg-secondary py-5 px-8 lg:p-0 lg:bg-transparent lg:h-auto lg:w-auto transition-all duration-300 z-[200] ${
              isSidebarVisible
                ? "translate-x-0"
                : "translate-x-[240px] lg:translate-x-0"
            }`}
          >
            {!isAbove1024px && (
              <div className="flex items-center justify-between lg:hidden mb-6">
                <div>
                  <Logo />
                </div>

                <button className="flex text-2xl" onClick={toggleSidebar}>
                  <IoClose />
                </button>
              </div>
            )}

            {/*  */}
            {!isAbove1024px && (
              <div className="lg:hidden flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-10 lg:absolute top-1/2 lg:-translate-y-1/2 left-1/2 lg:-translate-x-1/2">
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
            )}

            <div className="text-[80%] xl:text-[100%] mt-6 lg:mt-0">
              <Button className="w-full lg:w-auto">VIEW BETA DAPP</Button>
            </div>
          </div>

          {!isAbove1024px && (
            <>
              {shouldRender && (
                <div
                  className={`black-screen-animated z-[100] ${
                    isSidebarVisible ? "show" : "hide"
                  }`}
                ></div>
              )}
            </>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
