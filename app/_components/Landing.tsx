// file: largebytes/app/_components/Landing.tsx

import Button from "./Button";
import Hero from "./Hero";
import LogoSmall from "./LogoSmall";

const Landing: React.FC = () => {
  return (
    <div className="bg-secondary-green p-2.5 flex flex-col gap-10 pb-10">
      <header className="flex gap-2 items-center">
        <LogoSmall width={'60px'} height={'60px'} />
        <h1 className="font-black text-3xl text-primary-blue">LARGE BYTES</h1>
      </header>
      <Hero />
      <Button>Explore Products</Button>
    </div>
  );
};

export default Landing;
