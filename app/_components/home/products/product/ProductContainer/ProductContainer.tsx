// file: largebytes/app/_components/products/product/ProductContainer.tsx

import LinkedInLogo from "../../../../utils/LinkedInLogo";
import SectionTitle from "../../../../utils/SectionTitle";
import { ProductInfoProps } from "../../Products";
import ButtonExternal from "@/app/_components/utils/ButtonExternal";

const ProductContainer: React.FC<ProductInfoProps> = (product) => {
  return (
    <div className="border-black border-4 pb-10 max-w-md flex flex-col">
      <div className="w-1/2">
        <SectionTitle colorClass={"bg-primary-green"}>
          {product.name}
        </SectionTitle>
      </div>
      <p className="px-2 pb-6">{product.info}</p>
      <div className="flex justify-center pb-6">{product.image}</div>
      <ButtonExternal link={product.url}>Go To Product</ButtonExternal>
      {!product.isReady && (
        <div className="flex items-center bg-accent-red p-2 mt-6">
          <p className="py-4 font-bold">
            Stay connected with us on LinkedIn to hear about updates and the
            expected release.
          </p>
          <a
            className="hover:scale-110 duration-200"
            href="https://www.linkedin.com/company/large-bytes"
            aria-label="Large Byte's LinkedIn page."
            target="_blank"
          >
            <LinkedInLogo />
          </a>
        </div>
      )}
    </div>
  );
};

export default ProductContainer;
