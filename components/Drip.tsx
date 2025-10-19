import Image from "next/image";
import ArtCard from "./ArtCard";
import Link from "next/link";
import FadeInUp from "./animations/FadeInUp";
import ScaleIn from "./animations/ScaleIn";
import StaggerContainer from "./animations/StaggerContainer";
import StaggerItem from "./animations/StaggerItem";

const Drip = () => {
  return (
    <div
      className="flex flex-col items-center gap-3 sm:gap-4 md:gap-5 px-4 sm:px-6 md:px-8 pt-20 sm:pt-28 md:pt-32 lg:pt-40"
      id="drip"
    >
      <FadeInUp delay={0.2}>
        <Image
          src="/images/drip.svg"
          alt="drip"
          width={220}
          height={40}
          className="w-40 sm:w-48 md:w-52 lg:w-56 h-auto"
        />
      </FadeInUp>

      <FadeInUp delay={0.4}>
        <h1 className="font-bob text-secondary text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center">
          We&apos;re LIVE on DRiP
        </h1>
      </FadeInUp>

      <FadeInUp delay={0.6}>
        <a href={"https://drip.haus/kultpin"} target="_blank">
          <button className="font-bold hover:bg-secondary hover:border-transparent transition-all py-0.5 px-2 sm:px-2.5 hover:text-primary rounded-sm cursor-pointer text-white bg-transparent duration-400 border border-secondary text-xs sm:text-sm md:text-base">
            Kulture just hit the chain
          </button>
        </a>
      </FadeInUp>

      <StaggerContainer className="flex flex-col sm:flex-row relative justify-center mt-10 max-w-full sm:mt-16 md:mt-20 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mx-auto">
        <Image
          src={"/images/dripLine1.png"}
          width={550}
          height={550}
          alt="drip line 1"
          className="absolute -top-20 sm:-top-32 md:-top-16 left-4 w-24 sm:w-32 md:w-48 lg:w-64 xl:w-80 h-auto opacity-50 sm:opacity-100 hidden sm:block"
        />

        <Image
          src={"/images/dripLine2.png"}
          width={550}
          height={550}
          alt="drip line 2"
          className="absolute -bottom-20 sm:-bottom-32 md:-bottom-16 right-4 w-24 sm:w-32 md:w-48 lg:w-64 xl:w-80 h-auto opacity-50 sm:opacity-100 hidden sm:block"
        />

        <StaggerItem>
          <ArtCard
            image="/images/art4.png"
            className="sm:-rotate-3 sm:translate-x-1/3"
          />
        </StaggerItem>

        <StaggerItem className="z-10">
          <ArtCard image="/images/art5.png" className="z-10" />
        </StaggerItem>

        <StaggerItem>
          <ArtCard
            image="/images/art6.png"
            className="sm:rotate-3 sm:-translate-x-1/3"
          />
        </StaggerItem>
      </StaggerContainer>
    </div>
  );
};

export default Drip;
