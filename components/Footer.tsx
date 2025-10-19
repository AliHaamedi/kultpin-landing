import Image from "next/image";

const Footer = () => {
  return (
    <div className="py-32 flex flex-col items-center">
      <a href="#" className="cursor-pointer">
        <Image
          src="/icons/logo.svg"
          alt="logo"
          width={60}
          height={60}
          className="size-20 animate-bounce"
        />
      </a>
      <div className="flex items-center justify-center mt-5">
        <h3 className="font-bold text-base">Ping Us Anytime | </h3>
        <a
          href="https://x.com/KultPin"
          target="_blank"
          className="cursor-pointer pl-2"
        >
          <Image
            src="/icons/twitter.svg"
            alt="logo"
            width={20}
            height={20}
            className="size-5"
          />
        </a>
        <a href="mailto:kultpinart@gmail.com" className="cursor-pointer pl-2">
          <Image
            src="/icons/mail.svg"
            alt="logo"
            width={20}
            height={20}
            className="size-5"
          />
        </a>
      </div>
      <p className="font-bold text-xs">© 2025 KultPin. All rights reserved</p>
    </div>
  );
};

export default Footer;
