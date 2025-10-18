import AboutUs from "./AboutUs";
import ArtCard from "./ArtCard";
import Drip from "./Drip";
import Footer from "./Footer";
import Kultpin from "./Kultpin";

const MainSection = () => {
  return (
    <section className="relative main-background">
      <div className="flex flex-col sm:flex-row relative -top-16 sm:-top-20 md:-top-24 lg:-top-32 justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
        <ArtCard image="/images/art1.png" />
        <ArtCard image="/images/art2.png" className="sm:top-10 relative" />
        <ArtCard image="/images/art3.png" />
      </div>
      {/* <div className="main-background top-0 absolute w-full"></div> */}

      <AboutUs />
      <Drip />
      <Kultpin />

      <Footer />
    </section>
  );
};

export default MainSection;
