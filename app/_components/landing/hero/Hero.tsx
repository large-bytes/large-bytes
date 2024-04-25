// file: largebytes/app/_components/Hero.tsx

import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <div className="py-5 flex flex-col">
      <h2 className="text-2xl font-bold w-2/3">
        Creating software solutions for small businesses.
      </h2>
      <div className="self-end h-5/6 w-5/6 py-10">
        <HeroImage />
      </div>
    </div>
  );
};

export default Hero;
