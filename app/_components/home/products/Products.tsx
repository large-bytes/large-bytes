// file: largebytes/app/_components/products/Products.tsx

import SectionTitle from "../../utils/SectionTitle";
import ProductsImage from "./ProductsImage";
import ProductContainer from "./product/ProductContainer";

const Products = () => {
  return (
    <section id="products" className="px-2.5 pb-10 lg:px-5 w-full">
      <SectionTitle>Products</SectionTitle>
      <div className="flex justify-center pb-10">
        <ProductsImage />
      </div>
      <div className="flex flex-wrap justify-center">
        <ProductContainer />
      </div>
    </section>
  );
};

export default Products;
