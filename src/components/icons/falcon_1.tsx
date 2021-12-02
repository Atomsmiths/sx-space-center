import React from "react";

const Falcon1: React.FC<{
  size: string;
  classNames?: string;
}> = ({ size, classNames }) => {
  return (
    <span className={`flex items-center ${classNames ? classNames : ""}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 7 79"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M3.575 68.45h-.597v2.495h.597V68.45ZM.782 67.828l-.307.002 2.081-.012.307-.002-2.08.012ZM5.761 67.828l.307.002-2.08-.012-.308-.002 2.081.012Z"
          fill="#999"
        />
        <path d="M6.292 66.107H.262v2.343h6.03v-2.343Z" fill="#595959" />
        <path d="M6.292 34.194H.262V66.11h6.03V34.194Z" fill="url(#a)" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.292 11.851C6.292 5.13 4.282.89 3.277.87 2.272.847.262 5.117.262 11.85v9.38h6.03v-9.38Z"
          fill="url(#b)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6.292 21.231H.262v12.96h6.03v-12.96Z"
          fill="url(#c)"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.992 74.093H2.558l.215.567h1.004l.215-.567Z"
          fill="#666"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.674 78.251c.012-.1.227-1.736 1.205-3.591h.802c.977 1.855 1.192 3.491 1.204 3.591l.001.005H1.673v-.005Z"
          fill="#404040"
        />
        <path d="M4.416 70.944H2.13v3.148h2.285v-3.148Z" fill="gray" />
        <defs>
          <linearGradient
            id="a"
            x1=".262"
            y1="50.152"
            x2="6.292"
            y2="50.152"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff" />
            <stop offset=".12" stopColor="#D0D0D0" />
            <stop offset="1" stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="b"
            x1=".262"
            y1="14.47"
            x2="6.292"
            y2="14.47"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#fff" />
            <stop offset=".12" stopColor="#D0D0D0" />
            <stop offset="1" stopColor="#fff" />
          </linearGradient>
          <linearGradient
            id="c"
            x1=".262"
            y1="27.712"
            x2="6.292"
            y2="27.712"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#6C6C6C" />
            <stop offset=".12" stopColor="#272727" />
            <stop offset="1" stopColor="#4C4C4C" />
          </linearGradient>
        </defs>
      </svg>
    </span>
  );
};

export { Falcon1 };
