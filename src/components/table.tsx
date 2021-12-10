import React from "react";

const TH: React.FC<{ classNames?: string }> = ({ classNames, children }) => {
  return (
    <th className={`block md:table-cell ${classNames ? classNames : ""}`}>
      {children}
    </th>
  );
};

const TD: React.FC<{ thLabel: string; classNames?: string }> = ({
  thLabel,
  classNames,
  children,
}) => {
  return (
    <td
      data-title="hello"
      className={`flex justify-between md:table-cell py-4 px-6 md:px-0 h-24 ${
        classNames ? classNames : ""
      }`}
    >
      <p className="md:hidden">{thLabel}</p>
      {children}
    </td>
  );
};

export { TH, TD };
