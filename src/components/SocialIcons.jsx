import { SiGitbook } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
import { FaReddit, FaTelegramPlane, FaTwitter } from "react-icons/fa";

function SocialIcons() {
  return (
    <>
      <a
        href="/"
        className="transition-all duration-100 text-[1em] text-primary hover:text-white"
      >
        <SiGitbook />
      </a>
      <a
        href="/"
        className="transition-all duration-100 text-[1em] text-primary hover:text-white"
      >
        <FaReddit />
      </a>
      <a
        href="/"
        className="transition-all duration-100 text-[1em] text-primary hover:text-white"
      >
        <FaTelegramPlane />
      </a>
      <a
        href="/"
        className="transition-all duration-100 text-[1em] text-primary hover:text-white"
      >
        <FaTwitter />
      </a>
      <a
        href="/"
        className="transition-all duration-100 text-[1em] text-primary hover:text-white"
      >
        <BsMedium />
      </a>
    </>
  );
}

export default SocialIcons;
