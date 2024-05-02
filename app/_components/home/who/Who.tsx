// file: largebytes/app/_components/who/Who.tsx

import SectionTitle from "../../utils/SectionTitle";
import Profile from "./Profile";

const profiles = [
  {
    alt: "Character of Tom",
    src: "/TomImage_600x600.png",
    name: "Tom Fyfe",
    title: "Backend Developer",
    linkedin: "https://www.linkedin.com/in/tomfyfe/",
    text: "Experienced building organised, well tested products specialising in Python with Django. Tom lets loose as a talented musician playing drums around the country when he’s not at his keyboard.",
  },
  {
    alt: "Character of Joe",
    src: "/JoeImage_600x600.png",
    name: "Joe Lander",
    title: "Front End Developer",
    linkedin: "https://www.linkedin.com/in/josephclander/",
    text: "React and TypeScript are Joe’s favourite tools to create responsive user-experiences with modern CSS. In a past career he was a Maths teacher so is no stranger to the tougher logical aspects of the job.",
  },
];

const Who = () => {
  return (
    <section className="flex flex-col py-4 px-2.5 lg:p-5 bg-secondary-blue w-full">
      <SectionTitle>Who We Are</SectionTitle>
      <div className="flex flex-wrap justify-center gap-16 py-8">
        {profiles &&
          profiles.map((profile) => (
            <Profile key={profile.name} {...profile} />
          ))}
      </div>
    </section>
  );
};

export default Who;
