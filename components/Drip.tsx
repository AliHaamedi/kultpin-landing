import Image from "next/image";
import ArtCard from "./ArtCard";

const Drip = () => {
  return (
    <div className="flex flex-col items-center gap-3 sm:gap-4 md:gap-5 px-4 sm:px-6 md:px-8">
      <Image
        src="/images/drip.svg"
        alt="drip"
        width={220}
        height={40}
        className="w-40 sm:w-48 md:w-52 lg:w-56 h-auto"
      />
      <h1 className="font-bob text-secondary text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center">
        We're LIVE on DRiP
      </h1>

      <button className="font-bold hover:bg-secondary hover:border-transparent transition-all py-0.5 px-2 sm:px-2.5 hover:text-primary rounded-sm cursor-pointer text-white bg-transparent duration-400 border border-secondary text-xs sm:text-sm md:text-base">
        Kulture just hit the chain
      </button>

      <div className="flex flex-col sm:flex-row relative justify-center mt-10 sm:mt-16 md:mt-20 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
        <Image
          src={"/images/dripLine1.png"}
          width={550}
          height={550}
          alt="drip line 1"
          className="absolute -top-20 sm:-top-32 md:-top-40 -left-4 sm:-left-8 md:-left-12 lg:-left-16 xl:-left-20 w-24 sm:w-32 md:w-48 lg:w-64 xl:w-80 h-auto opacity-50 sm:opacity-100 hidden sm:block"
        />

        <Image
          src={"/images/dripLine2.png"}
          width={550}
          height={550}
          alt="drip line 2"
          className="absolute -bottom-20 sm:-bottom-32 md:-bottom-40 -right-4 sm:-right-8 md:-right-12 lg:-right-16 xl:-right-20 w-24 sm:w-32 md:w-48 lg:w-64 xl:w-80 h-auto opacity-50 sm:opacity-100 hidden sm:block"
        />
        <ArtCard
          image="/images/art4.png"
          className="sm:-rotate-3 sm:translate-x-1/3"
        />
        <ArtCard image="/images/art5.png" className="z-10" />
        <ArtCard
          image="/images/art6.png"
          className="sm:rotate-3 sm:-translate-x-1/3"
        />
      </div>
    </div>
  );
};

export default Drip;
