import Logo from "components/Logo";
import SocialIcons from "components/SocialIcons";

function Footer() {
  return (
    <section>
      <div className="pb-7 lg:py-7 border-b lg:border-y-1 border-[rgba(100,100,100,0.65)] relative">
        <img
          src="images/hanging-frog.png"
          className="hidden lg:block absolute bottom-[-1.54rem] left-1/2 -translate-x-1/2 w-full max-w-[197px]"
          alt=""
        />

        <div className="container-wrapper">
          <div className="flex flex-col lg:flex-row space-y-6 lg:space-y-0 items-center justify-between">
            <div className="text-[100%] lg:text-[130%]">
              <Logo />
            </div>

            <div className="flex items-center space-x-[.8em] text-[140%] lg:text-[160%]">
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>

      <div className="container-wrapper">
        <div className="py-7 flex flex-col lg:flow-row space-y-4 lg:space-y-0 items-center justify-between">
          <p className="text-center lg:text-left opacity-50">
            © Copyright 2023, All Rights Reserved by Kekcoin
          </p>
          <p className="text-center lg:text-left opacity-50">
            We Love you PePe ❤️
          </p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
