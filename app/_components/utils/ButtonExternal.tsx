// file: largebytes/app/_components/ButtonExternal.tsx
type ButtonExternalProps = {
  children: string;
  link: string;
};

const ButtonExternal = ({ children, link }: ButtonExternalProps) => {
  return (
    <a
      href={link}
      className="bg-primary-blue hover:bg-accent-red active:bg-accent-red duration-300 text-white border-2 border-black px-5 py-3 max-w-lg self-center"
    >
      {children}
    </a>
  );
};

export default ButtonExternal;
