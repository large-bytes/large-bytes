// file: largebytes/app/_components/Hero.tsx

import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <div className="py-5 flex flex-col">
      <h2 className="text-2xl font-bold w-2/3 max-w-md md:text-4xl md:w-5/6">
        Creating software solutions for small businesses.
      </h2>
      <div className="self-end h-5/6 w-5/6 py-10 max-w-2xl">
        <HeroImage />
      </div>
    </div>
  );
};

export default Hero;
