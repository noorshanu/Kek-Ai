import Button from "components/Button";

function Hero() {
  return (
    <section>
      <div className="container-wrapper">
        <h1 className="text-center font-extrabold text-gradient text-6xl lh-1_2 mb-8">
          Unleash the Power of Memes <br /> and AI in Crypto Trading
        </h1>

        <p className="text-center mb-10">
          Trade like a Meme Master with Kek Ai
        </p>

        <div className="grid grid-cols-[164.84px_164.84px] items-center justify-center gap-6">
          <Button>Join Community</Button>
          <Button variant={1}>BUY NOW</Button>
        </div>

        <img
          src="images/frog.png"
          className="w-full max-w-[420px] mx-auto"
          alt=""
        />

        <div className="max-w-[631px] w-full bg-white h-[1px] mx-auto mb-8"></div>

        <div className="max-w-[931px] w-full mx-auto">
          <div className="w-full rounded-xl border-1 overflow-hidden mb-12">
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
            informed trading decisions, and become a true Meme Trader. with ease
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
