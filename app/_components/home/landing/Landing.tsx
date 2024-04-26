// file: largebytes/app/_components/Landing.tsx

import Button from "../../utils/Button";
import Header from "./Header";
import Hero from "./hero/Hero";

const Landing: React.FC = () => {
  return (
    <div className="bg-secondary-green p-2.5 flex flex-col gap-10 pb-10">
      <Header />
      <Hero />
      <Button>Explore Products</Button>
    </div>
  );
};

export default Landing;
