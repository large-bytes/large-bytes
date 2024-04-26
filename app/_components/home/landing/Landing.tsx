// file: largebytes/app/_components/Landing.tsx

import Button from "../../utils/Button";
import Header from "./Header";
import Hero from "./hero/Hero";

const Landing: React.FC = () => {
  return (
    <section className="p-2.5 lg:p-5 bg-secondary-green w-full flex flex-col items-center">
      <div className="flex flex-col gap-10 pb-10 w-full max-w-5xl">
        <Header />
        <Hero />
        <Button>Explore Products</Button>
      </div>
    </section>
  );
};

export default Landing;
