import Logo from "components/Logo";
import SocialIcons from "components/SocialIcons";

function Footer() {
  return (
    <section>
      <div className="py-7 border-y-1 border-[rgba(100,100,100,0.65)]">
        <div className="container-wrapper">
          <div className="flex items-center justify-between">
            <div className="text-[100%]">
              <Logo />
            </div>

            <div className="flex items-center space-x-[.8em] text-[144%]">
              <SocialIcons />
            </div>
          </div>
        </div>
      </div>

      <div className="container-wrapper">
        <div className="py-7 flex items-center justify-between">
          <p className="opacity-50">
            © Copyright 2023, All Rights Reserved by Kekcoin
          </p>
          <p className="opacity-50">We Love you PePe ❤️</p>
        </div>
      </div>
    </section>
  );
}

export default Footer;
