// file: largebytes/app/_components/values/Values.tsx

import SectionTitle from "../../utils/SectionTitle";
import Value from "./Value";

const values = [
  {
    count: 1,
    title: "Accessible",
    text: "Provide software solutions that cater to the smaller business owners’ needs.",
  },
  {
    count: 2,
    title: "Simple",
    text: "Create products that are intuitive that focus on getting the task done.",
  },
  {
    count: 3,
    title: "Affordable",
    text: "Find pay structures that allow small businesses to grow when starting out. ",
  },
];

const Values = () => {
  return (
    <section className="px-2.5 pt-2 pb-16 w-full lg:px-5">
      <SectionTitle>Our Values</SectionTitle>
      <div className="flex flex-col items-center">
        {values &&
          values.map((item) => (
            <Value
              key={item.count}
              count={item.count}
              title={item.title}
              text={item.text}
            />
          ))}
      </div>
    </section>
  );
};

export default Values;
