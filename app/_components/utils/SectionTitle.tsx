// file: largebytes/app/_components/utils/SectionTitle.tsx

type SectionTitleProps = {
  children: string;
  colorClass?: string;
};

const SectionTitle = ({ children, colorClass = "" }: SectionTitleProps) => {
  return (
    <h2
      className={`pl-2 text-2xl font-bold my-8 leading-relaxed ${colorClass}`}
    >
      {children}
    </h2>
  );
};

export default SectionTitle;
