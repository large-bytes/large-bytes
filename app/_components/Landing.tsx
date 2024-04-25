// file: largebytes/app/_components/Landing.tsx

import LogoSmall from "./LogoSmall";

const Landing: React.FC = () => {
  return (
    <>
      <header className="flex gap-2 items-center">
        <LogoSmall width={'60px'} height={'60px'} />
        <h1 className="font-black text-3xl text-primary-blue">LARGE BYTES</h1>
      </header>
    </>
  );
};

export default Landing;
