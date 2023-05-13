import { SiGitbook } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
import { FaReddit, FaTelegramPlane, FaTwitter } from "react-icons/fa";

function SocialIcons() {
  return (
    <>
      <a href="/" className="text-[1em] text-primary">
        <SiGitbook />
      </a>
      <a href="/" className="text-[1em] text-primary">
        <FaReddit />
      </a>
      <a href="/" className="text-[1em] text-primary">
        <FaTelegramPlane />
      </a>
      <a href="/" className="text-[1em] text-primary">
        <FaTwitter />
      </a>
      <a href="/" className="text-[1em] text-primary">
        <BsMedium />
      </a>
    </>
  );
}

export default SocialIcons;
