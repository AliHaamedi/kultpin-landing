import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-20 sm:gap-12 md:gap-16 lg:gap-20 pt-20 sm:pt-28 md:pt-32 lg:pt-40 max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
      <div className="w-full lg:w-1/2">
        <h1 className="font-bob text-secondary text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          About Us
        </h1>
        <p className="text-sm sm:text-base md:text-lg">
          <span className="font-bob text-lg sm:text-xl">KultPin</span> is a
          creative movement dedicated to celebrating the raw energy of hip-hop
          and graffiti culture. We exist to spotlight the artists, the stories,
          and the visuals that define this scene, from street walls to digital
          canvases. Our mission is simple: to promote art that speaks the
          language of rhythm, rebellion, and realness. We collaborate with
          artists around the world, blending styles and mediums to keep the
          spirit of hip-hop alive and evolving.
          <br />
          <span className="font-bob text-lg sm:text-xl">KultPin</span>{" "}
          isn&apos;t just a project, it&apos;s a platform for those who live and
          breathe the culture.
        </p>
        <h2 className="text-primary text-lg sm:text-xl font-bold">
          Powered by Solana
        </h2>
      </div>
      <div className="w-full lg:w-1/2 relative top-8 sm:top-12 md:top-16 ">
        <Image
          src={"/images/packLine.png"}
          width={550}
          height={550}
          alt="pack line"
          className="w-full max-w-[300px] relative left-1/2 -translate-x-1/2 sm:max-w-[400px] md:max-w-[450px] lg:max-w-[550px] h-auto"
        />
        <Image
          src={"/images/pack.png"}
          width={550}
          height={550}
          alt="pack"
          className="absolute -top-1/2 left-1/2 -translate-x-1/2 w-full max-w-[300px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[550px] h-auto"
        />
      </div>
    </div>
  );
};

export default AboutUs;
