// file: largebytes/app/_components/Hero.tsx

import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <div className="py-5 flex flex-col">
      <h2 className="text-2xl font-bold w-2/3">
        Creating software solutions for small businesses.
      </h2>
      <HeroImage />
    </div>
  );
};

export default Hero;
