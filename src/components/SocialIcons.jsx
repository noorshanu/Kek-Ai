// import { SiGitbook } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
import { FaReddit, FaTelegramPlane, FaTwitter } from "react-icons/fa";
import {AiFillInstagram} from 'react-icons/ai'

function SocialIcons() {
  return (
    <>
      <a
        href="https://instagram.com/kekaibsc" target="_blank"  rel="noreferrer"
        className="transition-all duration-100 text-[1em] text-primary hover:text-white"
      >
        <AiFillInstagram />
      </a>
      <a
        href="https://www.reddit.com/r/kekai/" target="_blank"  rel="noreferrer"
        className="transition-all duration-100 text-[1em] text-primary hover:text-white"
      >
        <FaReddit />
      </a>
      <a
        href="https://t.me/kekaibsc" target="_blank"  rel="noreferrer"
        className="transition-all duration-100 text-[1em] text-primary hover:text-white"
      >
        <FaTelegramPlane />
      </a>
      <a
        href="https://twitter.com/kekaibsc" target="_blank"  rel="noreferrer"
        className="transition-all duration-100 text-[1em] text-primary hover:text-white"
      >
        <FaTwitter />
      </a>
      <a
        href="http://kekaibsc.medium.com/" target="_blank"  rel="noreferrer"
        className="transition-all duration-100 text-[1em] text-primary hover:text-white"
      >
        <BsMedium />
      </a>
    </>
  );
}

export default SocialIcons;
