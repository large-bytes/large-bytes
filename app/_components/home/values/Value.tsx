// file: largebytes/app/_components/values/Value.tsx

type ValueProps = {
  count: number;
  title: string;
  text: string;
};

const Value: React.FC<ValueProps> = ({ count, title, text }) => {
  return (
    <article className="bg-secondary-blue p-3 my-6">
      <div className="flex gap-4 items-center mb-4">
        <div className="bg-primary-green text-xl font-black p-2 text-center flex items-center justify-center w-10 h-10 rounded-full">
          {count}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p>{text}</p>
    </article>
  );
};

export default Value;
