// file: largebytes/app/_components/who/LinkedInLogo.tsx

const LinkedInLogo: React.FC = () => {
  return (
    <svg
      className="w-16 h-16"
      xmlns="http://www.w3.org/2000/svg"
      xmlSpace="preserve"
      style={{
        fillRule: "evenodd",
        clipRule: "evenodd",
        strokeLinejoin: "round",
        strokeMiterlimit: 2,
      }}
      viewBox="0 0 600 600"
    >
      <path
        d="M27 68h402v379H27z"
        style={{
          fill: "#1ba1e4",
        }}
        transform="matrix(1.49254 0 0 1.58311 -40.298 -107.652)"
      />
      <path d="M600.001 0v599.998h-600V0h600Zm-14 13.999h-572v572h572v-572Z" />
      <path
        d="M135.5 416H69V202.2h66.5V416Zm-33.3-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5Zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416Z"
        style={{
          fill: "#fff",
          fillRule: "nonzero",
        }}
        transform="matrix(1.41314 0 0 1.37903 -16.543 -53.032)"
      />
    </svg>
  );
};

export default LinkedInLogo;
