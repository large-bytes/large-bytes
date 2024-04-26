// file: largebytes/app/_components/Button.tsx

const Button = ({ children }: { children: String }) => {
  return (
    <button className="bg-primary-blue hover:bg-accent-red active:bg-accent-red duration-300 text-white border-2 border-black px-5 py-3 max-w-lg self-center">
      {children}
    </button>
  );
};

export default Button;
