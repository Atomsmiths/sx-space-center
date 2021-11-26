import React from "react";

const TD: React.FC<{ classNames?: string }> = ({ classNames, children }) => {
  return (
    <td className={`py-4 h-24 ${classNames ? classNames : ""}`}>{children}</td>
  );
};

export { TD };
