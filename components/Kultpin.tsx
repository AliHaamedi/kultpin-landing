import Image from "next/image";
import SlideInLeft from "./animations/SlideInLeft";
import SlideInRight from "./animations/SlideInRight";

const Kultpin = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-8 sm:gap-12 md:gap-16 lg:gap-20 py-20 sm:py-28 md:py-32 lg:py-40 max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
      <SlideInLeft className="w-full lg:w-1/2" delay={0.2}>
        <h1 className="font-bob text-secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          <span className="font-space font-bold">$</span>KULTPIN
        </h1>
        <p className="text-sm sm:text-base md:text-lg">
          <span className="font-bold">
            The next chapter of the movement is on the way.
          </span>
          <br />
          <span className="font-bob text-lg sm:text-xl">KultPin </span>
          The next chapter of the movement is on the way.KultPin Coin will power
          our creative ecosystem on Solana, connecting artists, collectors, and
          fans who live the cultureIt&apos;s more than a token; it&apos;s a
          symbol of rhythm, rebellion, and realness.Stay tuned as we bring the
          streets to the blockchain
        </p>
        <h2 className="text-primary text-lg sm:text-xl font-bold">
          Coming Soon
        </h2>
      </SlideInLeft>
      <SlideInRight className="w-full lg:w-1/2" delay={0.4}>
        <Image
          src={"/images/coin2.gif"}
          width={440}
          height={440}
          alt="pack line"
          className="w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[440px] h-auto mx-auto"
        />
      </SlideInRight>
    </div>
  );
};

export default Kultpin;
