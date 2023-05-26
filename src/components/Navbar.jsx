import useMediaQuery from "hooks/useMediaQuery";
import Button from "./Button";
import Logo from "./Logo";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import useDelayUnmount from "hooks/useDelayUnmount";
import OutsideClickDetector from "hooks/OutsideClickDetector";
import { Link as ScrollLink } from "react-scroll";
import {  FaTelegramPlane } from "react-icons/fa";

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
              <ScrollLink
                to="home"
                className="text-white font-medium text-sm cursor-pointer"
              >
                HOME
              </ScrollLink>
              <ScrollLink
                to="about-section"
                offset={-50}
                className="text-white font-medium text-sm cursor-pointer"
              >
                ABOUT
              </ScrollLink>
              <ScrollLink
                to="ecosystem-section"
                offset={-50}
                className="text-white font-medium text-sm cursor-pointer"
              >
                ECOSYSTEM
              </ScrollLink>
              <ScrollLink
                to="roadmap-section"
                offset={-50}
                className="text-white font-medium text-sm cursor-pointer"
              >
                ROADMAP
              </ScrollLink>
              <a href="https://bscscan.com/address/0xEDddaD89d602Dfc22d90a9EeE81Fe72Dadf9faac" target="_blank" rel="noreferrer">Contract</a>
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
                  <a href="/"> <Logo /></a>
                 
                </div>

                <button className="flex text-2xl" onClick={toggleSidebar}>
                  <IoClose />
                </button>
              </div>
            )}

            {/*  */}
            {!isAbove1024px && (
              <div className="lg:hidden flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-10 lg:absolute top-1/2 lg:-translate-y-1/2 left-1/2 lg:-translate-x-1/2">
                <ScrollLink
                  to="home"
                  className="text-white font-medium text-sm cursor-pointer"
                  onClick={toggleSidebar}
                >
                  HOME
                </ScrollLink>
                <ScrollLink
                  to="about-section"
                  offset={-50}
                  className="text-white font-medium text-sm cursor-pointer"
                  onClick={toggleSidebar}
                >
                  ABOUT
                </ScrollLink>
                <ScrollLink
                  to="ecosystem-section"
                  offset={-50}
                  className="text-white font-medium text-sm cursor-pointer"
                  onClick={toggleSidebar}
                >
                  ECOSYSTEM
                </ScrollLink>
                <ScrollLink
                  to="roadmap-section"
                  offset={-50}
                  className="text-white font-medium text-sm cursor-pointer"
                  onClick={toggleSidebar}
                >
                  ROADMAP
                </ScrollLink>
              </div>
            )}

            <div className="text-[80%] xl:text-[100%] mt-6 lg:mt-0">
              <Button href='https://t.me/kekaibsc' className="w-full lg:w-auto flex justify-center gap-3 items-center">Telegram   <FaTelegramPlane className="text-[1em] text-black" /></Button>
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
