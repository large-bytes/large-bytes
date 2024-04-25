// file: largebytes/app/_components/products/product/ProductContainer.tsx

import LinkedInLogo from "../../utils/LinkedInLogo";
import SectionTitle from "../../utils/SectionTitle";
import ProductImage from "./PlanndImage";

const ProductContainer: React.FC = () => {
  return (
    <div className="border-black border-4 pb-10">
      <div className="bg-primary-green pl-2 w-1/2">
        <SectionTitle>Plannd</SectionTitle>
      </div>
      <p className="px-2 pb-6">
        A company rota tool. Helping small businesses to plan their monthly
        staffing. Minimalist interface for easy use.
      </p>
      <div className="flex justify-center pb-10">
        <ProductImage />
      </div>
      <div className="flex items-center bg-secondary-green p-2">
        <p className="py-4 font-bold">
          Stay connected with us on LinkedIn to hear about updates and the
          expected release.
        </p>
        <a href="https://www.linkedin.com/company/large-bytes">
          <LinkedInLogo />
        </a>
      </div>
    </div>
  );
};

export default ProductContainer;
