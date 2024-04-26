// file: largebytes/app/_components/footer/Footer.tsx

import LargeBytesLogo from "../../utils/LargeBytesLogo";

const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col items-center bg-secondary-green w-full">
      <div className="my-32">
        <LargeBytesLogo />
      </div>
      <p className="py-10 leading-relaxed bg-txt-blue w-full text-white text-center text-xs">
        LARGE BYTES ©️ 2024
      </p>
    </footer>
  );
};

export default Footer;
