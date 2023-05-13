import Button from "components/Button";

function Hero() {
  return (
    <section>
      <div className="container-wrapper z-20 relative">
        <img
          src="images/props/rock.png"
          className="absolute top-[40%] sm:top-[5%] right-[4%] w-[2.6rem] sm:w-[4rem] -z-10 pointer-events-none"
          alt=""
        />
        <img
          src="images/props/fire-2.png"
          className="absolute opacity-30 sm:opacity-100 top-[5%] left-[4%] w-[4rem] -z-10 pointer-events-none"
          alt=""
        />
        <img
          src="images/props/fire-1.png"
          className="absolute top-[-22%] right-[24%] w-[2rem] -z-10 pointer-events-none"
          alt=""
        />

        <h1 className="text-center font-extrabold text-gradient text-3xl sm:text-4xl lg:text-5xl xl:text-6xl lh-1_2 mb-6 sm:mb-8">
          Unleash the Power of Memes <br className="hidden sm:block" /> and AI
          in Crypto Trading
        </h1>

        <p className="text-center mb-6 sm:mb-10">
          Trade like a Meme Master with Kek Ai
        </p>

        <div className="grid grid-cols-[130px_130px] xl:grid-cols-[164.84px_164.84px] items-center justify-center gap-6 text-[80%] xl:text-[100%]">
          <Button>Join Community</Button>
          <Button variant={1}>BUY NOW</Button>
        </div>
      </div>

      <div className="relative z-10">
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
            className="absolute top-[5%] right-[14%] w-[3rem] rotate-[60deg] -z-10 pointer-events-none"
            alt=""
          />
          <img
            src="images/props/rock.png"
            className="absolute top-[15%] left-[4%] w-[3rem] rotate-[-60deg] -z-10 pointer-events-none"
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

          <div className="max-w-[931px] w-full mx-auto">
            <div className="w-full rounded-xl border-1 overflow-hidden mb-6 lg:mb-12">
              <img
                src="images/hero-video.png"
                className="w-full scale-[1.1]"
                alt=""
              />
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
