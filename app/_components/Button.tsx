// file: largebytes/app/_components/Button.tsx

const Button = ({ children }: { children: String }) => {
  return (
    <button className="bg-primary-blue text-white border-2 border-black px-5 py-3 ">
      {children}
    </button>
  );
};

export default Button;
