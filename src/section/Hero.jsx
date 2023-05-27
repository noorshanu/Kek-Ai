import Button from "components/Button";
import SocialIcons from "components/SocialIcons";
import useIntersectionObserver from "hooks/useIntersectionObserver";
import { useEffect, useRef } from "react";
// import {CopyToClipboard} from 'react-copy-to-clipboard';
// import { useCallback,useState } from "react";
function Hero() {
  const videoRef = useRef();
  const isScrolled = useIntersectionObserver(videoRef, { threshold: 0.5 });



  // useEffect(() => {
  //   if (isScrolled) {
  //     // videoRef.current.currentTime = 0;
  //     videoRef.current.play();
  //   } else {
  //     videoRef.current.pause();
  //   }
  // }, [isScrolled]);

  useEffect(() => {
    if (videoRef?.current) {
      const isPlaying =
        videoRef.current.currentTime > 0 &&
        !videoRef.current.paused &&
        !videoRef.current.ended &&
        videoRef.current.readyState > videoRef.current.HAVE_CURRENT_DATA;

      if (isScrolled) {
        // videoRef.current.currentTime = 0;
        if (!isPlaying) {
          videoRef.current.play();
        }
      } else {
        if (isPlaying) {
          videoRef.current.pause();
        }
      }
    }
  }, [isScrolled]);

  return (
    <section>
      <div className="container-wrapper z-20 relative">
        <img
          src="images/props/rock.png"
          className="float absolute top-[40%] sm:top-[5%] right-[4%] w-[2.6rem] sm:w-[4rem] -z-10 pointer-events-none"
          alt=""
        />
        <img
          src="images/props/fire-2.png"
          className="float absolute opacity-30 sm:opacity-100 top-[5%] left-[4%] w-[4rem] -z-10 pointer-events-none"
          alt=""
        />
        <img
          src="images/props/fire-1.png"
          className="float absolute top-[-22%] right-[24%] w-[2rem] -z-10 pointer-events-none"
          alt=""
        />

        <h1 className="text-center font-extrabold text-gradient text-3xl sm:text-4xl lg:text-5xl xl:text-6xl lh-1_2 mb-6 sm:mb-8">
          Unleash the Power of Memes <br className="hidden sm:block" /> and AI
          in Crypto Trading
        </h1>

        <p className="text-center mb-6 sm:mb-10">
          Trade like a Meme Master with Kek Ai
        </p>

        <div className="grid grid-cols-[130px_130px] xl:grid-cols-[164.84px_164.84px_164.84px_164.84px] items-center justify-center gap-6 text-[80%] xl:text-[100%]">
        <Button variant={1} className='flex justify-center gap-1' href='https://pancakeswap.finance/swap?outputCurrency=0xEDddaD89d602Dfc22d90a9EeE81Fe72Dadf9faac'  target="_blank" rel="noreferrer">BUY NOW <img src="images/pcake.svg" className="h-[20px]"/></Button>
        {/* <CopyToClipboard onClick={onCopy} text={value}> */}
          <Button className='cursor-pointer' >Contract </Button>
         {/* </CopyToClipboard> */}
          <Button href='https://kekai.gitbook.io/docs/'>Whitepaper</Button>
          <Button href='https://www.dexview.com/bsc/0xEDddaD89d602Dfc22d90a9EeE81Fe72Dadf9faac'target="_blank" rel="noreferrer">Chart</Button>
        </div>

        <div className="flex items-center justify-center mt-8 sm:mt-10 space-x-[.8em] text-[140%] xl:text-[160%]">
          <SocialIcons />
        </div>
      </div>

      <div className="relative z-10 mt-4 lg:mt-0">
        <div className="absolute top-[0] sm:top-[-4rem] lg:top-[-14rem] left-1/2 -translate-x-1/2 w-full -z-10 max-w-[1280px]">
          <img
            src="images/hero-bg.png"
            className="scale-[2] sm:scale-[1] w-full -z-10"
            alt=""
          />

          <div className="absolute hidden lg:block bottom-0 left-0 w-full h-20 bg-gradient-to-b from-black to-bg z-10"></div>
        </div>

        <div className="container-wrapper relative z-10">
          <img
            src="images/props/rock.png"
            style={{ "--speed": "3s" }}
            className="float absolute top-[5%] right-[14%] w-[3rem] rotate-[60deg] -z-10 pointer-events-none"
            alt=""
          />
          <img
            style={{ "--lifting": "-30px", "--speed": "5s" }}
            src="images/props/rock.png"
            className="float absolute top-[15%] left-[4%] w-[3rem] rotate-[-60deg] -z-10 pointer-events-none"
            alt=""
          />
          <img
            src="images/props/bullet.svg"
            className="absolute top-[12%] left-[16%] w-[.3rem] rotate-[-60deg] -z-10 pointer-events-none"
            alt=""
          />

          <img
            src="images/props/bullet.svg"
            className="absolute top-[25%] left-[4%] w-[.4rem] rotate-[-60deg] -z-10 pointer-events-none"
            alt=""
          />

          <img
            src="images/props/bullet.svg"
            className="absolute top-[12%] right-[16%] w-[.3rem] rotate-[-60deg] -z-10 pointer-events-none"
            alt=""
          />

          <img
            src="images/props/bullet.svg"
            className="absolute top-[25%] right-[4%] w-[.4rem] rotate-[-60deg] -z-10 pointer-events-none"
            alt=""
          />

          <img
            src="images/frog.png"
            className="w-full max-w-[227px] lg:max-w-[420px] mx-auto"
            alt=""
          />

          <div className="max-w-[289px] lg:max-w-[631px] w-full bg-white h-[1px] mx-auto mb-8"></div>

          <div className="max-w-[931px] w-full mx-auto" id="about-section">
            <div className="w-full rounded-xl border-1 overflow-hidden mb-6 lg:mb-12">
              <video
                ref={videoRef}
                src="images/video.MP4"
                className="w-full"
                playsInline
                controls
                autoPlay={true}
                muted="muted"
                // autoPlay={true}
                // loop={true}
                // controls={false}
                // playsInline={true}
                // muted={true}
              ></video>
            </div>

            <p className="text-center">
              Welcome to KekAI, the ultimate platform that combines the power of
              memes and artificial intelligence to revolutionize your crypto
              trading journey. Get ready to embrace the fun, excitement, and
              cutting-edge technology that Kek AI brings to the world of
              cryptocurrency. With our meme-driven approach and advanced AI
              analysis Platform + Wallet, {"you'll"} gain unique insights, make
              informed trading decisions, and become a true Meme Trader. with
              ease
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
