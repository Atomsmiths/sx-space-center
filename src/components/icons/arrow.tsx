import React from "react";

const Arrow: React.FC<{ size: string; classNames?: string }> = ({
  size,
  classNames,
}) => {
  return (
    <span className={`flex items-center ${classNames ? classNames : ""}`}>
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 24 24"
        height={size}
        width={size}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="none" d="M0 0h24v24H0V0z" stroke="none" />
        <path
          d="M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z"
          stroke="none"
        />
      </svg>
    </span>
  );
};

export { Arrow };
