import Image from "next/image";
import ScaleIn from "./animations/ScaleIn";

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-cover bg-center bg-no-repeat hero-background flex justify-center items-center">
      <ScaleIn delay={0.1} duration={0.5}>
        <Image
          // src="/images/LandingGif.gif"
          // src="/images/kultpin.svg"
          src="/images/kultpin.png"
          alt="kultpin"
          width={1284}
          height={277}
          className="p-8 sm:p-16 md:p-24 lg:p-32 w-full max-w-7xl h-auto"
        />
      </ScaleIn>
    </section>
  );
};

export default HeroSection;
