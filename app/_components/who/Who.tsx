// file: largebytes/app/_components/who/Who.tsx

import Image from "next/image";
import SectionTitle from "../utils/SectionTitle";
import LinkedInLogo from "./LinkedInLogo";

const Who = () => {
  return (
    <section className="p-5 bg-secondary-blue">
      <SectionTitle>Who We Are</SectionTitle>
      <div className="flex flex-col gap-8 items-center">
        <div className="flex justify-center w-9/12 max-w-sm">
          <Image
            width={600}
            height={600}
            alt="Character of Tom"
            src="/TomImage_600x600.png"
            layout="responsive"
          />
        </div>
        <div className="bg-white flex flex-col px-2 py-5 gap-5">
          <div className="flex justify-between items-center">
            <div>
              <div className="text-2xl font-semibold">Tom Fyfe</div>
              <div className="text-2xl font-light">Backend Developer</div>
            </div>
            <a target="_blank" href="https://www.linkedin.com/in/tomfyfe/">
              <LinkedInLogo />
            </a>
          </div>
          <div>
            Experienced building organised, well tested products specialising in
            Python with Django. Tom let’s loose as a talented musician playing
            drums around the country when he’s not at his keyboard.
          </div>
        </div>
      </div>
    </section>
  );
};

export default Who;
