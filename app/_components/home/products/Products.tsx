// file: largebytes/app/_components/products/Products.tsx

import SectionTitle from "../../utils/SectionTitle";
import ProductsImage from "./ProductsImage";
import ProductContainer from "./product/ProductContainer";

const Products = () => {
  return (
    <section className="px-5 pb-10">
      <SectionTitle>Products</SectionTitle>
      <div className="flex justify-center pb-10">
        <ProductsImage />
      </div>
      <ProductContainer />
    </section>
  );
};

export default Products;
