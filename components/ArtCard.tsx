import Image from "next/image";

const ArtCard = ({
  image,
  className,
}: {
  image: string;
  className?: string;
}) => {
  return (
    <div
      className={`border border-white/20 p-3 sm:p-4 md:p-5 lg:p-6 w-full sm:w-1/2 lg:w-1/3 rounded-[20px] sm:rounded-[24px] md:rounded-[28px] lg:rounded-[34px] backdrop-blur-3xl ${
        className ? className : ""
      }`}
    >
      <Image
        src={image}
        width={450}
        height={600}
        alt="art"
        className="rounded-[20px] sm:rounded-[24px] md:rounded-[28px] lg:rounded-[34px] h-[300px] sm:h-[400px] md:h-[450px] lg:h-[525px] w-full object-cover"
      />
    </div>
  );
};

export default ArtCard;
