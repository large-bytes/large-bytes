// file: largebytes/app/_components/products/Products.tsx

import SectionTitle from "../../utils/SectionTitle";
import ProductsImage from "./ProductsImage";
import ProductContainer from "./product/ProductContainer/ProductContainer";
import PlanndLogo from "./product/PlanndLogo";
import { ReactNode } from "react";


export type ProductInfoProps = {
  name: string;
  info: string;
  image: ReactNode;
  url: string;
  isReady: boolean;
};

const productInfo: ProductInfoProps = {
  name: "Plannd",
  info: "A company rota tool. Helping small businesses to plan their monthly staffing. Minimalist interface for easy use.",
  image: <PlanndLogo />,
  url: "https://plannd.largebytes.co.uk/",
  isReady: false,
};

const Products = () => {
  return (
    <section id="products" className="px-2.5 pb-10 lg:px-5 w-full">
      <SectionTitle>Products</SectionTitle>
      <div className="flex justify-center pb-10">
        <ProductsImage />
      </div>
      <div className="flex flex-wrap justify-center">
        <ProductContainer {...productInfo}  />
      </div>
    </section>
  );
};

export default Products;
