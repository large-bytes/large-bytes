// file: largebytes/app/_components/who/Profile.tsx

import Image from "next/image";
import LinkedInLogo from "../../utils/LinkedInLogo";

type ProfileProps = {
  alt: string;
  src: string;
  name: string;
  title: string;
  linkedin: string;
  text: string;
};

const Profile: React.FC<ProfileProps> = ({
  alt,
  src,
  name,
  title,
  linkedin,
  text,
}) => {
  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="flex justify-center w-9/12 max-w-sm">
        <Image
          className="w-full h-full"
          width={600}
          height={600}
          alt={alt}
          src={src}
        />
      </div>
      <div className="bg-white flex flex-col px-2 py-5 gap-5">
        <div className="flex justify-between items-center">
          <div>
            <div className="text-2xl font-semibold">{name}</div>
            <div className="text-2xl font-light">{title}</div>
          </div>
          <a target="_blank" href={linkedin}>
            <LinkedInLogo />
          </a>
        </div>
        <div>{text}</div>
      </div>
    </div>
  );
};

export default Profile;
