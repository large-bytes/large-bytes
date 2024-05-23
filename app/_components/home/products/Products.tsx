// file: largebytes/app/_components/products/Products.tsx

import SectionTitle from "../../utils/SectionTitle";
import ProductsImage from "./ProductsImage";
import ProductContainer from "./product/ProductContainer/ProductContainer";
import { ReactNode } from "react";
import PlanndLogo from "../../utils/PlanndLogo";
import CalmPlanLogo from "../../utils/CalmPlanLogo";

export type ProductInfoProps = {
  name: string;
  info: string;
  image: ReactNode;
  url: string;
  isReady: boolean;
};

type ProductsProps = ProductInfoProps[];

const products: ProductsProps = [
  {
    name: "Plannd",
    info: "A company rota tool. Helping small businesses to plan their monthly staffing. Minimalist interface for easy use.",
    image: <PlanndLogo />,
    url: "https://plannd.largebytes.co.uk/",
    isReady: false,
  },
  {
    name: "CalmPlan",
    info: "A place to record tasks and prioritise without getting overwhelmed.",
    image: <CalmPlanLogo />,
    url: "https://calmplan.largebytes.co.uk/",
    isReady: false,
  },
];

const Products = () => {
  return (
    <section id="products" className="px-2.5 pb-10 lg:px-5 w-full">
      <SectionTitle>Products</SectionTitle>
      <div className="flex justify-center pb-10">
        <ProductsImage />
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {products &&
          products.map((product) => (
            <ProductContainer key={product.name} {...product} />
          ))}
      </div>
    </section>
  );
};

export default Products;
